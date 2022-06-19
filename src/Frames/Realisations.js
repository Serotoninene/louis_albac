import React, { useState, useEffect, useRef } from "react";
// Component
import Realisation from "../Components/Realisation";
import ExtendedRealisation from "../Components/ExtendedRealisation";
// Framer motion
import { AnimatePresence } from "framer-motion";

// Assets
import assets from "../projects";

const content = [
  {
    id: 0,
    title: "CV Animé",
    imgSrc: assets.cv,
    video: assets.cvVideo,
    category: "Web",
    description:
      "Cv animé réalisé sur After Effects dans le cadre d'un projet pour la licence professionnelle métiers du design. Le but de ce projet est de proposer son CV de manière interactive et créative.",
  },
  {
    id: 1,
    title: "Sound Design",
    imgSrc: assets.soundDesign,
    video: assets.soundDesignVid,
    category: "Animation",
    description:
      "Projet de sound design réalisé dans le cadre de la licence professionnelle métiers du design. Le but de ce projet est de refaire le design sonore d'une vidéo de 30 secondes : bruitages, musiques, mixage audio. Travail réalisé sur Premiere Pro. Les sons utilisés proviennent de banques de sons libres de droit.",
  },
  {
    id: 2,
    title: "Typographie",
    imgSrc: assets.furiosa,
    category: "Illustration",
    description:
      'Projet typographique réalisé dans le cadre de la licence professionnelle métiers du design. Le but de ce projet est de créer un lettrage pour 2 marques aux domaines d\'applications différents (ici un constructeur automobile et une compagnie aérienne). Le mot proposé est le mot "Furiosa". Projet réalisé sur Illustrator.',
  },
  {
    id: 3,
    title: "Projet Photoshop",
    imgSrc: assets.photoshopProject,
    category: "Illustration",
    description:
      "Projet de création visuelle réalisé dans le cadre de la licence professionnelle métiers du design. Le but de ce projet est de détourner une paire de sneakers existante (Reebook Club c 85) pour créer une nouvelle paire. Projet réalisé sur Photoshop.",
  },
  {
    id: 4,
    title: "La cuisine des animaux",
    imgSrc: assets.cuisineAnimaux,
    category: "Print",
    description:
      "Création d’un packaging pour la marque de nourriture pour chien et chat La cuisine des animaux. Projet professionnel réalisé dans le cadre de mon alternance.",
  },
  {
    id: 5,
    title: "Projet Photo 1",
    imgSrc: assets.projetPhoto1,
    category: "Photographie",
    description:
      "Projet photographique réalisé dans le cadre de la licence professionnelle métiers du design. Le but de ce projet est de faire ressortir des éléments géométriques ( lignes; courbes) à travers des photos.",
  },
  {
    id: 6,
    title: "Projet Photo 2",
    imgSrc: assets.projetPhoto2,
    category: "Photographie",
    description:
      "Projet photographique réalisé dans le cadre de la licence professionnelle métiers du design. Le but de ce projet est de faire une photo studio d’un objet avec une mise en scène, ici une paire de sneakers.",
  },
  {
    id: 7,
    title: "Animation",
    imgSrc: assets.animationPerso,
    video: assets.animationPersoVid,
    category: "Animation",
    description:
      "Projet d'animation de personnage réalisé dans le cadre de la licence professionnelle métiers du design. Le but de ce projet était de faire marcher un personnage et de le faire sauter par-dessus un trou à l'aide d'After Effects. Ce travail a pour but de se familiariser avec les outils d'after (marionnette). J'ai utilisé le personnage de Darwin Watterson, issu de la série \"Le monde incroyable de Gumball\".",
  },
  {
    id: 8,
    title: "Animation",
    imgSrc: assets.animationPerso,
    video: assets.animationPersoVid,
    category: "Animation",
    description: "Description Lorem Ipsum",
  },
];

const categories = [
  "Photographie",
  "Animation",
  "Print",
  "Illustration",
  "Web",
];

export default function Realisations({ ref }) {
  const [categorySelected, setCategorySelected] = useState("");
  const [elSelected, setElSelected] = useState("");
  let contentDisplayed = content;
  const [elSnapshot, setElSnapshot] = useState();

  if (categorySelected !== "") {
    contentDisplayed = content.filter((el) => el.category === categorySelected);
  }

  useEffect(() => {
    setElSnapshot(contentDisplayed.filter((el) => el.id == elSelected));
  }, [elSelected]);

  return (
    <div ref={ref} id="Realisations" data-scroll-section>
      <div className="container flex-column align-center relative">
        <div className="realisations-header">
          <h2>Mes réalisations</h2>
          <div className="filters flex justify-center">
            {categories.map((category, idx) => (
              <div key={idx} className=" category flex align-center">
                <p
                  onClick={() => {
                    setCategorySelected(category);
                  }}
                  className="pointer"
                >
                  {category}
                </p>
                <div className="line"></div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          <div className="realisations-content">
            {contentDisplayed.map((c) => (
              <Realisation
                key={c.id}
                contentData={c}
                setElSelected={setElSelected}
              />
            ))}
          </div>

          {elSelected !== "" && (
            <ExtendedRealisation
              elSnapshot={elSnapshot}
              setElSelected={setElSelected}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
