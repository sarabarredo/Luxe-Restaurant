import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='bg wrapper section-padding' id='contacto'>
    <div className='wrapper-info'>
      <SubHeading title='Contacto' />
      <h1 className='headtext-playfair' style={{ marginBottom: '3rem' }}>Encuéntranos</h1>
      <div className='wrapper-content'>
        <p className='p-lato'>Paseo de los Robles 123, 28001, Madrid</p>
        <p className='p-playfair' style={{ color: '#bc8e47', margin: '2rem 0' }}>Horario</p>
        <p className='p-lato'>Lunes a sábado: 13:30 pm - 01:00 am</p>
        <p className='p-lato'>Domingos y festivos: 12:00 pm - 00:00 am</p>
      </div>
      <button className='custom-button' style={{ marginTop: '2rem' }}>Reservar mesa</button>
    </div>
    <div className='wrapper-img'>
      <img src={images.findus } alt='findus' />
    </div>
  </div>
);

export default FindUs;

