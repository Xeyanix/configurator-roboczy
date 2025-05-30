import React, { useState, useEffect } from "react";
import styles from "../common/styles/ProductList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  loadCartList,
  setProductsLoadingState,
  addToLastViewed,
} from "../redux/appSlice";
import { v4 as uuidv4 } from "uuid";
import { useConfig } from "../context/ConfigContext";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ProductList({ filters }) { // <--- odbieramy filters!
  const loadingStatus = useSelector((state) => state.app.loadingStatus);
  const lastViewedProducts = useSelector((state) => state.app.lastViewed);
  const dispatch = useDispatch();


  const [allProducts, setAllProducts] = useState([]);

  const [motherboards, setMotherboards] = useState([]);
  const [processors, setProcessors] = useState([]);
  const [rams, setRAMs] = useState([]);
  const [ssds, setSSDs] = useState([]);
  const [chargers, setChargers] = useState([]);
  const [gpus, setGpus] = useState([]);
  const [cases, setCases] = useState([]);

  const {
    selectedMotherboard, setSelectedMotherboard,
    selectedProcessor, setSelectedProcessor,
    selectedRAM, setSelectedRAM,
    selectedSSD, setSelectedSSD,
    selectedCharger, setSelectedCharger,
    selectedGPU, setSelectedGPU,
    selectedCase, setSelectedCase,
    handleRebuild
  } = useConfig();

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
    // UWAGA! Zmień poniżej 'brand' na 'marka', jeśli w Twoich danych jest 'marka' a nie 'brand'!
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

  // Wybor i dodawanie jak miałeś
  const handleItemClick = async (product) => {
    const newProduct = { ...product, id: uuidv4() };
    let type = "";
    switch (product.type || product.category || product.group) {
      case "Płyta główna":
      case "Motherboard":
        type = "Płyta główna"; break;
      case "Procesor":
        type = "Procesor"; break;
      case "RAM":
        type = "RAM"; break;
      case "SSD":
        type = "SSD"; break;
      case "Charger":
        type = "Charger"; break;
      case "GPU":
        type = "GPU"; break;
      case "Cases":
      case "Obudowa":
        type = "Cases"; break;
      default:
        type = product.type || ""; break;
    }
    const productWithType = { ...product, type };

    switch (type) {
      case "Płyta główna":
        setSelectedMotherboard(productWithType); break;
      case "Procesor":
        setSelectedProcessor(productWithType); break;
      case "RAM":
        setSelectedRAM(productWithType); break;
      case "SSD":
        setSelectedSSD(productWithType); break;
      case "Charger":
        setSelectedCharger(productWithType); break;
      case "GPU":
        setSelectedGPU(productWithType); break;
      case "Cases":
        setSelectedCase(productWithType); break;
      default:
        break;
    }

    await axios.post(`${apiUrl}/products/shoppingList/new`, newProduct);
    const shoppingListResponse = await axios.get(`${apiUrl}/products/shoppingList`);
    dispatch(loadCartList(shoppingListResponse.data));
    if (!lastViewedProducts.find(p => p.id === product.id)) {
      dispatch(addToLastViewed([...lastViewedProducts, product]));
    }

    switch (product.type) {
      case "Płyta główna":
        setSelectedMotherboard(product); break;
      case "Procesor":
        setSelectedProcessor(product); break;
      case "RAM":
        setSelectedRAM(product); break;
      case "SSD":
        setSelectedSSD(product); break;
      case "Charger":
        setSelectedCharger(product); break;
      case "GPU":
        setSelectedGPU(product); break;
      case "Cases":
        setSelectedCase(product); break;
      default:
        break;
    }
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
  const allSelected = selectedMotherboard &&
    selectedProcessor &&
    selectedRAM &&
    selectedSSD &&
    selectedCharger &&
    selectedGPU &&
    selectedCase;

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

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        {allSelected && (
          <button className={styles.myButton} onClick={handleRebuild}>
            Złóż komputer ponownie
          </button>
        )}

        <div className={styles.smallerFont}>
          {!selectedMotherboard
            ? renderStep("płytę główną", motherboards, handleItemClick)
            : <SelectedTile label={labels.motherboard} selected={selectedMotherboard} onChange={() => setSelectedMotherboard(null)} />
          }

          {selectedMotherboard && !selectedProcessor
            ? renderStep("procesor", processors, handleItemClick)
            : selectedProcessor && <SelectedTile label={labels.processor} selected={selectedProcessor} onChange={() => setSelectedProcessor(null)} />
          }

          {selectedMotherboard && selectedProcessor && !selectedRAM
            ? renderStep("pamięć RAM", rams, handleItemClick)
            : selectedRAM && <SelectedTile label={labels.ram} selected={selectedRAM} onChange={() => setSelectedRAM(null)} />
          }

          {selectedMotherboard && selectedProcessor && selectedRAM && !selectedSSD
            ? renderStep("dysk SSD", ssds, handleItemClick)
            : selectedSSD && <SelectedTile label={labels.ssd} selected={selectedSSD} onChange={() => setSelectedSSD(null)} />
          }

          {selectedMotherboard && selectedProcessor && selectedRAM && selectedSSD && !selectedCharger
            ? renderStep("zasilacz", chargers, handleItemClick)
            : selectedCharger && <SelectedTile label={labels.charger} selected={selectedCharger} onChange={() => setSelectedCharger(null)} />
          }

          {selectedMotherboard && selectedProcessor && selectedRAM && selectedSSD && selectedCharger && !selectedGPU
            ? renderStep("GPU", gpus, handleItemClick)
            : selectedGPU && <SelectedTile label={labels.gpu} selected={selectedGPU} onChange={() => setSelectedGPU(null)} />
          }

          {selectedMotherboard && selectedProcessor && selectedRAM && selectedSSD && selectedCharger && selectedGPU && !selectedCase
            ? renderStep("obudowę", cases, handleItemClick)
            : selectedCase && <SelectedTile label={labels.case} selected={selectedCase} onChange={() => setSelectedCase(null)} />
          }
        </div>
      </header>
    </div>
  );
}

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

export default ProductList;
