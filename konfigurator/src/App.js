import React, { useState } from 'react';
import styles from './App.module.scss';
import { ConfigProvider } from "./context/ConfigContext";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { AuthProvider, useAuth } from './context/Context';
import Summary from "./components/Summary";
import Dashboard from './components/Dashboard';
import Filters from './components/Filters';
import Filtry from './components/Filtry';

function App() {

  const { loggedInUser } = useAuth();
  const [filters, setFilters] = useState({
    marki: [],
    typ: "",
    cena: [100, 500]
  });

  return (
    <AuthProvider>
      <ConfigProvider>
        <div className={styles.appWrapper}>
          <ResponsiveAppBar
            loggedInUser={loggedInUser}
          />
          <Summary />
          <Filtry filters={filters} setFilters={setFilters} />
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
