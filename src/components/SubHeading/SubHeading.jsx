import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className='p-playfair'>{title}</p>
    <img src={images.spoon} alt='cuchara' className='spoon-img' />
  </div>
);

export default SubHeading;
