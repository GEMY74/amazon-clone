import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import "./headerlog.css";

function HeaderLog() {
  return (
    <div className="headerlog">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </NavLink>

      <div className="headerlog__nav">
        <div className="headerlog__option">
          <span className="headerlog__optionLineOne">Hi There , </span>
          <NavLink to="/login">
            <button className="header__btn">Sign In</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeaderLog;
