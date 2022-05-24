import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Mobile() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="top__container">
      <h1> Mobiles & Laptops </h1>
      <Slider {...settings}>
        <div className="top__img">
          <img src="/Images/mob1.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/mob2.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/mob3.jpg" alt="top-img" />
        </div>

        <div className="top__img">
          <img src="/Images/mob4.jpg" alt="top-img" />
        </div>

        <div className="top__img">
          <img src="/Images/mob5.jpg" alt="top-img" />
        </div>

        <div className="top__img">
          <img src="/Images/mob6.jpg" alt="top-img" />
        </div>

        <div className="top__img">
          <img src="/Images/lab2.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/lab4.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/lab5.jpg" alt="top-img" />
        </div>
      </Slider>
    </div>
  );
}

export default Mobile;
