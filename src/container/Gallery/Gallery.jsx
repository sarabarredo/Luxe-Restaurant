import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07];
const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }

  }

  return (
    <div className='gallery flex-center'>
      <div className='gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext-playfair'>Galería de imágenes</h1>
        <p className='p-lato' style={{ color: '#AAA', marginTop: '2rem' }}>
        Cada imagen captura la pasión y la dedicación que nuestros chefs ponen en cada creación culinaria, fusionando sabores innovadores con presentaciones impresionantes.
        </p>
        <button type='button' className='custom-button'>Ver más</button>
      </div>
      <div className='gallery-images'>
        <div className='gallery-images-container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='gallery-images-card flex-center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='galeria' />
              <BsInstagram className='gallery-image-icon' />
            </div>
          ))}
        </div>
        <div className='gallery-images-arrows'>
          <BsArrowLeftShort className='gallery-arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery-arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
