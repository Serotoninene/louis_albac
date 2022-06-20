import React, { useState } from "react";
import Button from "../Components/Button";
import louisPhoto from "../Assets/Images/louisAlbac.jpg";
import cv from "../Assets/Images/Louis_Albac.png";

export default function AboutMe() {
  const [isDisplayingCV, setIsDisplayingCV] = useState(false);
  return (
    <div id="AboutMe" className="relative" data-scroll-section>
      <h2 className="text-center">À propos de moi</h2>
      <div className="content-container grid">
        <div className="text">
          <p className="bold">
            Moi c'est Louis, 21 ans, j'habite à Tournus, en Saône-et-Loire (71).
          </p>
          <p>
            Passioné de communication et de design, j'ai pu au fil de mes études
            acquérir beaucoup d'expérience dans différents domaines : rédaction
            de contenus web, illustration, print, UI/UX Design, développement
            Web, gestion de projet, animation, motion design, communication...
          </p>
          <p>
            Durant mon parcours, j'ai pu réaliser différents types de travaux :
          </p>
          <ul>
            <li>- UX/UI Design : maquettes, Wireframes, Prototype...</li>
            <li>- Web : HTML/CSS, CMS...</li>
            <li>
              - Créations visuelles : logo, identité visuelle, charte graphique,
              illustration digitale...
            </li>
            <li>
              - Créations print: carte de visite, flyers format a4 et a5...
            </li>
            <li>
              - Audiovisuel : Montage vidéo, mixage son, motion design,
              animation 2D et 3D
            </li>
          </ul>
          <div className="flex justify-center">
            <Button setIsDisplayingCV={setIsDisplayingCV}></Button>
          </div>
        </div>
        <div className="photo">
          <img src={louisPhoto} alt="Louis Albac" className="img-fluid" />
        </div>
      </div>
      {isDisplayingCV && (
        <div className="CV-container absolute flex justify-center">
          <div className="CV relative">
            <div
              className="cross absolute"
              onClick={() => {
                setIsDisplayingCV(false);
              }}
            >
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
