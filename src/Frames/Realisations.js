import React, { useState, useEffect, useRef } from "react";
// Component
import Realisation from "../Components/Realisation";
// Framer motion
import { AnimatePresence, LayoutGroup } from "framer-motion";
// Assets
import trueCider from "../Assets/Images/trueCider.png";
import ExtendedRealisation from "../Components/ExtendedRealisation";

const content = [
  {
    id: 0,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Photographie",
    description: "Description Lorem Ipsum",
  },
  {
    id: 1,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Animation",
    description: "Description Lorem Ipsum",
  },
  {
    id: 2,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Web",
    description: "Description Lorem Ipsum",
  },
  {
    id: 3,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Animation",
    description: "Description Lorem Ipsum",
  },
  {
    id: 4,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Print",
    description: "Description Lorem Ipsum",
  },
  {
    id: 1,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Print",
    description: "Description Lorem Ipsum",
  },
  {
    id: 5,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Animation",
    description: "Description Lorem Ipsum",
  },
  {
    id: 6,
    title: "True Cider",
    imgSrc: trueCider,
    category: "Animation",
    description: "Description Lorem Ipsum",
  },
  {
    id: 7,
    title: "True Cider",
    imgSrc: trueCider,
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
                key={c.key}
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
