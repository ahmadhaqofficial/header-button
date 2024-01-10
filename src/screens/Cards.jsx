import React from 'react';
import Half from "../assets/half.png";
import Salad from "../assets/salad.png";
import Sushi from "../assets/sushi.png";
import Burger from "../assets/burger.png";
import Dessert from "../assets/dessert.png";
import Pasta from "../assets/pasta.png"

const Cards = () => {
  return (
    <>
    <div className="card__heading__container">
    <div className="cards__heading__content">
      More Than 10,000 Dishes to orders!
    </div>
    <div className="cards__heading__sub__content">
      lorem ipsum dolor sit , consectetur elite, some people are so bad that they are almost  <br /> sed do  incident ut lab et color magna liquid.
    
    </div>
       </div>
       <div className="cards__main">
       <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Half} alt="" />
        </div>
       </div>
       <div className="cards__content">
          Pizza
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Burger} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Burger
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Pasta} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Pasta
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Sushi} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Sushi
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Salad} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Salad
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Dessert} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Dessert
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Half} alt="" />
        </div>
       </div>
       <div className="cards__content">
          Pizza
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Burger} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Burger
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Pasta} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Pasta
        </div>
        </div>
        <div className="cards__first__container">
       <div className="cards__container">
        <div className="cards__img">
          <img className="half__slice_pizza" src={Sushi} alt="" />
        </div>
       </div>
       <div className="cards__content">
       Sushi
        </div>
        </div>
       
        </div>
        
        </>
  )
}

export default Cards