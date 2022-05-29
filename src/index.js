import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/Auth';
import { UserProvider } from './context/User/User';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
