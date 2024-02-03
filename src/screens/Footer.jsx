import React from 'react';
import Hello from "../assets/hello.png";
import Back from "../assets/back.png";

const Footer = () => {
  return (
   <div className='Footer__container'>
    <img src={Back} alt="" />
<div className='Footer__container__right'>
<div className='Footer__img__container'>
  <img src={Hello} alt="" />
  </div>
  <div className='footer__content'>Lorem ipsum dolor sit amet, consectetur adipiscing 
  <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore
   magna aliqua.</div>
</div>
   </div>
  )
}

export default Footer