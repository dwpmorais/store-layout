import React from "react";
import "./style.scss";

import Menu from '../Menu'
import Logo from './Logo'
import Search from './Search'
import Widgets from './Widgets'
import IconsMobile from './IconsMobile'

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
            <div className="icon-menu-mobile">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0625 15.0625H4.9375C4.41972 15.0625 4 15.4822 4 16C4 16.5178 4.41972 16.9375 4.9375 16.9375H27.0625C27.5803 16.9375 28 16.5178 28 16C28 15.4822 27.5803 15.0625 27.0625 15.0625Z" fill="black"/>
                <path d="M27.0625 7.5625H4.9375C4.41972 7.5625 4 7.98222 4 8.5C4 9.01778 4.41972 9.4375 4.9375 9.4375H27.0625C27.5803 9.4375 28 9.01778 28 8.5C28 7.98222 27.5803 7.5625 27.0625 7.5625Z" fill="black"/>
                <path d="M27.0625 22.5625H4.9375C4.41972 22.5625 4 22.9822 4 23.5C4 24.0178 4.41972 24.4375 4.9375 24.4375H27.0625C27.5803 24.4375 28 24.0178 28 23.5C28 22.9822 27.5803 22.5625 27.0625 22.5625Z" fill="black"/>
              </svg>
            </div>

            <Logo />
            <Search />
            <Widgets />
            <IconsMobile />
          </div>
        </div>
      </div>

      <div className="header-row-2">
        <div className="container">
          <Menu/>
        </div>
      </div>
    </header>
  )
}

export default Header
