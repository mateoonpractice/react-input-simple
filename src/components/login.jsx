import React, { useState } from 'react';
import '../App.css';

function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
          required
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
