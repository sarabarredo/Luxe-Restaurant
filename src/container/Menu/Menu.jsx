import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './Menu.css';

const Menu = () => (
  <div className='menu flex-center section-padding' id='menu'>
    <div className='menu-title'>
      <SubHeading title='Sabores selectos: Un festín hecho menú' />
      <h1 className='headtext-playfair'>Los especiales de hoy</h1>
    </div>
    <div className='menu-menu'>
      <div className='menu-menu-wine flex-center'>
        <p className='menu-menu-heading'>Vinos y Cervezas</p>
        <div className='menu-menu-items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className='menu-menu-img'>
        <img src={images.menu} alt='imagen menu' />
      </div>
      <div className='menu-menu-cocktails flex-center'>
        <p className='menu-menu-heading'>Cocktails</p>
        <div className='menu-menu-items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom-button'>Ver más</button>
    </div>
  </div>
);

export default Menu;
