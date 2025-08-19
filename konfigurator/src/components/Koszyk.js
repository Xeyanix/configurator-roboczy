import React, { useEffect, useState } from "react";
import styles from "../common/styles/Koszyk.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    loadCartList,
    setProductsLoadingState,
    clearCart,
    clearConfigPart
} from "../redux/appSlice";
import axios from "axios";
import { Link } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Mapowanie z polskiego na reduxowy klucz summaryConfig
const PRODUCT_TYPE_TO_KEY = {
    "Płyta główna": "motherboard",
    "Procesor": "processor",
    "RAM": "ram",
    "SSD": "ssd",
    "Charger": "charger",
    "Zasilacz": "charger",
    "GPU": "gpu",
    "Cases": "case",
    "Obudowa": "case",
};

function Koszyk() {
    const cart = useSelector((state) => state.app.cart);
    const loadingStatus = useSelector((state) => state.app.loadingStatus);
    const summaryConfig = useSelector((state) => state.app.summaryConfig);
    const [deletedItemId, setDeletedItemId] = useState(null);
    const dispatch = useDispatch();

    const apiUrl =
        process.env.REACT_APP_API_URL ||
        (window.location.hostname === "localhost"
            ? "http://localhost:10000"
            : "https://my-node-api-7rco.onrender.com");

    useEffect(() => {
        const fetchCart = async () => {
            try {
                dispatch(setProductsLoadingState("loading"));
                const response = await axios.get(`${apiUrl}/products/shoppingList`);
                dispatch(loadCartList(response.data));
                dispatch(setProductsLoadingState("success"));
            } catch (error) {
                console.error("Błąd przy pobieraniu koszyka:", error);
                dispatch(setProductsLoadingState("error"));
            }
        };

        fetchCart();
    }, [dispatch, apiUrl]);

    const handleRemoveItem = async (product) => {
        // Natychmiast czyść podsumowanie!
        Object.entries(summaryConfig).forEach(([key, value]) => {
            if (value && value.name === product.name) {
                dispatch(clearConfigPart({ type: key }));
            }
        });

        try {
            setDeletedItemId(product.id);
            dispatch(setProductsLoadingState("RemovingItem"));

            await axios.delete(`${apiUrl}/products/shoppingList/${product.id}`);
            const response = await axios.get(`${apiUrl}/products/shoppingList`);
            dispatch(loadCartList(response.data));
            dispatch(setProductsLoadingState("success"));
            setDeletedItemId(null);

        } catch (error) {
            console.error(error);
            dispatch(setProductsLoadingState("error"));
        }
    };


    const handleRemoveAll = async () => {

        Object.keys(PRODUCT_TYPE_TO_KEY).forEach(typeKey => {
            const key = PRODUCT_TYPE_TO_KEY[typeKey];
            dispatch(clearConfigPart({ type: key }));
        });
        try {
            dispatch(setProductsLoadingState("RemovingItem"));
            await axios.delete(`${apiUrl}/products/shoppingList`);
            dispatch(clearCart());
            dispatch(setProductsLoadingState("success"));

        } catch (error) {
            console.error(error);
            dispatch(setProductsLoadingState("error"));
        }
    };

    const totalPrice = cart.reduce((total, p) => total + p.price, 0);

    const AddedItem = () => {
        return cart.map((product) => (
            <div className={styles.productInfo} key={product.id}>
                <span>{product.name} - {product.price} zł</span>
                <button
                    className={styles.myButton}
                    onClick={() => handleRemoveItem(product)}
                >
                    Usuń
                </button>
            </div>
        ));
    };


    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                <div>
                    <Link to="/"
                        className={styles.BackIcon}
                        aria-label="Powrót"
                    >
                        <ArrowBackIcon style={{ color: 'yellow', fontSize: 38 }} />
                    </Link>
                </div>
                <h2>Koszyk</h2>
                {cart.length === 0 && loadingStatus !== "loading" && (
                    <>
                        <p className={styles.cartIsEmpty}>
                            {loadingStatus === "loading"
                                ? "Ładuję produkty..."
                                : "Twój koszyk jest pusty"}
                        </p>
                        {loadingStatus === "loading" && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "1rem",
                                }}
                            >
                                <CircularProgress />
                            </div>
                        )}
                    </>
                )}
                {cart.length > 0 && (
                    <div className={styles.cart}>
                        <div>
                            <div>
                                <AddedItem />
                            </div>
                        </div>
                        <div>
                            <p>Łącznie {totalPrice} zł</p>
                            <button className={styles.myButtonAll} onClick={handleRemoveAll}>
                                Usuń wszystko
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Koszyk;
