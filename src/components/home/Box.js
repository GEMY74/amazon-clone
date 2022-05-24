import React from "react";
import "./box.css";

function Box() {
  return (
    <div className="box__container">
      <div className="box">
        <h1 className="box__title">Up to 40% off | Personal Care</h1>
        <div className="img__box">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1419409_4594524_Egypt_EG_SSW_Apr_RAM22_GW_DC_PersonalCare_379x304_1X._SY304_CB624048521_.jpg"
            alt="home"
          />
        </div>
      </div>
      <div className="box">
        <h1 className="box__title">Up to 25% off | Food & Beverages</h1>
        <div className="img__box">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1419409_4594523_Egypt_EG_SSW_Apr_RAM22_GW_DC_FoodBeverage_379x304_1X._SY304_CB624048521_.jpg"
            alt="home"
          />
        </div>
      </div>
      <div className="box">
        <h1 className="box__title">Up to 40% off | Household essentials</h1>
        <div className="img__box">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1419409_4594526_Egypt_EG_SSW_Apr_RAM22_GW_DC_HomeCare_379x304_1X._SY304_CB624048521_.jpg"
            alt="home"
          />
        </div>
      </div>
      <div className="box">
        <h1 className="box__title">Up to 40% off | Baby Products</h1>
        <div className="img__box">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumables/XCM_Manual_1419409_4594525_Egypt_EG_SSW_Apr_RAM22_GW_DC_Baby_379x304_1X._SY304_CB624048521_.jpg"
            alt="home"
          />
        </div>
      </div>
    </div>
  );
}

export default Box;
