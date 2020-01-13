import React, { Component } from 'react';
import logo from '../img/logo-tech.png'


class NavComponent extends Component{
    render() {
        return (
		<div >
	        <nav>
        <img className="logo-nav" src={logo} alt="logo-tech101" />
        <div>
          <a href="http://tech101.io/" target="_blank" rel="noopener noreferrer">
            Nosotros
          </a>
          <a href="http://tech101.io/" target="_blank" rel="noopener noreferrer">
            Reclutamiento
          </a>
          <a href="http://tech101.io/" target="_blank" rel="noopener noreferrer">
            Contacto
          </a>
        </div>
      </nav>
		</div>
        )
    }
}
export default NavComponent;