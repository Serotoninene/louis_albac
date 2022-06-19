import React, { useEffect, useRef } from "react";
// Utilitaries
import useWindowSize from "../Utilitaries/Utilitaries/Hooks/useWindowSize";
// Locomotive scroll
import locomotiveScroll from "locomotive-scroll";

export default function ScrollContainer(props) {
  const scrollContainer = useRef();
  const { width } = useWindowSize();
  let locoScroll;
  useEffect(() => {
    locoScroll = new locomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      direction: width < 576 ? "vertical" : "horizontal",
    });
    setTimeout(locoScroll.update(), 100);
  }, [width]);

  return (
    <div
      className="ScrollContainer flex"
      ref={scrollContainer}
      data-scroll-container
    >
      {props.children}
    </div>
  );
}
