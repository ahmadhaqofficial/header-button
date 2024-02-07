import React from "react";
import Palate from "../assets/bigpalate.png";
import zinger from "../assets/zinger.png";
import Crispy from "../assets/zingerloaded.png";

const Description = () => {
  return (
    <>
      <div className="description__about__menu palate__responsive">
        <div className="description__about__menu__img__container">
          <img
            className="description__about__menu__img palate__img"
            src={Palate}
            alt=""
          />
        </div>
        <div className="description__about__menu__content">
          <div className="description__about__menu__title">
            Living well beings with <br /> eating well.
          </div>
          <div className="description__about__menu__sub__title">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna
            aliqua.”Whether you're craving a gourmet burger, <br /> a fresh
            salad, or an exotic dish, satisfying your appetite has never been
            easier or <br /> more delightful.
          </div>
        </div>
      </div>

      <div className="description__about__menu__main">
        <div className="description__about__menu  description__about__menu__back__ground">
          <div className="description__about__menu__content description__about__menu__content__margin">
            <div className="description__about__menu__title">
              Living well beings with <br /> eating well.
            </div>
            <div className="description__about__menu__sub__title">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna
              aliqua.”Whether you're craving a gourmet burger, <br /> a fresh
              salad, or an exotic dish, satisfying your appetite has never been
              easier or <br /> more delightful.
            </div>
          </div>
          <div className="description__about__menu__img__container">
            <img
              className="description__about__menu__img zinger__img"
              src={zinger}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="description__about__menu__crispy__back__ground__main">
        <div className="description__about__menu description__about__menu__crispy__back__ground">
          <div className="description__about__menu__img__container">
            <img
              className="description__about__menu__img description__about__menu__img__crispy__zinger"
              src={Crispy}
              alt=""
            />
          </div>
          <div className="description__about__menu__content description__about__menu__content__crispy__margin">
            <div className="description__about__menu__title title__decorations">
              Our Food
            </div>
            <div className="description__about__menu__sub__title sub__title__decorations">
              Welcome to the ultimate convenience in mobile dining. Our app
              brings a world of flavors right <br /> to your fingertips,
              allowing you to browse menus, customize your orders, and enjoy
              quick, <br /> hassle-free delivery. Whether you're craving a
              gourmet burger, a fresh salad, or an exotic dish, <br />{" "}
              satisfying your appetite has never been easier or more delightful.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
