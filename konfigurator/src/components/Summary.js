import React, { useState } from "react";
import styles from "../common/styles/Summary.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    loadCartList,
    clearConfigPart
} from "../redux/appSlice";
import axios from "axios";

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

    const parts = TYPE_KEYS.map((key) => summaryConfig[key]);
    const totalPrice = parts.reduce((acc, part) => acc + (part?.price || 0), 0);

    const handleRemove = async (item, idx) => {
        setRemovingId(item.name);
        dispatch(clearConfigPart({ type: TYPE_KEYS[idx] }));

        const cartProduct = cart.find(p => p.name === item.name);
        if (cartProduct) {
            dispatch(removeFromCart(cartProduct.id));
            try {
                const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000";
                await axios.delete(`${apiUrl}/products/shoppingList/${cartProduct.id}`);
                const response = await axios.get(`${apiUrl}/products/shoppingList`);
                dispatch(loadCartList(response.data));
            } catch (error) {
                console.error(error);
            }
        }

        setTimeout(() => setRemovingId(null), 500);
    };

    return (
        <div className={styles.box}>
            <div className={styles.summaryBox}>
                <h3 className={styles.summaryTitle}>Podsumowanie:</h3>

                <div>
                    {parts.map((item, idx) => {
                        if (!item) return null;
                        return (
                            <div className={styles.title} key={idx}>
                                <div className={styles.partInfo}>
                                    <span className={styles.name}>
                                        {TYPE_MAP[TYPE_KEYS[idx]]}: {item.name}
                                    </span>
                                </div>

                                {/* Cena jako plakietka */}
                                <span className={styles.priceBadge}>
                                    {item.price} zł
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
                    <span className={styles.totalLabel}>Suma:</span>
                    <span className={styles.totalValue}>{totalPrice} zł</span>
                </div>
            </div>
        </div>
    );
}

export default Summary;
