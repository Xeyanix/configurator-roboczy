import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Koszyk from './components/Koszyk';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './context/Context';


ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/koszyk" element={<Koszyk />} />

          </Routes>
        </HashRouter>
      </React.StrictMode>
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
