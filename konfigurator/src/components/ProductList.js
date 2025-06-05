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

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000";

  // 1. Pobierz WSZYSTKIE produkty raz na starcie
  useEffect(() => {
    dispatch(setProductsLoadingState("Loading"));
    axios.get(`${apiUrl}/products`)
      .then(res => {
        setAllProducts(res.data || []);
        dispatch(setProductsLoadingState("success"));
      })
      .catch(() => dispatch(setProductsLoadingState("error")));
  }, [apiUrl, dispatch]);

  // 2. FILTRUJ produkty wg filtrów i podziel na kategorie
  useEffect(() => {
    const markaKey = "brand";
    const typKey = "typ";
    const cenaKey = "price";

    const filtered = allProducts.filter(prod => {
      if (filters && filters.marki && filters.marki.length && !filters.marki.includes(prod[markaKey])) return false;
      if (filters && filters.typ && prod[typKey] !== filters.typ) return false;
      if (filters && filters.cena && (prod[cenaKey] < filters.cena[0] || prod[cenaKey] > filters.cena[1])) return false;
      return true;
    });

    setMotherboards(filtered.filter(p => p.type === "Płyta główna"));
    setProcessors(filtered.filter(p => p.type === "Procesor"));
    setRAMs(filtered.filter(p => p.type === "RAM"));
    setSSDs(filtered.filter(p => p.type === "SSD"));
    setChargers(filtered.filter(p => p.type === "Charger"));
    setGpus(filtered.filter(p => p.type === "GPU"));
    setCases(filtered.filter(p => p.type === "Cases"));
  }, [allProducts, filters]);

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
