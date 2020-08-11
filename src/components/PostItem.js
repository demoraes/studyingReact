import React from 'react';

function PostItem() {
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

export default PostItem;