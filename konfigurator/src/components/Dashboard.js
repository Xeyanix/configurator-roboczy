import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import Filters from "./Filters";
import styles from "../App.module.scss";
import { useAuth } from '../context/Context';

function Dashboard() { 
  const [cart, setCart] = useState([]);
  const [scrollPosition] = useState(0);
  const { login, loggedInUser } = useAuth();
  
  // ← Add this state for filters
  const [filters, setFilters] = useState({ socket: [], formFactor: [], memoryType: [] });

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
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.columnsWrapper}>
        <Filters onFilterChange={setFilters} />
  
        <ProductList
          filters={filters}
          dodawanie={addToCart}
        />
      </div>
      
    </div>
  );
}

export default Dashboard;
