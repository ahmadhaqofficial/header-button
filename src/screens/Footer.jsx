import React from 'react';
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
   <div className='Footer__container'>
 <div className='Footer__img__container'>
  <img src={Logo} alt="" />
  </div>
  <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</div>
   </div>
  )
}

export default Footer