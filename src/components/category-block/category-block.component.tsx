import './category-block.styles.scss';

import React from 'react';
import MensImage from '../../assets/Image-Mens.png';
import WomensImage from '../../assets/Image-Womens.png';
import AccessoriesImage from '../../assets/Image-Accessories.png';

interface IProps {

};

const CategoryBlock = (props: IProps) => {

  return (
    <div className='categories'>
      <div className='card card-1'>
        <a href='#' >
          <img className="card-image" src={WomensImage} alt="Womens" />
          <div className='content'>
            <span>Women's</span>
          </div>
        </a>
      </div>
      <div className='card card-2'>
        <a href='#'>
          <img className="card-image" src={MensImage} alt="Mens" />
          <div className='content'>
            <span>Men's</span>
          </div>
        </a>
      </div>
      <div className='card card-3' >
        <a href='#'>
          <img className="card-image" src={AccessoriesImage} alt="Accessories" />
          <div className='content'>
            <span>Accessories</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CategoryBlock;