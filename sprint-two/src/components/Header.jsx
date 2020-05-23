import React from "react";
import "./styles/main.css";
import logo from "../assets/logo/logo-brainflix.svg";
import user from "../assets/images/usericon.png";
import { Link } from "react-router-dom";

// According to the Routes in App.js, the Header Component has a Link for the Brainflix Logo to take you to the Main Video Component (will display default Video), and another Link for the Upload button to take you to the Upload Component.
function Header() {
  return (
    <header className="header">
      <Link to={`/`}>
        <img className="header__logo" src={logo} alt="BrainFlix Logo" />
      </Link>
      <input
        className="header__input"
        type="text"
        placeholder="Search"
        name=""
        id=""
      />
      <nav className="header__nav">
        <Link to={`/upload`}>
          <button className="header__btn">+ UPLOAD</button>
        </Link>
        <img className="header__user-icon" src={user} alt="" />
      </nav>
    </header>
  );
}

export default Header;
