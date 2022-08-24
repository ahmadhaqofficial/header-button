import React from "react";
import "./App.scss";
import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="home__joumbotron">
      <img className="hearder__logo" src={Logo} alt="" />
      <div className="navbar__main">
        <a className="header__buttons" href="Home">
          Home
        </a>
        <a className="header__buttons" href="Services">
          Services
        </a>
        <a className="header__buttons" href="About us">
          About us
        </a>
        <a className="header__buttons" href="Blogs">
          Blogs
        </a>
        <a className="header__buttons" href="Contact us">
          Contact us
        </a>
      </div>
    </div>
  );
}
