import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './components/login.jsx';

function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (user, password) => {
    // Cambia estos valores por los que desees validar
    if (user === 'coach@gmail.com' && password === 'K0dig0') {
      setIsAuthenticated(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return isAuthenticated ? (
    <App />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

createRoot(document.getElementById('root')).render(
  <Root />
);
