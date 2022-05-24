import React from "react";
import Subtotal from "../subtotal/Subtotal";
import "./checkout.css";
import { useStateValue } from "../../store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://offerscouponsdeals.in/blog/wp-content/uploads/2018/12/Top_banner_PC_NewGirl.jpg"
          className="checkout__add"
          alt="add"
        />
        <div>
          <h2 className="checkout__title"> Your Shopping Basket! </h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
