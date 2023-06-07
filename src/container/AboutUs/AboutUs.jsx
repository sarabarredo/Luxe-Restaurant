import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='about-us bg flex-center section-padding' id='conocenos'>
    <div className='about-us-overlay flex-center'>
      <img src={images.L} alt='letra l' />
    </div>
    <div className='about-us-content flex-center'>
      <div className='about-us-content-about'>
        <h1 className='headtext-playfair'>Conócenos</h1>
        <img src={images.spoon} alt='cuchara' className='spoon-img' />
        <p className='p-lato'>
          Nuestro equipo de chefs galardonados, expertos en la creación de platos innovadores y de alta calidad, se esfuerza por deleitar tus sentidos en cada bocado. Utilizamos ingredientes frescos y de temporada para garantizar que cada plato sea una obra maestra gastronómica.
          Te invitamos a que nos conozcas y disfrutes de una velada inolvidable.
        </p>
        <button type='button' className='custom-button'>Saber más</button>
      </div>
      <div className='about-us-content-fork flex-center'>
        <img src={images.fork} alt='tenedor' className='fork'/>
      </div>
      <div className='about-us-content-history'>
        <h1 className='headtext-playfair'>Nuestra historia</h1>
        <img src={images.spoon} alt='cuchara' className='spoon-img' />
        <p className='p-lato'>
          Hace más de una década, en el corazón de una encantadora ciudad, un joven apasionado por la gastronomía soñaba con crear un lugar donde los paladares más exigentes pudieran deleitarse con una experiencia culinaria única. Con una determinación inquebrantable, decidió dar vida a su sueño: un lugar que redefiniría los estándares de la alta cocina.
        </p>
        <button type='button' className='custom-button'>Saber más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
