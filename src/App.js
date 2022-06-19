import { useState, useEffect, useRef } from "react";
// Components
import Header from "./Frames/Header";
import Realisations from "./Frames/Realisations";
import ParcoursPro from "./Frames/ParcoursPro";
import ParcoursScolaire from "./Frames/ParcoursScolaire";
import AboutMe from "./Frames/AboutMe";
import Contact from "./Frames/Contact";
import ScrollContainer from "./Components/ScrollContainer";
// Locomotive scroll
import locomotiveScroll from "locomotive-scroll";
// Utilitaries
import useWindowSize from "./Utilitaries/Utilitaries/Hooks/useWindowSize";
// Styling
import "./Scss/style.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";

function App() {
  const scrollContainer = useRef();
  const size = useWindowSize();
  let locoScroll;

  // useEffect(() => {
  //   locoScroll = new locomotiveScroll({
  //     el: scrollContainer.current,
  //     smooth: true,
  //     direction: "horizontal",
  //   });
  //   setTimeout(locoScroll.update(), 500);

  //   return () => {
  //     locoScroll.destroy();
  //   };
  // }, [size]);

  return (
    <div className="App">
      <div
        ref={scrollContainer}
        className="ScrollContainer flex"
        data-scroll-container
      >
        <Header />
        <Realisations />
        <ParcoursScolaire />
        <ParcoursPro />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

export default App;
