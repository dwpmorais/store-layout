import React from "react";
import "./style.scss";

import { Menu } from '../Menu'
import Logo from '../../assets/logo-maeztra-novo.png'
// import { Account } from './Account/Account'

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <p className="top-bar-text">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </p>
      </div>

      <div className="header-row-1">
        <div className="container">
          <div className="header-row-1__wrapper">
            <a href="/" title="Home" className="header-logo">
              <img src={Logo} alt="Logo Maeztra"/>
            </a>
            <form className="search-bar__form">
              <label htmlFor="searchBar">
                <input
                  type="text"
                  placeholder="O Que Você Busca?"
                  className="search-bar__input"
                />
              </label>

              <button className="search-bar__btn" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="header-row-2">
        <div className="container">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export { Header };
