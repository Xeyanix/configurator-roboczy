import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Koszyk from './components/Koszyk';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './context/Context';
import { ConfigProvider } from './context/ConfigContext'; 

// To jest najważniejsza linijka!
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <AuthProvider>
      <ConfigProvider>
        <React.StrictMode>
          <HashRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/koszyk" element={<Koszyk />} />
            </Routes>
          </HashRouter>
        </React.StrictMode>
      </ConfigProvider>
    </AuthProvider>
  </Provider>
);

reportWebVitals();
