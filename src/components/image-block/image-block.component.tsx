import './image-block.styles.scss'

import React from 'react';
import Hero4 from '../../assets/Hero-Image-4.png';

interface IProps {

};

const ImageBlock = (props: IProps) => {
  return (
    <div className='image-block'>
        <div className='slide'>
          <img className="hero-image" src={Hero4} alt="hero-image" />
          <div className='content'>
            <h2 className='title' >Our Favorite Tees</h2>
            <p className='subtext'>Everyday Tees you need.</p>
            <button> Shop Now</button>
          </div>
        </div>
    </div>
  );
};

export default ImageBlock;