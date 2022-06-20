import React, { useState, useEffect, useRef } from "react";
// Utilitaries
import useWindowSize from "../Utilitaries/Utilitaries/Hooks/useWindowSize";
// Locomotive scroll
import locomotiveScroll from "locomotive-scroll";

export default function ScrollContainer(props) {
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

  const scrollTo = () => {};

  return (
    <div
      className="ScrollContainer"
      ref={scrollContainer}
      data-scroll-container
      onClick={scrollTo}
    >
      <div className="flex">{props.children}</div>
    </div>
  );
}
