import React from 'react';
import Arrow from "../assets/arrow.png";
import Pizza from "../assets/menu.png";
import Apple from "../assets/apple.png";
import Download from "../assets/download.png";
import Store from "../assets/store.png"

const Start = () => {
  return (
    <div className="menu__main__container">
    <div className="menu__left__container">
     <div className="menu__content__left">
     <img className="download__img" src={Download} alt="" />
      <div className="menu__contents__container">
      
      Hello Menu is available <br /> for your android or <br /> Apple.
      
      </div>
      <div className="menu__download__buttons">
        <div className="store__container">
          <img className="store__img" src={Store} alt="" />
          <div className="store__content">
            Get it on <br /><span>Play store</span>

          </div>
        </div>
        <div className="Apple__container">
          <img className="apple_img" src={Apple} alt="" />
          <div className="Apple__content">
              Download on <br /> <span className="play__store__content">Play store
</span>
          </div>
        </div>
      </div>
     </div>
     
    </div>
    <div className="arrow__img__container">
      <img className="arrow__img" src={Arrow} alt="" />

      </div>
    <div className="menu__right__container">
<img className="pizza__img" src={Pizza} alt="" />

    </div>
   </div>
  )
}

export default Start