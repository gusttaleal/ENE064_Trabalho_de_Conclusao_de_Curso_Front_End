import { HomePage } from './containers/HomePage';
import { LoginPage } from './containers/LoginPage';
import { DevicesPage } from './containers/DevicesPage';
import { ErrorPage } from './containers/ErrorPage';

import { Layout } from './components/Layout';
import { RequireAuth } from './components/RequireAuth';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<LoginPage />} />
        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/devices" element={<DevicesPage />} />
        </Route>
        {/* routes not founded */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
