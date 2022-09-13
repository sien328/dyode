import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import './helper.scss';

import Navigation from './components/navigation/navigation.component';
import Carousel from './components/carousel/carousel.component';
import CategoryBlock from './components/category-block/category-block.component';
import ProductCarousel from './components/products-carousel/products-carousel.component';
import ImageBlock from './components/image-block/image-block.component';
import Subcribe from './components/subscribe/subscribe.component';
import Footer from './components/footer/footer.component';

const App = () => {

  const shippingMessage = "Free shipping on all orders over $75"
  const navigationTabs = ["Men's", "Women's", "Accessories", "Sale!"];

  return (
   <div>
    <Navigation shipping={shippingMessage} tabs={navigationTabs}/>
    <Carousel/>
    <CategoryBlock />
    <ProductCarousel />
    <ImageBlock />
    <Subcribe />
    <Footer/>
   </div>
  )
};

export default App;
