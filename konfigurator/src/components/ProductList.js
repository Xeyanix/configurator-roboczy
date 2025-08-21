import React, { useState, useEffect } from "react";
import styles from "../common/styles/ProductList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  loadCartList,
  setProductsLoadingState,
  addToLastViewed,
  setConfigPart,
  clearAllConfig,
} from "../redux/appSlice";
import { v4 as uuidv4 } from "uuid";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ProductList({ filters }) {
  const loadingStatus = useSelector((state) => state.app.loadingStatus);
  const lastViewedProducts = useSelector((state) => state.app.lastViewed);
  const summaryConfig = useSelector((state) => state.app.summaryConfig); // <-- TYLKO REDUX
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);
  const [motherboards, setMotherboards] = useState([]);
  const [processors, setProcessors] = useState([]);
  const [rams, setRAMs] = useState([]);
  const [ssds, setSSDs] = useState([]);
  const [chargers, setChargers] = useState([]);
  const [gpus, setGpus] = useState([]);
  const [cases, setCases] = useState([]);



  const apiUrl =
    process.env.REACT_APP_API_URL ||
    (window.location.hostname === "localhost"
      ? "http://localhost:10000"
      : "https://my-node-api-7rco.onrender.com");

  // --- HELPERY: normalizacja i detekcja ---
  const normRaw = (v) => (v ?? "").toString().toUpperCase().replace(/\s|-/g, "");

  const normSocket = (v) => {
    const t = normRaw(v).replace(/^SOCKET/, "");
    if (t.includes("LGA1700")) return "LGA1700";
    if (t.includes("LGA1200")) return "LGA1200";
    if (t.includes("AM5")) return "AM5";
    if (t.includes("AM4")) return "AM4";
    return t || "";
  };

  const detectSocket = (p) => {
    const candidates = [
      p?.specs?.socket,
      p?.specs?.cpu_socket,
      p?.specs?.socket_type,
      p?.specs?.socketType,
      p?.name, // fallback: czasem socket jest w nazwie
    ];
    for (const c of candidates) {
      const s = normSocket(c);
      if (s) return s;
    }
    return "";
  };

  const detectDDR = (p) => {
    const text = [
      p?.specs?.memory_type,
      p?.specs?.ram_type,
      p?.specs?.type,
      p?.name,
    ].map(normRaw).join("|");
    if (text.includes("DDR5")) return "DDR5";
    if (text.includes("DDR4")) return "DDR4";
    return "";
  };

  const getBoardDDR = (board) => detectDDR(board);

  useEffect(() => {
    dispatch(setProductsLoadingState("Loading"));
    axios.get(`${apiUrl}/products`)
      .then(res => {
        console.log("Pobrane produkty:", res.data);
        setAllProducts(res.data || []);
        dispatch(setProductsLoadingState("success"));
      })
      .catch(() => dispatch(setProductsLoadingState("error")));
  }, [apiUrl, dispatch]);

  useEffect(() => {
    // krótki norm bez map socketów
    const norm = (v) => (v ?? "").toString().replace(/\s|-/g, "").toUpperCase();

    // 1) Filtry z UI (obsłuż zarówno "cpu" jak i "socket", jeśli UI różnie je nazywa)
    const socketFilterFromUi = [
      ...(filters?.cpu ?? []),
      ...(filters?.socket ?? []),
    ].map(normSocket).filter(Boolean);

    const formFactorFilter = (filters?.formFactor || []).map(norm);
    const memoryFilterFromUi = (filters?.memory || []).map(norm);
    const chipsetFilter = (filters?.chipset || []).map(norm);

    // 2) Wymuszenie zgodności po WYBORZE płyty
    const selectedBoardSocket = summaryConfig?.motherboard ? detectSocket(summaryConfig.motherboard) : "";
    const selectedBoardDDR = summaryConfig?.motherboard ? getBoardDDR(summaryConfig.motherboard) : "";

    // Jeśli płyta wybrana → ignorujemy sprzeczne kliknięcia w filtrach
    const effectiveSocketFilter = selectedBoardSocket ? [selectedBoardSocket] : socketFilterFromUi;
    const effectiveMemoryFilter = selectedBoardDDR ? [selectedBoardDDR] : memoryFilterFromUi;

    // --- PŁYTY GŁÓWNE (tu używamy TYLKO filtrów z UI) ---
    setMotherboards(
      allProducts
        .filter(p => p.type === "Płyta główna" || p.type === "Motherboard")
        .filter(p => {
          const socket = detectSocket(p);
          const ff = norm(p.specs?.form_factor);
          const mem = norm(p.specs?.memory_type);
          const chipset = norm(p.specs?.chipset);

          const cpuMatch = socketFilterFromUi.length === 0 || socketFilterFromUi.includes(socket);
          const ffMatch = formFactorFilter.length === 0 || formFactorFilter.includes(ff);
          const memMatch = memoryFilterFromUi.length === 0 || memoryFilterFromUi.includes(mem);
          const chipsetMatch = chipsetFilter.length === 0 || chipsetFilter.includes(chipset);
          return cpuMatch && ffMatch && memMatch && chipsetMatch;
        })
    );

    // --- PROCESORY (tu wymuszamy socket płyty, jeśli wybrana) ---
    setProcessors(
      allProducts
        .filter(p => p.type === "Procesor" || p.type === "CPU" || p.type === "Processor")
        .filter(p => {
          const s = detectSocket(p);
          return effectiveSocketFilter.length === 0 || effectiveSocketFilter.includes(s);
        })
    );

    // --- RAM (wymuszamy DDR płyty, jeśli wybrana) ---
    setRAMs(
      allProducts
        .filter(p => ["RAM", "Pamięć RAM", "Memory"].includes(p.type))
        .filter(p => {
          const ramDDR = detectDDR(p);

          // 1) zgodność z płytą
          if (selectedBoardDDR && ramDDR && selectedBoardDDR !== ramDDR) return false;

          // 2) zgodność z ewentualnym filtrem użytkownika
          if (effectiveMemoryFilter.length === 0) return true;
          return ramDDR && effectiveMemoryFilter.includes(ramDDR);
        })
    );

    // --- reszta ---
    setSSDs(allProducts.filter(p => p.type === "SSD"));
    setChargers(allProducts.filter(p => p.type === "Charger"));
    setGpus(allProducts.filter(p => p.type === "GPU"));
    setCases(allProducts.filter(p => p.type === "Cases" || p.type === "Obudowa"));
  }, [allProducts, filters, summaryConfig]);




  // Funkcja wyboru części
  const handleItemClick = async (product) => {
    let type = "";
    switch (product.type || product.category || product.group) {
      case "Płyta główna":
      case "Motherboard":
        type = "motherboard"; break;
      case "Procesor":
        type = "processor"; break;
      case "RAM":
        type = "ram"; break;
      case "SSD":
        type = "ssd"; break;
      case "Charger":
        type = "charger"; break;
      case "GPU":
        type = "gpu"; break;
      case "Cases":
      case "Obudowa":
        type = "case"; break;
      default:
        type = ""; break;
    }
    if (!type) return;

    if (type === "processor" && summaryConfig?.motherboard) {
      const mbSocket = detectSocket(summaryConfig.motherboard);
      const cpuSocket = detectSocket(product);
      if (mbSocket && cpuSocket && mbSocket !== cpuSocket) {
        alert(`Ten procesor (${cpuSocket}) nie pasuje do wybranej płyty (${mbSocket}).`);
        return;
      }
    }

    if (type === "ram" && summaryConfig?.motherboard) {
      const mbDDR = getBoardDDR(summaryConfig.motherboard);
      const ramDDR = detectDDR(product);
      if (mbDDR && ramDDR && mbDDR !== ramDDR) {
        alert(`Ten RAM (${ramDDR}) nie pasuje do wybranej płyty (${mbDDR}).`);
        return;
      }
    }

    // Zapisz do Redux (podsumowanie)
    dispatch(setConfigPart({ type, part: product }));

    // Dodaj do koszyka na backend
    const newProduct = { ...product, id: uuidv4() };
    await axios.post(`${apiUrl}/products/shoppingList/new`, newProduct);
    const shoppingListResponse = await axios.get(`${apiUrl}/products/shoppingList`);
    dispatch(loadCartList(shoppingListResponse.data));

    // Dodaj do ostatnio oglądanych jeśli trzeba
    if (!lastViewedProducts.find(p => p.id === product.id)) {
      dispatch(addToLastViewed([...lastViewedProducts, product]));
    }
  };

  // Usuwanie całej konfiguracji
  const handleRebuild = () => {
    dispatch(clearAllConfig());
  };

  // Podpisy pod kafelkami
  const labels = {
    motherboard: "Wybrana płyta główna",
    processor: "Wybrany procesor",
    ram: "Wybrany RAM",
    ssd: "Wybrany SSD",
    charger: "Wybrany zasilacz",
    gpu: "Wybrany GPU",
    case: "Wybrana obudowa",
  };

  // Sprawdzamy, czy wszystkie komponenty są wybrane
  const allSelected = summaryConfig.motherboard &&
    summaryConfig.processor &&
    summaryConfig.ram &&
    summaryConfig.ssd &&
    summaryConfig.charger &&
    summaryConfig.gpu &&
    summaryConfig.case;

  // Wyświetlanie wybranej części (po wyborze)
  function SelectedTile({ label, selected, onChange }) {
    if (!selected) return null;
    return (
      <div className={styles.selectedTitle}>
        <h1>
          <CheckCircleIcon style={{ color: "green", fontSize: 32, verticalAlign: "middle" }} />   {label}
        </h1>
        <p><strong>{selected.name}</strong></p>
        <p>Cena: {selected.price} zł</p>
        <button className={styles.myButton} onClick={onChange}>
          Zmień {label.split(' ')[1].toLowerCase()}
        </button>
      </div>
    );
  }

  // Funkcja renderująca wybór komponentu
  function renderStep(label, items, onSelect) {
    return (
      <>
        <div className={styles.choosen}>Wybierz {label}:</div>
        <div className={styles.productContainer}>
          <div className={styles.leftColumn}>
            {items.length > 0 ? (
              items.map(item => (
                <div key={item.id} className={styles.productsListNames}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.productImage}
                    />
                  )}

                  <h3>{item.name}</h3>
                  <p>Cena: {item.price} zł</p>
                  <button className={styles.myButton} onClick={() => onSelect(item)}>
                    Dodaj do koszyka
                  </button>
                </div>
              ))
            ) : (
              <p>Ładowanie {label.toLowerCase()}...</p>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        {allSelected && (
          <button className={styles.myButton} onClick={handleRebuild}>
            Złóż komputer ponownie
          </button>
        )}

        <div className={styles.smallerFont}>
          {!summaryConfig.motherboard
            ? renderStep("płytę główną", motherboards, handleItemClick)
            : <SelectedTile label={labels.motherboard} selected={summaryConfig.motherboard} onChange={() => dispatch(setConfigPart({ type: "motherboard", part: null }))} />
          }
          {summaryConfig.motherboard && !summaryConfig.processor
            ? renderStep("procesor", processors, handleItemClick)
            : summaryConfig.processor && <SelectedTile label={labels.processor} selected={summaryConfig.processor} onChange={() => dispatch(setConfigPart({ type: "processor", part: null }))} />
          }
          {summaryConfig.processor && !summaryConfig.ram
            ? renderStep("pamięć RAM", rams, handleItemClick)
            : summaryConfig.ram && <SelectedTile label={labels.ram} selected={summaryConfig.ram} onChange={() => dispatch(setConfigPart({ type: "ram", part: null }))} />
          }
          {summaryConfig.ram && !summaryConfig.ssd
            ? renderStep("dysk SSD", ssds, handleItemClick)
            : summaryConfig.ssd && <SelectedTile label={labels.ssd} selected={summaryConfig.ssd} onChange={() => dispatch(setConfigPart({ type: "ssd", part: null }))} />
          }
          {summaryConfig.ssd && !summaryConfig.charger
            ? renderStep("zasilacz", chargers, handleItemClick)
            : summaryConfig.charger && <SelectedTile label={labels.charger} selected={summaryConfig.charger} onChange={() => dispatch(setConfigPart({ type: "charger", part: null }))} />
          }
          {summaryConfig.charger && !summaryConfig.gpu
            ? renderStep("GPU", gpus, handleItemClick)
            : summaryConfig.gpu && <SelectedTile label={labels.gpu} selected={summaryConfig.gpu} onChange={() => dispatch(setConfigPart({ type: "gpu", part: null }))} />
          }
          {summaryConfig.gpu && !summaryConfig.case
            ? renderStep("obudowę", cases, handleItemClick)
            : summaryConfig.case && <SelectedTile label={labels.case} selected={summaryConfig.case} onChange={() => dispatch(setConfigPart({ type: "case", part: null }))} />
          }
        </div>
      </header>
    </div>
  );
}

export default ProductList;
