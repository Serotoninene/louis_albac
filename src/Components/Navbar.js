import locomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";

export default function Navbar() {
  return (
    <ul id="Navbar" className="absolute flex">
      <li>
        <p>Réalisations</p>
      </li>
      <li>
        <p>Mon parcours</p>
      </li>
      <li>
        <p> Contact </p>
      </li>
    </ul>
  );
}
