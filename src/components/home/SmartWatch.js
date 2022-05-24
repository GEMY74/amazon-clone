import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SmartWatch() {
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
      <h1> Smart Watches & Headphoness </h1>
      <Slider {...settings}>
        <div className="top__img">
          <img src="/Images/head1.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/head2.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/head3.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/watch1.jpg" alt="top-img" />
        </div>

        <div className="top__img">
          <img src="/Images/warch2.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/watch3.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/watch4.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/watch5.jpg" alt="top-img" />
        </div>
        <div className="top__img">
          <img src="/Images/watch6.jpg" alt="top-img" />
        </div>
      </Slider>
    </div>
  );
}

export default SmartWatch;
