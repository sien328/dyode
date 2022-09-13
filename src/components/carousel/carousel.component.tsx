import './carousel.styles.scss';

import React from 'react';
import Slider from "react-slick";
import Hero1 from '../../assets/Hero-Image-1.png';
import Hero2 from '../../assets/Hero-Image-2.png';
import Hero3 from '../../assets/Hero-Image-3.png';


interface IProps {

};

const Carousel = (props: IProps) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='hero'>
      <Slider {...settings}>
        <div className='slide slide-1'>
          <img className="hero-image" src={Hero1} alt="hero-image" />
          <div className='content'>
            <h2 className='title' >Shop New Arrivals</h2>
            <p className='subtext'>Our coolest new items for waiting you!</p>
            <button> Shop Now</button>
          </div>
        </div>
        <div className='slide slide-2'>
          <img className="hero-image" src={Hero2} alt="hero-image" />
          <div className='content'>
            <h2 className='title' >Our Fave Tees</h2>
            <p className='subtext'>Shop all of our favorites.</p>
            <button> Shop Now</button>
          </div>
        </div>
        <div className='slide slide-3'>
          <img className="hero-image" src={Hero3} alt="hero-image" />
          <div className='content'>
            <h2 className='title' >Men's Tees</h2>
            <p className='subtext'>Find the perfect shirt</p>
            <button> Shop Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;