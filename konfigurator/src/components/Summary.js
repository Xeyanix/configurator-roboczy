import React, { useState } from "react";
import styles from "../common/styles/Summary.module.scss";
import { useConfig } from "../context/ConfigContext";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, loadCartList } from "../redux/appSlice";
import axios from "axios";

// <-- DODANO
const TYPE_MAP = {
    "Płyta główna": "Płyta główna",
    "Procesor": "Procesor",
    "RAM": "RAM",
    "SSD": "SSD",
    "Zasilacz": "Charger",
    "Charger": "Charger",
    "GPU": "GPU",
    "Obudowa": "Cases",
    "Cases": "Cases"
};
function mapType(type) {
    return TYPE_MAP[type] || type;
}
// <--

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

    const cart = useSelector((state) => state.app.cart);
    const dispatch = useDispatch();
    const [removingId, setRemovingId] = useState(null);

    const typeArray = [
        "Płyta główna", "Procesor", "RAM", "SSD", "Charger", "GPU", "Cases"
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

    const handleRemove = async (item, idx) => {
        setRemovingId(item.name);
        // <-- ZMIANA
        const itemWithType = { ...item, type: mapType(typeArray[idx]) };
        clearSelectedPart(itemWithType);
        // <--

        const cartProduct = cart.find(p => p.name === item.name);
        if (cartProduct) {
            dispatch(removeFromCart(cartProduct.id));
            try {
                const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000";
                await axios.delete(`${apiUrl}/products/shoppingList/${cartProduct.id}`);
                const response = await axios.get(`${apiUrl}/products/shoppingList`);
                dispatch(loadCartList(response.data));
            } catch (error) {}
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
                                    {typeArray[idx]}: {item.name} - {item.price} zł
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
