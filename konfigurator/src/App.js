import React, { useState } from 'react';
import styles from './App.module.scss';
import { ConfigProvider } from "./context/ConfigContext";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { AuthProvider, useAuth } from './context/Context';
import Summary from "./components/Summary";
import Dashboard from './components/Dashboard';
import Filtry from './components/Filtry';
import ReactDOM from "react-dom/client"; 

function App() {
  const { loggedInUser } = useAuth();

  return (
    <AuthProvider>
      <ConfigProvider>
        <div className={styles.appWrapper}>
          <ResponsiveAppBar
            loggedInUser={loggedInUser}
          />
          <Summary />
          <Filtry />
          <div className={styles.columnsWrapper}>
            <Dashboard />
          </div>
        </div >
        <footer id="contactSection">

        </footer>
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
