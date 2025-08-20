// Filters.js
import React, { useState } from "react";
import styles from "../common/styles/Filters.module.scss";

function Filters({ onFilterChange }) {
  const [cpuFilters, setCpuFilters] = useState([]);
  const [formFactorFilters, setFormFactorFilters] = useState([]);
  const [memoryFilters, setMemoryFilters] = useState([]);

  const handleCheckbox = (setter, value) => {
    setter(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleApplyFilters = () => {
    onFilterChange({
      cpu: cpuFilters,
      formFactor: formFactorFilters,
      memory: memoryFilters,
    });
  };

  return (
    <div className={styles.filtersContainer}>
      <h3>Filtry produktów</h3>

      <div>
        <h4>Gniazdo procesora</h4>
        {["AM5", "LGA1700"].map(s => (
          <label key={s}>
            <input
              type="checkbox"
              checked={cpuFilters.includes(s)}
              onChange={() => handleCheckbox(setCpuFilters, s)}
            /> {s}
          </label>
        ))}
      </div>

      <div>
        <h4>Format płyty głównej</h4>
        {["ATX", "mATX", "ITX"].map(f => (
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
