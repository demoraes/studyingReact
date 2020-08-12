import React from 'react';

import logo from '../assets/KDIDiSE.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="facebook" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  )
}

export default Header;