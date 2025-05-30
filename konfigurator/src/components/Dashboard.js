import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import Filters from "./Filters";
import styles from "../App.module.scss";
import { useAuth } from '../context/Context';
import LastViewed from './LastViewed';

function Dashboard() { 
  const [cart, setCart] = useState([]);
  const [scrollPosition] = useState(0);
  const { login, loggedInUser } = useAuth();
  const [listViewed, setListViewed] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (loggedInUser) {
      login(loggedInUser);
    }
  }, [scrollPosition, loggedInUser, login]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setListViewed((prev) => [...prev, product]);
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.columnsWrapper}>
        <Filters
         
        />
        <ProductList
         
          dodawanie={addToCart}
        />
      </div>
      <div>
        <LastViewed cart={listViewed} />
      </div>
    </div>
  );
}

export default Dashboard;
