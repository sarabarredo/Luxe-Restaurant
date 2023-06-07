import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='menuitem'>
    <div className='menuitem-head'>
      <div className='menuitem-name'>
        <p className='p-playfair' style={{ color: '#bc8e47' }}>{title}</p>
      </div>
      <div className='menuitem-dash' />
      <div className='menuitem-price'>
        <p className='p-playfair'>{price}</p>
      </div>
    </div>
    <div className='menuitem-sub'>
      <p className='p-lato' style={{ color: '#AAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
