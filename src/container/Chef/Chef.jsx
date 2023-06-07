import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='bg wrapper section-padding'>
    <div className='wrapper-img wrapper-img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='wrapper-info'>
      <SubHeading title='La palabra del Chef' />
      <h1 className='headtext-playfair'>Nuestra metodología</h1>
      <div className='chef-content'>
        <div className='chef-content-quote'>
          <img src={images.quote} alt='comillas' />
          <p className='p-lato'>LUXE sigue una meticulosa metodología para garantizar una experiencia culinaria excepcional.
          </p>
        </div>
        <p className='p-lato'>Desde la selección de ingredientes hasta el servicio impecable, cada aspecto está cuidadosamente planificado para brindar a los comensales una experiencia inolvidable. </p>
      </div>
      <div className='chef-sign'>
        <p>Alexander Berg</p>
        <p className='p-lato'>Chef y Fundador</p>
        <img src={images.sign} alt='firma' />
      </div>
    </div>
  </div>
);

export default Chef;


