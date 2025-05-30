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
    clearSelectedPart,
  } = useConfig();

  const labels = [
    "Płyta główna", "Procesor", "RAM", "SSD", "Zasilacz", "GPU", "Obudowa"
  ];
  const parts = [
    selectedMotherboard,
    selectedProcessor,
    selectedRAM,
    selectedSSD,
    selectedCharger,
    selectedGPU,
    selectedCase,
  ];

  const totalPrice = parts.reduce((acc, part) => acc + (part?.price || 0), 0);

  return (
    <div className={styles.box}>

      <div className={styles.summaryBox}>
        <h2 className={styles.summaryTitle}>Podsumowanie:</h2>
        <div>
          {parts.map((item, idx) => {
            if (!item) return null;
            return (
              <div className={styles.tile} key={idx}>
                <span className={styles.partInfo}>
                  {labels[idx]}: {item.name} - {item.price} zł
                </span>
                <button
                  className={styles.removeButton}
                  onClick={() => clearSelectedPart(item)}
                  title={`Usuń ${item.name}`}
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.totalBox}>
          <span><strong>Suma:</strong></span>
          <span className={styles.totalPrice}> {totalPrice} zł</span>

        </div>
      </div>

    </div>
  );
}

export default Summary;
