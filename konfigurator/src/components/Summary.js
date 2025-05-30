import React from "react";
import styles from "../common/styles/Summary.module.scss";
import { useConfig } from "../context/ConfigContext";

function Summary() {
  const {
    selectedMotherboard,
    selectedProcessor,
    selectedRAM,
    selectedSSD,
    selectedCharger,
    selectedGPU,
    selectedCase,
    handleRebuild,
    clearSelectedPart // <--- to ważne!
  } = useConfig();

  const totalPrice =
    (selectedMotherboard?.price || 0) +
    (selectedProcessor?.price || 0) +
    (selectedRAM?.price || 0) +
    (selectedSSD?.price || 0) +
    (selectedCharger?.price || 0) +
    (selectedGPU?.price || 0) +
    (selectedCase?.price || 0);

  return (
    <div className={styles.summaryBox}>
      <h2>Podsumowanie:</h2>
      <ul className={styles.productsListNames}>
        {selectedMotherboard && (
          <li>
            Płyta główna: {selectedMotherboard.name} - {selectedMotherboard.price} zł
            <button
              className={styles.removeButton}
              onClick={() => clearSelectedPart(selectedMotherboard)}
            >
              Usuń
            </button>
          </li>
        )}
        {selectedProcessor && (
          <li>
            Procesor: {selectedProcessor.name} - {selectedProcessor.price} zł
            <button
              className={styles.removeButton}
              onClick={() => clearSelectedPart(selectedProcessor)}
            >
              Usuń
            </button>
          </li>
        )}
        {selectedRAM && (
          <li>
            RAM: {selectedRAM.name} - {selectedRAM.price} zł
            <button
              className={styles.removeButton}
              onClick={() => clearSelectedPart(selectedRAM)}
            >
              Usuń
            </button>
          </li>
        )}
        {selectedSSD && (
          <li>
            SSD: {selectedSSD.name} - {selectedSSD.price} zł
            <button
              className={styles.removeButton}
              onClick={() => clearSelectedPart(selectedSSD)}
            >
              Usuń
            </button>
          </li>
        )}
        {selectedCharger && (
          <li>
            Zasilacz: {selectedCharger.name} - {selectedCharger.price} zł
            <button
              className={styles.removeButton}
              onClick={() => clearSelectedPart(selectedCharger)}
            >
              Usuń
            </button>
          </li>
        )}
        {selectedGPU && (
          <li>
            GPU: {selectedGPU.name} - {selectedGPU.price} zł
            <button
              className={styles.removeButton}
              onClick={() => clearSelectedPart(selectedGPU)}
            >
              Usuń
            </button>
          </li>
        )}
        {selectedCase && (
          <li>
            Obudowa: {selectedCase.name} - {selectedCase.price} zł
            <button
              className={styles.removeButton}
              onClick={() => clearSelectedPart(selectedCase)}
            >
              Usuń
            </button>
          </li>
        )}
      </ul>
      <p>
        <strong>Suma: {totalPrice} zł</strong>
      </p>
    </div>
  );
}

export default Summary;
