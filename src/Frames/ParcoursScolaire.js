import React from "react";
import TimelinePoint from "../Components/TimelinePoint";

const timelineData = [
  {
    id: 0,
    position: "3%",
    date: "Juin 2018",
    company: "Bac STI2D ITEC",
    title: "",
    lieu: "Lycée Gabriel Voisin, Tournus",
    description:
      "Analyse, Sciences des matériaux, Conduite de projet, Résistance des matériaux, éco-conception",
  },
  {
    id: 1,
    position: "25%",
    date: "2018/2019",
    company: "DUT Mesures Physiques",
    title: "",
    lieu: "Iut du Creusot, Le Creusot",
    description: "Analyse, Sciences des matériaux, Chimie",
  },
  {
    id: 2,
    position: "50%",
    date: "2019/2021",
    company: "DUT MMI",
    title: "",
    lieu: "Iut de Belfort-Montbéliard, Montbéliard",
    description: "Communication, Développement web, Design, Gestion de projet",
  },
  {
    id: 3,
    position: "75%",
    date: "2021/2022",
    company: "LPMD",
    title: "",
    lieu: "Iut di Corsica, Corte",
    description:
      "Design graphique, gestion de projet, Mutlimédia, Animation, Web, Print",
  },
];

export default function ParcoursScolaire() {
  return (
    <div id="ParcoursScolaire" data-scroll-section>
      <h2 className="text-center">Mon parcours scolaire</h2>
      <div className="timeline-container flex justify-center align-center">
        <div className="line relative">
          {timelineData.map((data) => (
            <TimelinePoint timelineData={data} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
