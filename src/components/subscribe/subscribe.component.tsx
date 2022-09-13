import './subscribe.styles.scss';

import React, { FormEvent } from 'react';
import emailSVG from '../../assets/email.svg';

interface IProps {

};

const Subscribe = (props: IProps) => {
  return (
    <div className='subscribe'>
      <div className='title'>
        <img src={emailSVG} alt="Email Icon" />
        <span> Sign Up & Stay Connected</span>
      </div>
      <div className='content'>
        <p>
          Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
        </p>
        <form id="form1" action="">
          <input type="email" name="" id="" placeholder='Enter Your Email Address' />
          <button type="submit" form="form1" value="Submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;