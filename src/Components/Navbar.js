import locomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";

export default function Navbar({ setScrollTo }) {
  return (
    <ul id="Navbar" className="absolute flex">
      <li>
        <a
          href="/#Realisations"
          onClick={() => {
            setScrollTo("Realisations");
          }}
        >
          Réalisations
        </a>
      </li>
      <li>
        <a href="/#ParcoursPro"> Mon parcours </a>
      </li>
      <li>
        <a href="/#Contact"> Contact </a>
      </li>
    </ul>
  );
}
