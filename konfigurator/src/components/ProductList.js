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
  const [selectedMotherboard, setSelectedMotherboard] = useState(null);
  const [selectedProcessor, setSelectedProcessor] = useState(null);
  const [selectedRAM, setSelectedRAM] = useState(null);
  const [selectedSSD, setSelectedSSD] = useState(null);
  const [selectedCharger, setSelectedCharger] = useState(null);
  const [selectedGPU, setSelectedGPU] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:9000";

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

  const handleRebuild = () => {
    setSelectedMotherboard(null);
    setSelectedProcessor(null);
    setSelectedRAM(null);
    setSelectedSSD(null);
    setSelectedCharger(null);
    setSelectedGPU(null);
    setSelectedCase(null);
  };

  const totalPrice = (selectedMotherboard?.price || 0) + (selectedProcessor?.price || 0) +
    (selectedRAM?.price || 0) + (selectedSSD?.price || 0) +
    (selectedCharger?.price || 0) + (selectedGPU?.price || 0) +
    (selectedCase?.price || 0);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.summaryBox}>
          <h2>Podsumowanie:</h2>
          <ul className={styles.productsListNames}>
            {selectedMotherboard && <li>Płyta główna: {selectedMotherboard.name} - {selectedMotherboard.price} zł</li>}
            {selectedProcessor && <li>Procesor: {selectedProcessor.name} - {selectedProcessor.price} zł</li>}
            {selectedRAM && <li>RAM: {selectedRAM.name} - {selectedRAM.price} zł</li>}
            {selectedSSD && <li>SSD: {selectedSSD.name} - {selectedSSD.price} zł</li>}
            {selectedCharger && <li>Zasilacz: {selectedCharger.name} - {selectedCharger.price} zł</li>}
            {selectedGPU && <li>GPU: {selectedGPU.name} - {selectedGPU.price} zł</li>}
            {selectedCase && <li>Obudowa: {selectedCase.name} - {selectedCase.price} zł</li>}
          </ul>
          <p><strong>Suma: {totalPrice} zł</strong></p>
          <button className={styles.myButton} onClick={handleRebuild}>Złóż komputer ponownie</button>
        </div>

        <div className={styles.smallerFont}>
          {!selectedMotherboard && renderStep("Płyta główna", motherboards, handleItemClick)}
          {selectedMotherboard && !selectedProcessor && renderStep("Procesor", processors, handleItemClick)}
          {selectedProcessor && !selectedRAM && renderStep("RAM", rams, handleItemClick)}
          {selectedRAM && !selectedSSD && renderStep("SSD", ssds, handleItemClick)}
          {selectedSSD && !selectedCharger && renderStep("Zasilacz", chargers, handleItemClick)}
          {selectedCharger && !selectedGPU && renderStep("GPU", gpus, handleItemClick)}
          {selectedGPU && !selectedCase && renderStep("Obudowa", cases, handleItemClick)}
        </div>
      </header>
    </div>
  );
}

function renderStep(label, items, onSelect) {
  return (
    <>
      <h3>Wybierz {label}:</h3>
      <div className={styles.productContainer}>
        <div className={styles.leftColumn}>
          {items.length > 0 ? (
            items.map(item => (
              <div key={item.id} className={styles.productsListNames}>
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
