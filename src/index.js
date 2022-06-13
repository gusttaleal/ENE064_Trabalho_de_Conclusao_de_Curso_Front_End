import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/Auth';
import { DeviceProvider } from './context/Device';

import './index.css';
import { DataProvider } from './context/Data';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DeviceProvider>
          <DataProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </DataProvider>
        </DeviceProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
