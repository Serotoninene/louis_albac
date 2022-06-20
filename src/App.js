import React, { useEffect, useRef } from "react";
// Components
import Header from "./Frames/Header";
import Realisations from "./Frames/Realisations";
import ParcoursPro from "./Frames/ParcoursPro";
import ParcoursScolaire from "./Frames/ParcoursScolaire";
import AboutMe from "./Frames/AboutMe";
import Contact from "./Frames/Contact";
import ScrollContainer from "./Components/ScrollContainer";
// Utilitaries
import useWindowSize from "./Utilitaries/Utilitaries/Hooks/useWindowSize";
// Locomotive scroll
import locomotiveScroll from "locomotive-scroll";
// Styling
import "./Scss/style.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";

function App() {
  const scrollContainer = useRef();
  const { width } = useWindowSize();
  const locoScroll = useRef(null);

  useEffect(() => {
    locoScroll.current = new locomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      direction: "horizontal",
      smartphone: {
        smooth: true,
        direction: "vertical",
      },
    });
    setTimeout(locoScroll.current.update(), 100);

    return () => {
      locoScroll.current.destroy();
    };
  }, [width]);

  const scrollTo = (target) => {
    const targetNode = document.querySelector(target);
    locoScroll.current.scrollTo(targetNode);
  };

  return (
    <div className="App">
      <div
        className="ScrollContainer"
        ref={scrollContainer}
        data-scroll-container
      >
        <div className="flex">
          <Header scrollTo={scrollTo} />
          <Realisations />
          <ParcoursScolaire />
          <ParcoursPro />
          <AboutMe />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
