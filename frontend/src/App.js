import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Aircnc"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            id="email" 
            type="email"
            placeholder="Seu melhor e-mail"
          />
        </form>

        <button type="submit">Entrar</button>
      </div>
    </div>
  );
}

export default App;
