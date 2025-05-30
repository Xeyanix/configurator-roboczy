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

function ProductList() {
  const loadingStatus = useSelector((state) => state.app.loadingStatus);
  const lastViewedProducts = useSelector((state) => state.app.lastViewed);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setProductsLoadingState("Loading"));
        const response = await axios.get(`${apiUrl}/products`);
        const allProducts = response.data;

        setMotherboards(allProducts.filter(p => p.type === "Płyta główna"));
        setProcessors(allProducts.filter(p => p.type === "Procesor"));
        setRAMs(allProducts.filter(p => p.type === "RAM"));
        setSSDs(allProducts.filter(p => p.type === "SSD"));
        setChargers(allProducts.filter(p => p.type === "Charger"));
        setGpus(allProducts.filter(p => p.type === "GPU"));
        setCases(allProducts.filter(p => p.type === "Cases"));

        dispatch(setProductsLoadingState("success"));
      } catch (error) {
        console.error(error);
        dispatch(setProductsLoadingState("error"));
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleItemClick = async (product) => {
    const newProduct = { ...product, id: uuidv4() };

    // ZAWSZE dodajemy type!
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

    // Jeśli używasz contextu:
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
        <h1>{label}</h1>
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
        {/* Przycisk pojawia się tylko, gdy wszystkie komponenty są wybrane */}
        {allSelected && (
          <button className={styles.myButton} onClick={handleRebuild}>
            Złóż komputer ponownie
          </button>
        )}

        <div className={styles.smallerFont}>
          {/* Płyta główna */}
          {!selectedMotherboard
            ? renderStep("płytę główną", motherboards, handleItemClick)
            : <SelectedTile label={labels.motherboard} selected={selectedMotherboard} onChange={() => setSelectedMotherboard(null)} />
          }

          {/* Procesor */}
          {selectedMotherboard && !selectedProcessor
            ? renderStep("procesor", processors, handleItemClick)
            : selectedProcessor && <SelectedTile label={labels.processor} selected={selectedProcessor} onChange={() => setSelectedProcessor(null)} />
          }

          {/* RAM */}
          {selectedMotherboard && selectedProcessor && !selectedRAM
            ? renderStep("pamięć RAM", rams, handleItemClick)
            : selectedRAM && <SelectedTile label={labels.ram} selected={selectedRAM} onChange={() => setSelectedRAM(null)} />
          }

          {/* SSD */}
          {selectedMotherboard && selectedProcessor && selectedRAM && !selectedSSD
            ? renderStep("dysk SSD", ssds, handleItemClick)
            : selectedSSD && <SelectedTile label={labels.ssd} selected={selectedSSD} onChange={() => setSelectedSSD(null)} />
          }

          {/* Zasilacz */}
          {selectedMotherboard && selectedProcessor && selectedRAM && selectedSSD && !selectedCharger
            ? renderStep("zasilacz", chargers, handleItemClick)
            : selectedCharger && <SelectedTile label={labels.charger} selected={selectedCharger} onChange={() => setSelectedCharger(null)} />
          }

          {/* GPU */}
          {selectedMotherboard && selectedProcessor && selectedRAM && selectedSSD && selectedCharger && !selectedGPU
            ? renderStep("GPU", gpus, handleItemClick)
            : selectedGPU && <SelectedTile label={labels.gpu} selected={selectedGPU} onChange={() => setSelectedGPU(null)} />
          }

          {/* Obudowa */}
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
