import './navigation.styles.scss'
import logo from '../../assets/logo.png';
import userSVG from '../../assets/user.svg';
import cartSVG from '../../assets/shopping-cart.svg';
import loupeSVG from '../../assets/loupe.svg';
import stackSVG from '../../assets/stack.svg';

import React from 'react';

interface IProps {
  shipping?: string;
  tabs: Array<string>;
};

const Navigation = (props: IProps) => {
  const { shipping, tabs } = props;

  return (
    <div className="navigation">
      <div className='shipping-message'>
        {shipping}
      </div>
      <nav className='navbar'>
        <img className="logo" src={logo} />

        <div className='dropdown-stack'>
          <img src={stackSVG} alt="dropdown" />
        </div>

        <div className='tabs'>
          {
            tabs.map((tab, index) => {
              return <a href='#' className='tab' key={index}>{tab}</a>
            })
          }
        </div>
        <div className="utils">
          <a href="#">
            <img src={loupeSVG} alt="Search" />
          </a>
          <a href="#">
            <img src={userSVG} alt="Profile" />
          </a>
          <a href="#">
            <img src={cartSVG} alt="Shopping Cart" />
          </a>
        </div>
      </nav>
    </div>
  )
};

export default Navigation;