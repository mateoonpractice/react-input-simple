import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container } from 'react-bootstrap';
import '../App.css';

function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user, password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form className="form-signin p-4 rounded shadow-sm bg-white" style={{maxWidth: '380px', width: '100%'}} onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Ingresar</h1>
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail">Email de Usuario</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="usuario@ejemplo.com"
            value={user}
            onChange={e => setUser(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputPassword">Contraseña</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-block signin-btn mt-3" type="submit">Ingresar</button>

        <p className="mt-3 mb-0 text-muted text-center small">© 2025 Kodigo Music</p>
      </form>
    </div>
  );
}

export default Login;
