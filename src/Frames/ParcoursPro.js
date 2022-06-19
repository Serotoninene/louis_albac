import React from "react";
import TimelinePoint from "../Components/TimelinePoint";

const timelineData = [
  {
    id: 0,
    position: "10%",
    date: "Mars 2021/Juin 2021",
    company: "Cafés Querry",
    title: "Stagiaire chargé de communication",
    lieu: "Pontarlier",
    description:
      "Aide à la communication de l'entreprise, création de contenus, créations print, gestion de stocks produits, aide à la logistique de l'entreprise",
  },
  {
    id: 1,
    position: "66%",
    date: "Novembre 2021/Septembre 2021",
    company: "l'Atelier du Chef",
    title: "Biguglia",
    lieu: "Apprenti chargé de communication",
    description:
      "Communication de l'entreprise, créations print, aide au recrutement, Wordpress.Création charte graphique et site visite d'une nouvelle marque",
  },
];

export default function ParcoursPro() {
  return (
    <div id="ParcoursPro" data-scroll-section>
      <h2 className="text-center">Mon parcours pro</h2>
      <div className="timeline-container flex justify-center align-center">
        <div className="line relative">
          {timelineData.map((data) => (
            <TimelinePoint timelineData={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
