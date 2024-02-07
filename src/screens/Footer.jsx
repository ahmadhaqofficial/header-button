import React from "react";
import Hello from "../assets/hello.png";
import Back from "../assets/back.png";

const Footer = () => {
  return (
    <div className="Footer__container__img">
      {/* <img className='Footer__container__img__bg' src={Back} alt="" /> */}
      <div className="Footer__container">
        <div className="Footer__container__main">
          <div className="Footer__container__right">
            <div className="Footer__img__container">
              <img src={Hello} alt="" />
            </div>

            <div className="footer__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit, sed do eiusmod tempor incididunt ut labore et <br />{" "}
              dolore magna aliqua.
            </div>

            <div className="svg__container">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          </div>
          <div className="Help__container">
            <div className="Help__container__title">Help</div>
            <div className="Help__buttons">Customer Support</div>
            <div className="Help__buttons">Delivery Details</div>
            <div className="Help__buttons">Terms & Conditions</div>
            <div className="Help__buttons">Privacy Policy</div>
          </div>
          <div className="Help__container">
            <div className="Help__container__title">Resources</div>
            <div className="Help__buttons">Free eBooks</div>
            <div className="Help__buttons">Development Tutorial</div>
            <div className="Help__buttons">How to - Blog</div>
            <div className="Help__buttons">Youtube Playlist</div>
          </div>
          <div className="Help__container">
            <div className="Help__container__title">Links</div>
            <div className="Help__buttons">Free eBooks</div>
            <div className="Help__buttons">Development Tutorial</div>
            <div className="Help__buttons">How to - Blog</div>
            <div className="Help__buttons">Youtube Playlist</div>
          </div>
        </div>

        <div className="footer__content__main">
          <div className="footer__content__bottom">
            © Copyright 2024, All Rights Reserved
          </div>

          <div className="footer__content__two">
            Privacy Policy Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
