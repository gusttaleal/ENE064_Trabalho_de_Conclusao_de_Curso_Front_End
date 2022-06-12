import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/Auth';
import { DeviceProvider } from './context/Device';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DeviceProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </DeviceProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
