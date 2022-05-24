import React from "react";
import "./top.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Top() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="top__container">
      <h1> Frequently purchased in Beauty and Personal Care </h1>
      <Slider {...settings}>
        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>
        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/71KxqJ+26hS._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>
        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/512H3C2XitS._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>
        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/61IZOXWaUnL._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>

        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/71SHLm9YRvL._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>
        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/51CaGImXs7L._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>
        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/71EbnsfAm6L._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>
        <div className="top__img">
          <img
            src="https://m.media-amazon.com/images/I/71gduwC+QLL._AC_SY200_.jpg"
            alt="top-img"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Top;
