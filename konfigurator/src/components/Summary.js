import React, { useState } from "react";
import styles from "../common/styles/Summary.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    loadCartList,
    clearConfigPart
} from "../redux/appSlice";
import axios from "axios";

// Mapowanie kluczy na etykiety do wyświetlania
const TYPE_MAP = {
    motherboard: "Płyta główna",
    processor: "Procesor",
    ram: "RAM",
    ssd: "SSD",
    charger: "Zasilacz",
    gpu: "GPU",
    case: "Obudowa"
};
const TYPE_KEYS = Object.keys(TYPE_MAP);

function Summary() {
    const summaryConfig = useSelector((state) => state.app.summaryConfig);
    const cart = useSelector((state) => state.app.cart);
    const dispatch = useDispatch();
    const [removingId, setRemovingId] = useState(null);

    // Zbierz części z podsumowania w kolejności
    const parts = TYPE_KEYS.map((key) => summaryConfig[key]);

    const totalPrice = parts.reduce((acc, part) => acc + (part?.price || 0), 0);

    const handleRemove = async (item, idx) => {
        setRemovingId(item.name);

        // 1. Czyść z podsumowania (summaryConfig)
        dispatch(clearConfigPart({ type: TYPE_KEYS[idx] }));

        // 2. Czyść z koszyka, jeśli jest
        const cartProduct = cart.find(p => p.name === item.name);
        if (cartProduct) {
            dispatch(removeFromCart(cartProduct.id));
            try {
                const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000";
                await axios.delete(`${apiUrl}/products/shoppingList/${cartProduct.id}`);
                const response = await axios.get(`${apiUrl}/products/shoppingList`);
                dispatch(loadCartList(response.data));
            } catch (error) {
                // obsłuż błąd, jeśli chcesz
            }
        }

        setTimeout(() => setRemovingId(null), 500);
    };

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
                                    {TYPE_MAP[TYPE_KEYS[idx]]}: {item.name} - {item.price} zł
                                </span>
                                <button
                                    className={styles.removeButton}
                                    onClick={() => handleRemove(item, idx)}
                                    title={`Usuń ${item.name}`}
                                    disabled={removingId === item.name}
                                    style={{
                                        opacity: removingId === item.name ? 0.6 : 1,
                                        pointerEvents: removingId === item.name ? "none" : "auto"
                                    }}
                                >
                                    {removingId === item.name ? (
                                        <span style={{ fontSize: 16 }}>⏳</span>
                                    ) : (
                                        "×"
                                    )}
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
