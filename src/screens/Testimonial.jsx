import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pic from "../assets/pic.png";
import Colon from "../assets/colon.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
const Testimonial = () => {
  return (
   <div className='Our__testimonial__container__main'>

<div className="Our__testimonial__container">
  <div className="Our__testimonial__container__left__side">
    <div className="Our__testimonial__container__left__side__content">
    Our <br /> testimonial
    </div>
    <div className="Our__testimonial__container__left__side__sub__content">
    Lorem ipsum dolor sit amet, consectetur adipiscing 
    <br /> elit, sed do eiusmod tempor incididunt ut labore et 
    <br /> dolore magna aliqua.

    </div>
    </div>
   
<div className="our__testimonial__container__right__side">
<Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> 
        <div className="testimonial__container">
      <div className="testimonial__svg">
        <img src={Colon} alt="" />
      </div>
      <div className="testimonial__container__content">
        Lorem ipsum dolor sit amet, consectetur
         <br /> adipiscing elit, sed do eiusmod tempor
         <br /> incididunt ut labore et dolore magna
         <br /> aliqua.”Whether you're craving a gourmet
         <br /> burger, a fresh salad, or an exotic dish.
      </div>
<div className="testimonial__review__container">
<div className="testimonial__review__img">
  <img src={Pic} alt="" />
</div>
<div className="testimonial__review__name">
  <div className="testimonial__review__name__user">Ali Hassan</div>
  <div className="testimonial__review__stars">
<svg stroke="currentColor" fill="currentColor"
 stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" >
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
    </path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
</div>
</div>

</div>
</div>

   
</SwiperSlide>
      <SwiperSlide>
            <div className="testimonial__container">
      <div className="testimonial__svg">
        <img src={Colon} alt="" />
      </div>
      <div className="testimonial__container__content">
        Lorem ipsum dolor sit amet, consectetur
         <br /> adipiscing elit, sed do eiusmod tempor
         <br /> incididunt ut labore et dolore magna
         <br /> aliqua.”Whether you're craving a gourmet
         <br /> burger, a fresh salad, or an exotic dish.
      </div>
<div className="testimonial__review__container">
<div className="testimonial__review__img">
  <img src={Pic} alt="" />
</div>
<div className="testimonial__review__name">
<div className="testimonial__review__name__user">Ali Hassan</div>
  <div className="testimonial__review__stars">
<svg stroke="currentColor" fill="currentColor"
 stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" >
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
    </path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
</div>
</div>

</div>
    </div>
    </SwiperSlide>
      <SwiperSlide>   <div className="testimonial__container">
      <div className="testimonial__svg">
        <img src={Colon} alt="" />
      </div>
      <div className="testimonial__container__content">
        Lorem ipsum dolor sit amet, consectetur
         <br /> adipiscing elit, sed do eiusmod tempor
         <br /> incididunt ut labore et dolore magna
         <br /> aliqua.”Whether you're craving a gourmet
         <br /> burger, a fresh salad, or an exotic dish.
      </div>
<div className="testimonial__review__container">
<div className="testimonial__review__img">
  <img src={Pic} alt="" />
</div>
<div className="testimonial__review__name">
<div className="testimonial__review__name__user">Ali Hassan</div>
  <div className="testimonial__review__stars">
<svg stroke="currentColor" fill="currentColor"
 stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" >
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
    </path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
</div>
</div>

</div>
    </div></SwiperSlide>
    <SwiperSlide>   <div className="testimonial__container">
      <div className="testimonial__svg">
        <img src={Colon} alt="" />
      </div>
      <div className="testimonial__container__content">
        Lorem ipsum dolor sit amet, consectetur
         <br /> adipiscing elit, sed do eiusmod tempor
         <br /> incididunt ut labore et dolore magna
         <br /> aliqua.”Whether you're craving a gourmet
         <br /> burger, a fresh salad, or an exotic dish.
      </div>
<div className="testimonial__review__container">
<div className="testimonial__review__img">
  <img src={Pic} alt="" />
</div>
<div className="testimonial__review__name">
<div className="testimonial__review__name__user">Ali Hassan</div>
  <div className="testimonial__review__stars">
<svg stroke="currentColor" fill="currentColor"
 stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" >
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
    </path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
</div>
</div>

</div>
    </div></SwiperSlide>
    <SwiperSlide>   <div className="testimonial__container">
      <div className="testimonial__svg">
        <img src={Colon} alt="" />
      </div>
      <div className="testimonial__container__content">
        Lorem ipsum dolor sit amet, consectetur
         <br /> adipiscing elit, sed do eiusmod tempor
         <br /> incididunt ut labore et dolore magna
         <br /> aliqua.”Whether you're craving a gourmet
         <br /> burger, a fresh salad, or an exotic dish.
      </div>
<div className="testimonial__review__container">
<div className="testimonial__review__img">
  <img src={Pic} alt="" />
</div>
<div className="testimonial__review__name">
<div className="testimonial__review__name__user">Ali Hassan</div>
  <div className="testimonial__review__stars">
<svg stroke="currentColor" fill="currentColor"
 stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" >
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
    </path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" ><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
</div>
</div>

</div>
    </div></SwiperSlide>
    </Swiper>
</div>
   







    </div>

   </div>
  )
}

export default Testimonial