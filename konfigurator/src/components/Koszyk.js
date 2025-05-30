import React, { useEffect, useState } from "react";
import styles from "../common/styles/Koszyk.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
    loadCartList,
    setProductsLoadingState,
    clearCart,
} from "../redux/appSlice";
import axios from "axios";
import { Link } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
import { useConfig } from "../context/ConfigContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Koszyk() {
    const cart = useSelector((state) => state.app.cart);
    const loadingStatus = useSelector((state) => state.app.loadingStatus);
    const [deletedItemId, setDeletedItemId] = useState(null);
    const dispatch = useDispatch();
    //   const { handleRebuild, clearSelectedPart } = useConfig();

    // const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000";

    useEffect(() => {
        const fetchCart = async () => {
            try {
                dispatch(setProductsLoadingState("loading"));
                const response = await axios.get(`${apiUrl}/products/shoppingList`);
                setTimeout(() => {
                    dispatch(loadCartList(response.data));
                    dispatch(setProductsLoadingState("success"));
                }, 1000); // opóźnienie dla widoczności loadera
            } catch (error) {
                console.error("Błąd przy pobieraniu koszyka:", error);
                dispatch(setProductsLoadingState("error"));
            }
        };

        fetchCart();
    }, [dispatch, apiUrl]);

    const handleRemoveItem = async (product) => {
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
        try {
            dispatch(setProductsLoadingState("RemovingItem"));
            await axios.delete(`${apiUrl}/products/shoppingList`);
            dispatch(clearCart());
            dispatch(setProductsLoadingState("success"));
            //  handleRebuild();
        } catch (error) {
            console.error(error);
            dispatch(setProductsLoadingState("error"));
        }
    };

    const totalPrice = cart.reduce((total, p) => total + p.price, 0);

    const AddedItem = cart.map((product) => (
        <div className={styles.productInfo} key={product.id}>
            {product.name} - {product.price} zł
            <button
                className={styles.myButton}
                onClick={() => handleRemoveItem(product)}
            >
                Usuń
            </button>
        </div>
    ));

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
                        <ol className={styles.cartList}>{AddedItem}</ol>
                        <div>
                            <p>Łącznie {totalPrice} zł</p>
                            <button className={styles.myButton} onClick={handleRemoveAll}>
                                Usuń wszystko
                            </button>
                        </div>
                    </div>
                )}



            </header>
        </div >
    );
}

export default Koszyk;
