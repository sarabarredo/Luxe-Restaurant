import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='header wrapper section-padding' id='inicio'>
    <div className='wrapper-info'>
      <SubHeading title='Descubre nuestro santuario del sabor' />
      <h1 className='header-h1'>Sumérgete en el deleite culinario</h1>
      <p className='p-lato' style={{ margin: '2rem 0' }}>
        En LUXE, cada detalle ha sido cuidadosamente diseñado para brindar una experiencia inigualable. Únete a nosotros y déjanos llevarte a un mundo donde el buen gusto se encuentra con la excelencia culinaria. 
      </p>
      <button type='button' className='custom-button'>Ver menú</button>
    </div>
    <div className='wrapper-img'>
      <img src={images.welcome} alt='imagen principal'/>
    </div>
  </div>
);

export default Header;
