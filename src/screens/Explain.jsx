import React from 'react';
import Logo2 from "../assets/logo2.png"
const Explain = () => {
  return (
    
    <div className='navbar__content__main'>
    <div className="nav__main__both__sides">
    <div className='navbar__content__main__left'>
      
            <div className="nav__left__content">Fastest Delivery & <span className="span__class"><br />Easy Pickup</span> </div>
            <div className="nav__left__sub__content">
Welcome to the ultimate convenience in mobile dining.
 Our app brings a world of flavors right to your 
 fingertips, allowing you to browse menus, customize 
 your orders, and enjoy quick, hassle-free delivery.
  Whether you're craving a gourmet burger, a fresh 
  salad, or an exotic dish, satisfying your appetite 
  has never been easier or more delightful.
</div>
<div className="nav__left__button"><button className="nav__content__button">Download app</button></div>
            </div>
    <div className="navbar__content__main__right">
      <img className="navbar__content__main__right__img" src={Logo2} alt="" />
    </div>
    </div>
  
</div>
  )
}

export default Explain