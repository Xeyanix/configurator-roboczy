import React, { useState, useEffect } from "react";
import styles from '../common/styles/ResponsiveAppBar.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {

  // const { loggedInUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className={styles.titleWrapper}>
      <button
        onClick={() => window.location.href = 'https://pctuned.pl/zloz-swoj-komputer/'}
        className={styles.powrot}>
        POWRÓT
      </button>
      <div className={styles.title}>KONFIGURATOR PCTuned</div>
    </div>


  );
}

export default ResponsiveAppBar;