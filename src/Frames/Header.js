import React from "react";
// Components
import Navbar from "../Components/Navbar";

// Assets
import headerPicture from "../Assets/Images/louisAlbac.png";
import behance from "../Assets/Logos/behanceLogo.svg";
import facebook from "../Assets/Logos/facebookLogo.svg";
import instagram from "../Assets/Logos/instagramLogo.svg";
import linkedin from "../Assets/Logos/linkedinLogo.svg";
import { useEffect } from "react";

export default function Header({ setScrollTo }) {
  return (
    <div id="Header" data-scroll-section>
      <div className="container flex justify-center align-center relative">
        <Navbar setScrollTo={setScrollTo} />
        <div className="img-container relative">
          <h1>
            Louis <span>Albac</span>
          </h1>
          <img src={headerPicture} alt="Louis Albac" className="img-fluid" />
          <h1>Portfolio</h1>
        </div>

        <div className="footer absolute flex justify-between">
          <p> @2022</p>
          <ul className="flex socials">
            <li>
              <a href="https://www.behance.net/">
                <img src={behance} alt="behance logo" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
