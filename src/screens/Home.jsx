import React from "react";
import "./App.scss";
import Logo from "../assets/logo.png";
import { useLayoutEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(true);
  const [isScrolling, setScrolling] = React.useState(false);

  function checkSize() {
    if (window.innerWidth < 1510) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  useLayoutEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    window.addEventListener("scroll", () => {
      setMenuOpen(false);
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  return (
    <>
      <div className="home__joumbotron">
        <div className="img__container">
          {" "}
          <img className="hearder__logo" src={Logo} alt="" />
        </div>

        {menuOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 1510) {
                setMenuOpen(false);
              }
            }}
          >
            <div className="navbar__main">
              <a className="header__buttons english__button" href="Home">
                English
              </a>
              <a className="header__buttons" href="Services">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </a>
              <a className="header__buttons header__button" href="About us">
                Home
              </a>
              <a className="header__buttons header__button" href="Blogs">
                Things to Do
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Directories
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Living in Doha
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Jobs in Doha
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Healthy Living
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Family Matters
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Blog
              </a>
              <a className="header__buttons header__button" href="Contact us">
                Contests
              </a>
            </div>
          </OutsideClickHandler>
        ) : null}
        <button
          className="ibt__contant__nav"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          title="Menu"
        >
          {menuOpen ? (
            <Close size={20} color="White" />
          ) : (
            <Menu size={20} color="White" />
          )}
        </button>
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, nisi
      eligendi excepturi accusamus sequi! Recusandae, doloremque.
    </>
  );
}
function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
