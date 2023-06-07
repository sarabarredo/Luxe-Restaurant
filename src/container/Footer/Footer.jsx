import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='footer section-padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='footer-links'>
      <div className='footer-links-logo'>
        <img src={images.luxe} alt='logo' />
        <p className='p-lato'>"Sabores que deleitan, momentos que perduran"</p>
        <img src={images.spoon} className='spoon-img' style={{ marginTop: '15px' }} alt='cuchara' />
        <div className='footer-links-icons'>
          <FiInstagram /> 
          <FiFacebook />
          <FiTwitter />
        </div>
      </div>
      <div className='footer-links-contact'>
        <h1 className='footer-headtext'>Contacta con nosotros</h1>
        <p className='p-lato'>Paseo de los Robles 123, 28001, Madrid</p>
        <p className='p-lato'>987 65 43 21</p>
        <p className='p-lato'>luxerestaurant@luxe.es</p>
      </div>
    </div>
    <div className='footer-copyright'>
      <p className='p-lato'>&copy; 2023 LUXE. Todos los derechos reservados.</p>
      <hr style={{ marginTop: '1rem' }}></hr>
      <p className='p-lato'>Desarrollado por <a href='https://sarabarredo.github.io/portfolio/' target='blank' style={{ color: 'var(--color-golden)' }}>Sara Barredo</a></p>
    </div>
  </div>
);

export default Footer;

