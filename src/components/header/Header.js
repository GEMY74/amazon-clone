import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
// import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  // const handleAuthenticaton = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </NavLink>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <i className="uil uil-search header__searchIcon"></i>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Welcome</span>
          <NavLink to="/login">
            <button className="header__btn">Sign Out</button>
          </NavLink>
        </div>

        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <i className="uil uil-shopping-cart-alt"></i>

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
