// Filters.js
import React, { useState } from "react";
import styles from "../common/styles/Filters.module.scss";

function Filters({ onFilterChange }) {
  const [socketFilters, setCpuFilters] = useState([]);
  const [formFactorFilters, setFormFactorFilters] = useState([]);
  const [memoryFilters, setMemoryFilters] = useState([]);
  const [ChipsetFilters, setChipsetFilters] = useState([]);

  const handleCheckbox = (setter, value) => {
    setter(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleApplyFilters = () => {
    onFilterChange({
      cpu: socketFilters,
      chipset: ChipsetFilters,
      memory: memoryFilters,
      formFactor: formFactorFilters,

    });
  };

  return (
    <div className={styles.filtersContainer}>
      <h3>Filtry produktów</h3>

      <div>
        <h4>Gniazdo procesora</h4>
        {["AM5", "AM4", "LGA1700"].map(s => (
          <label key={s}>
            <input
              type="checkbox"
              checked={socketFilters.includes(s)}
              onChange={() => handleCheckbox(setCpuFilters, s)}
            /> {s}
          </label>
        ))}
      </div>

      <div>
        <h4>Chipset</h4>
        {["AMD B850", "AMD X870E", "AMD B650E", "AMD A520", "AMD B450", "AMD B650", "AMD B550", "Intel Z790", "Intel B760", "Intel H470"].map(c => (
          <label key={c}>
            <input
              type="checkbox"
              checked={ChipsetFilters.includes(c)}
              onChange={() => handleCheckbox(setChipsetFilters, c)}
            /> {c}
          </label>
        ))}
      </div>

      <div>
        <h4>Format płyty głównej</h4>
        {["ATX", "mATX"].map(f => (
          <label key={f}>
            <input
              type="checkbox"
              checked={formFactorFilters.includes(f)}
              onChange={() => handleCheckbox(setFormFactorFilters, f)}
            /> {f}
          </label>
        ))}
      </div>

      <div>
        <h4>Typ pamięci</h4>
        {["DDR4", "DDR5"].map(m => (
          <label key={m}>
            <input
              type="checkbox"
              checked={memoryFilters.includes(m)}
              onChange={() => handleCheckbox(setMemoryFilters, m)}
            /> {m}
          </label>
        ))}
      </div>

      <button onClick={handleApplyFilters}>Zastosuj filtry</button>
    </div>
  );
}

export default Filters;
