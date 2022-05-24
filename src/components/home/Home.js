import React from "react";
import "./home.css";
import Product from "../product/Product";
import Top from "./Top";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mobile from "./Mobile";
import SmartWatch from "./SmartWatch";
import Box from "./Box";

function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="home">
      <div className="home__container">
        <Slider className="img__container" {...settings}>
          <div>
            <img
              className="home__img"
              src="https://m.media-amazon.com/images/I/61Q8pRovmTL._SX3000_.jpg"
              alt="background"
            />
          </div>

          <div>
            <img
              className="home__img"
              src="https://m.media-amazon.com/images/I/716syY0fqWL._SX3000_.jpg"
              alt="background"
            />
          </div>

          <div>
            <img
              className="home__img"
              src="https://m.media-amazon.com/images/I/61kCwgZgopL._SX3000_.jpg"
              alt="background"
            />
          </div>

          <div>
            <img
              className="home__img"
              src="https://m.media-amazon.com/images/I/71yQGb3WbuL._SX3000_.jpg"
              alt="background"
            />
          </div>
        </Slider>

        <Box />

        <h1 className="home__title"> Our Products </h1>

        <div className="home__row">
          <Product
            key={"12321341"}
            title="AOCHUAN SMART X Pro 3-Axis Handheld Smartphone Gimbal Stabilizer, Built-In Wireless Charging OLED Screen LED Fill Light, Portable and Foldable, Face Tracking Video Stabilizer for iPhone and Android
            "
            price={84.14}
            rating={5}
            image="https://m.media-amazon.com/images/I/617QVGh5BEL._AC_UL320_.jpg"
          />
          <Product
            key={"4953809454544"}
            title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81MZ5D1wHpL._AC_UL320_.jpg "
          />

          <Product
            key={"49538095454"}
            title="iPhone Charger, TAKAGI Lightning Cable 3PACK 6FT Nylon Braided USB Charging Cable High Speed Data Sync Transfer Cord Compatible with iPhone 
            "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71m-EsCA2aL._AC_UL320_.jpg"
          />

          <Product
            key={"49538097774"}
            title="TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic Headset Premium Deep Bass for Sport Black
            "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61rs+byhEOL._AC_UL320_.jpg"
          />
          <Product
            key={"495380988854"}
            title="[1+2 Pack] Galaxy S22 Privacy Screen Protector, [Case Friendly] [No Bubbles] [Full Coverage] [Anti-Spy] Premium Tempered Glass Screen Protector,for Samsung Galaxy S22 (6.1inch)
            "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61SgYIoBIbL._AC_UL320_.jpg"
          />
          <Product
            key={"495380998984"}
            title="Beats Studio Buds – True Wireless Noise Cancelling Earbuds – Compatible with Apple & Android, Built-in Microphone, IPX4 Rating, Sweat Resistant Earphones, Class 1 Bluetooth Headphones - Black
            "
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            key={"4903888850"}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            key={"3445930"}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            key={"3254354345"}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

          <Product
            key={"3254354354545"}
            title="Samsung Galaxy A12 Dual SIM Mobile - 6.5 Inch, 128 GB, 4 GB RAM, 4G LTE - Black"
            price={200.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81A3nwwKt2S._AC_UL320_.jpg"
          />
          <Product
            key={"90829332"}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />

          <Product
            key={"9082933552"}
            title="Dell Vostro 3510 laptop - 11th Gen Intel core i7-1165G7, 8GB RAM, 1TB HDD , Nvidia GeForce MX350 GDDR5 Graphics, 15.6 Carbon Black
            "
            price={1000.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Gphn97m9L._AC_UL320_.jpg"
          />
        </div>
      </div>
      <Top />
      <Mobile />
      <SmartWatch />
    </div>
  );
}

export default Home;
