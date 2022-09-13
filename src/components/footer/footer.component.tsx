import './footer.styles.scss';

import React from 'react';
import { useState } from 'react';
import facebookSVG from '../../assets/facebook-logo.svg';
import instagramSVG from '../../assets/instagram-logo.svg';

interface IProps {

};

const Footer = (props: IProps) => {
  const footerMenuInital = {
    'customerServiceOpen': true,
    'companyOpen': false
  }
  const [footerDropdownStatus, setFooterDropdownStatus] = useState(footerMenuInital);

  const hanldeClick = (e:any) => {
    console.log("clicked", e.target.id)
    const dropdownID = e.target.id;
    if(dropdownID ===  "cs_dropdown" ) {
      setFooterDropdownStatus((state) =>({
        ...state, 
        customerServiceOpen: !state.customerServiceOpen
      }));
    } else if( dropdownID === "company_dropdown" ) {
      setFooterDropdownStatus((state) =>({
        ...state, 
        companyOpen: !state.companyOpen
      }));
    }
  } 

  return (
    <div className='footer'>
      <div className="">
        <p id='cs_dropdown' className={`title ${footerDropdownStatus.customerServiceOpen? "drop-icon-plus": "drop-icon-minus" }` } onClick={hanldeClick}>Customer Service</p>
        <div className={`column ${footerDropdownStatus.customerServiceOpen? "": "hide" }`} >
          <span>Accessibility</span>
          <span>Contact Us</span>
          <span>Return Policy</span>
          <span>FAQ</span>
          <span>Gift Certificates</span>
          <span>Wishlist</span>
        </div>
      </div>
      <div className="">
        <p id="company_dropdown" className={`title ${footerDropdownStatus.companyOpen? "drop-icon-plus": "drop-icon-minus" }` } onClick={hanldeClick}>Company</p>
        <div className={`column ${footerDropdownStatus.companyOpen? "": "hide" }`}>
          <span>About Us</span>
          <span>Careers</span>
          <span>Press</span>
          <span>Affiliates</span>
        </div>
      </div>
      <div className="">
        <p className='title'>Follow Us</p>
        <div className='SS'>
          <img src={facebookSVG} alt="facebook" />
          <img src={instagramSVG} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;