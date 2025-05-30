import React, { useState, useEffect } from "react";
import styles from "../common/styles/Headers.module.scss";

const MARKI = ["Intel", "AMD", "Gigabyte", "ASRock", "MSI"];
const TYPY = ["DDR4", "DDR5", "SATA", "NVMe"];
const CENA_MIN = 100;
const CENA_MAX = 10000;

function Filtry({ filters, setFilters }) {
    // Stan lokalny do trzymania zmian przed "Zastosuj"
    const [localFilters, setLocalFilters] = useState({
        marki: [],
        typ: "",
        cena: [CENA_MIN, CENA_MAX],
    });

    // Synchronizacja z zewnętrznym stanem filtrów (np. po "Resetuj" w Dashboard)
    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    const handleMarkaChange = (marka) => {
        setLocalFilters((prev) => ({
            ...prev,
            marki: prev.marki.includes(marka)
                ? prev.marki.filter((m) => m !== marka)
                : [...prev.marki, marka],
        }));
    };

    const handleTypChange = (e) => {
        setLocalFilters((prev) => ({
            ...prev,
            typ: e.target.value,
        }));
    };

    const handleCenaChange = (e, idx) => {
        let val = Number(e.target.value);
        if (isNaN(val)) val = idx === 0 ? CENA_MIN : CENA_MAX;
        if (val < CENA_MIN) val = CENA_MIN;
        if (val > CENA_MAX) val = CENA_MAX;

        setLocalFilters((prev) => {
            const nowa = [...prev.cena];
            nowa[idx] = val;
            // Zakres nie może być odwrócony
            if (nowa[0] > nowa[1]) nowa[idx === 0 ? 1 : 0] = val;
            return { ...prev, cena: nowa };
        });
    };

    const applyFilters = () => {
        setFilters(localFilters);
    };

    const resetFilters = () => {
        const base = { marki: [], typ: "", cena: [CENA_MIN, CENA_MAX] };
        setLocalFilters(base);
        setFilters(base);
    };

    return (
        <div className={styles.filtryBox}>
            {/* Marki */}
            <div className={styles.filtrSection}>
                <div className={styles.filtrLabel}>Marka:</div>
                <div className={styles.filtrGroup}>
                    {MARKI.map((marka) => (
                        <label key={marka} className={styles.filtrCheck}>
                            <input
                                type="checkbox"
                                checked={localFilters.marki.includes(marka)}
                                onChange={() => handleMarkaChange(marka)}
                            />
                            {marka}
                        </label>
                    ))}
                </div>
            </div>
            {/* Typ podzespołu */}
            <div className={styles.filtrSection}>
                <div className={styles.filtrLabel}>Typ:</div>
                <select
                    value={localFilters.typ}
                    onChange={handleTypChange}
                    className={styles.filtrSelect}
                >
                    <option value="">Wszystkie</option>
                    {TYPY.map((typ) => (
                        <option value={typ} key={typ}>{typ}</option>
                    ))}
                </select>
            </div>
            {/* Cena */}
            <div className={styles.filtrSection}>
                <div className={styles.filtrLabel}>Cena:</div>
                <div style={{ display: "flex", gap: 8 }}>
                    <input
                        type="number"
                        min={CENA_MIN}
                        max={CENA_MAX}
                        value={localFilters.cena[0]}
                        onChange={(e) => handleCenaChange(e, 0)}
                        className={styles.filtrInput}
                        style={{ width: 80 }}
                    />
                    <span>–</span>
                    <input
                        type="number"
                        min={CENA_MIN}
                        max={CENA_MAX}
                        value={localFilters.cena[1]}
                        onChange={(e) => handleCenaChange(e, 1)}
                        className={styles.filtrInput}
                        style={{ width: 80 }}
                    />
                    <span>zł</span>
                </div>
            </div>
            {/* Przyciski */}
            <div className={styles.filtrButtons}>
                <button onClick={applyFilters} className={styles.applyBtn}>Zastosuj</button>
                <button onClick={resetFilters} className={styles.resetBtn}>Resetuj</button>
            </div>
        </div>
    );
}

export default Filtry;
