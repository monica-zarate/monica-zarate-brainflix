import React from "react";
import "./styles/main.css";
import logo from "../assets/logo/logo-brainflix.svg";
import user from "../assets/images/usericon.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="BrainFlix Logo" />
      <input
        className="header__input"
        type="text"
        placeholder="Search"
        name=""
        id=""
      />
      <nav className="header__nav">
        <button className="header__btn">+ UPLOAD</button>
        <img className="header__user-icon" src={user} alt="" />
      </nav>
    </header>
  );
}

export default Header;
