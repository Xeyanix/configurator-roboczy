import React, { useEffect, useState, useRef } from "react";
import styles from '../common/styles/ResponsiveAppBar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from "react-redux";
import {
  loadCartList,
  setProductsLoadingState,
  clearCart
} from "../redux/appSlice";
import axios from "axios";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.app.cart);
  const dispatch = useDispatch();

  const [showMiniCart, setShowMiniCart] = useState(false);
  const cartRef = useRef(null);

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:10000";

  // Obsługa zamykania MiniCart po kliknięciu poza niego
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowMiniCart(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Załaduj koszyk przy odświeżeniu/pierwszym wejściu na stronę
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
    // eslint-disable-next-line
  }, []);

  // Funkcja do usuwania pojedynczego produktu
  const handleRemoveItem = async (itemId) => {
    try {
      dispatch(setProductsLoadingState("RemovingItem"));
      await axios.delete(`${apiUrl}/products/shoppingList/${itemId}`);
      const response = await axios.get(`${apiUrl}/products/shoppingList`);
      dispatch(loadCartList(response.data));
      dispatch(setProductsLoadingState("success"));
    } catch (error) {
      console.error(error);
      dispatch(setProductsLoadingState("error"));
    }
  };

  // Funkcja do czyszczenia całego koszyka
  const handleRemoveAll = async () => {
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

  return (
    <div className={styles.header}>
      <Link
        className={styles.BackIcon}
        onClick={() => window.location.href = 'https://pctuned.pl/zloz-swoj-komputer/'}
        aria-label="Powrót"
      >
        <ArrowBackIcon style={{ color: 'yellow', fontSize: 38 }} />
      </Link>
      <div className={styles.title}>KONFIGURATOR PCTuned</div>
      <div
        className={styles.cartIcon}
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={() => setShowMiniCart(true)}
        onMouseLeave={() => setShowMiniCart(false)}
        ref={cartRef}
      >
        <Link to="/koszyk" className={styles.cartIcon}>
          <ShoppingCartIcon fontSize="large" />
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 7px",
                fontSize: 14,
                fontWeight: "bold",
                transform: "translate(50%,-50%)"
              }}
            >
              {cart.length}
            </span>
          )}
        </Link>

        {/* MiniCart */}
        {showMiniCart && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              right: 0,
              width: "350px",
              background: "#232323",
              color: "#fff",
              border: "1px solid #aaa",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              zIndex: 100,
              padding: "15px",
              minHeight: "50px"
            }}
          >
            <div style={{ marginBottom: "7px", fontWeight: "bold" }}>
              Twój koszyk:
            </div>
            {cart.length === 0 ? (
              <div>Koszyk jest pusty</div>
            ) : (
              <>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {cart.map((item, idx) => (
                    <React.Fragment key={item.id}>
                      <li
                        style={{
                          marginBottom: 4,
                          fontSize: 15,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingBottom: 4,
                        }}
                      >
                        <span>{item.name}</span>
                        <span style={{ fontWeight: 600, marginLeft: 8 }}>{item.price} zł</span>
                      </li>
                      {idx < cart.length - 1 && (
                        <div
                          style={{
                            borderBottom: "1px solid #444",
                            margin: "2px 0 4px 0",
                            width: "100%"
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </ul>
                {/* Suma na dole */}
                <div
                  style={{
                    borderTop: "1px solid #555",
                    paddingTop: 8,
                    marginTop: 10,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 16
                  }}
                >
                  <span>Suma:</span>
                  <span>
                    {cart.reduce((acc, p) => acc + (p.price || 0), 0)} zł
                  </span>
                </div>
              </>
            )}
            {cart.length > 0 && (
              <div style={{ marginTop: "13px", textAlign: "center" }}>
                <Link
                  to="/koszyk"
                  style={{
                    display: "inline-block",
                    background: "#ffd700",
                    color: "#232323",
                    padding: "7px 18px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                  onClick={() => setShowMiniCart(false)}
                >
                  Przejdź do koszyka
                </Link>
              </div>
            )}
          </div>
        )}



      </div>
    </div>
  );
}

export default ResponsiveAppBar;
