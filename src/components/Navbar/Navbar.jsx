import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={images.luxe} alt='logo' />
      </div>
      <ul className='navbar-links'>
        <li className='p-lato'><a href='#inicio'>Inicio</a></li>
        <li className='p-lato'><a href='#conocenos'>Conócenos</a></li>
        <li className='p-lato'><a href='#menu'>Menú</a></li>
        <li className='p-lato'><a href='#contacto'>Contacto</a></li>
      </ul>
      <div className='navbar-login'>
        <a href='#login' className='p-lato'>Iniciar sesión / Registrarse</a>
        <div />
        <a href='/' className='p-lato'>Reservar mesa</a>
      </div>
      <div className='navbar-hamburger'>
        <GiHamburgerMenu color='#fff' fontSize={27}  onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className='navbar-hamburger-overlay flex-center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />
            <ul className='navbar-hamburger-links'>
              <li className='p-lato'><a href='#inicio'>Inicio</a></li>
              <li className='p-lato'><a href='#conocenos'>Conócenos</a></li>
              <li className='p-lato'><a href='#menu'>Menú</a></li>
              <li className='p-lato'><a href='#contacto'>Contacto</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;
