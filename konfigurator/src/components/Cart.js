import React, { useState, useEffect } from "react";
import styles from "../common/styles/Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  loadCartList,
  setProductsLoadingState,
  clearCart,
} from "../redux/appSlice";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function Cart() {
  const cart = useSelector((state) => state.app.cart);
  const loadingStatus = useSelector((state) => state.app.loadingStatus);
  const [deletedItemId, setDeletedItemId] = useState(0);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const apiUrl = process.env.REACT_APP_API_URL || '${apiUrl}';

  useEffect(() => {
    const fetchCart = async () => {
      try {
        dispatch(setProductsLoadingState("loading"));
        const response = await axios.get(`${apiUrl}/products/shoppingList`);
        setTimeout(() => {
          dispatch(loadCartList(response.data));
          dispatch(setProductsLoadingState("success"));
        }, 1500); // opóźnienie dla widoczności loadera
      } catch (error) {
        console.error("Błąd przy pobieraniu koszyka:", error);
        dispatch(setProductsLoadingState("error"));
      }
    };

    fetchCart();
  }, [dispatch, apiUrl]);

  const handleItemClick = async (product) => {
    try {
      setDeletedItemId(product.id);
      dispatch(setProductsLoadingState("RemovingItem"));
      await axios.delete(`${apiUrl}/products/shoppingList/${product.id}`);
      const response = await axios.get(`${apiUrl}/products/shoppingList`);
      dispatch(loadCartList(response.data));
      dispatch(setProductsLoadingState("success"));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveAll = async () => {
    try {
      dispatch(setProductsLoadingState("RemovingItem"));
      await axios.delete(`${apiUrl}/products/shoppingList`);
      dispatch(clearCart());
      dispatch(setProductsLoadingState("success"));
    } catch (error) {
      console.error("Error while clearing cart:", error);
      dispatch(setProductsLoadingState("error"));
    }
  };

  const AddedItem = cart.map((product) => (
    <div className={styles.productInfo} key={product.id}>
      {product.name} - {product.price} zł
      <button
        className={styles.myButton}
        onClick={() => handleItemClick(product)}
      >
        Usuń
      </button>
    </div>
  ));

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.smallerFont}>
          <h2>Koszyk</h2>

          {cart.length === 0 && (
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
        </div>
      </header>
    </div>
  );
}

export default Cart;
