import React from 'react'

const Menus = () => {
  return (
    <div className="menus-footer">
      <div className="container">
        <div className="menus-footer__wrapper">
          <nav className="menu-footer-item">
            <h5 className="menu-footer-title">Informações</h5>
            <ul className="menu-footer-list">
              <li className="menu-footer-list__item"><a href="/">Quem Somos</a></li>
              <li className="menu-footer-list__item"><a href="/">Prazo de Envio</a></li>
              <li className="menu-footer-list__item"><a href="/">Trocas e Devoluções</a></li>
              <li className="menu-footer-list__item"><a href="/">Promoções e Cupons</a></li>
            </ul>
          </nav>

          <nav className="menu-footer-item">
            <h5 className="menu-footer-title">Minha Conta</h5>
            <ul className="menu-footer-list">
              <li className="menu-footer-list__item"><a href="/">Minha Conta</a></li>
              <li className="menu-footer-list__item"><a href="/">Meus Pedidos</a></li>
              <li className="menu-footer-list__item"><a href="/">Cadastre-se</a></li>
            </ul>
          </nav>

          <nav className="menu-footer-item">
            <h5 className="menu-footer-title">Onde nos Encontrar</h5>
            <ul className="menu-footer-list">
              <li className="menu-footer-list__item"><a href="/">Lojas</a></li>
              <li className="menu-footer-list__item"><a href="/">Endereço</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Menus
