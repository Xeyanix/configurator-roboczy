import React, { useState } from 'react';
import styles from './App.module.scss';
// import Filters from './components/Filters/Filters';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { AuthProvider, useAuth } from './context/Context';
import Header from "./components/Header";
import Dashboard from './components/Dashboard';

function App() {
  // const [selectedMotherboard] = useState(Motherboards);
  // const [setMotherboardsToDisplay] = useState(selectedMotherboard);
  const { loggedInUser } = useAuth();

  return (
    <AuthProvider>
      <div className={styles.box}>
        <div className={styles.appWrapper}>
          <ResponsiveAppBar
            loggedInUser={loggedInUser}
          />
          <Header />
          {/* <Filters
            Motherboards={Motherboards}
            sendfilteredProductsToAppComponent={setMotherboardsToDisplay}
          /> */}
          <div className={styles.columnsWrapper}>
            <Dashboard />
          </div>
        </div >
        <footer id="contactSection">

        </footer>
      </div >
    </AuthProvider>
  );
}

export default App;
