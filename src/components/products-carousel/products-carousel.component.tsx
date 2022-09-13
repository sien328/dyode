import './products-carousel.styles.scss';

import React from 'react';
import Slider from "react-slick";
import ProductImage from '../../assets/Image-Product.png';

interface IProps {

};

const ProductCarousel = (props: IProps) => {
  const products = [
    {
      title: 'Product Title',
      subtext: "WOMEN'S T-SHIRT",
      price: 19.99
    },
    {
      title: 'Product Title',
      subtext: "WOMEN'S T-SHIRT",
      price: 19.99
    },
    {
      title: 'Product Title',
      subtext: "WOMEN'S T-SHIRT",
      price: 19.99
    },
    {
      title: 'Product Title',
      subtext: "WOMEN'S T-SHIRT",
      price: 19.99
    },
    {
      title: 'Product Title',
      subtext: "WOMEN'S T-SHIRT",
      price: 19.99
    }
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  };
  return (
    <div className='product-carousel'>
      <h2>New Shop Arrivals</h2>
      <Slider {...settings}>
        {
          products.map((product, index) => {
            const { title, subtext, price } = product;
            return (
              <div className='slide' key={index}>
                <a href="">
                  <img className="center" src={ProductImage} alt="product-image" />
                  <div className='content'>
                    <h3 className='title' >{title}</h3>
                    <p className='subtext'>{subtext}</p>
                    <span className='price'>${price}</span>
                  </div>
                </a>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default ProductCarousel;