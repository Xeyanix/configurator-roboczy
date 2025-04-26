import React, { useState, useEffect } from "react";
import styles from '../common/styles/Columns.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
 
  // const { loggedInUser } = useAuth();
 
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className={styles.title}>
      KONFIGURATOR PCTuned   
    </div>
  );
}

export default ResponsiveAppBar;