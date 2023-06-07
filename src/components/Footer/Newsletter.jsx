import React from 'react';
import { SubHeading } from '../../components';
import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter'>
    <div className='newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext-playfair'>Suscríbete a nuestro boletín</h1>
      <p className='p-lato'>Y sé el primero en enterarte de lo último</p>
    </div>
    <div className='newsletter-input flex-center'>
      <input type='email' placeholder='Escribe tu correo electrónico' />
      <button className='custom-button'>Suscribirse</button>
    </div>
  </div>
);

export default Newsletter;
