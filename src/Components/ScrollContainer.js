import React, { useEffect, useRef } from "react";
// Locomotive scroll
import locomotiveScroll from "locomotive-scroll";

export default function ScrollContainer(props) {
  const scrollContainer = useRef();
  useEffect(() => {
    const locoScroll = new locomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      direction: "horizontal",
    });

    setTimeout(locoScroll.update(), 100);

    return () => {
      locoScroll.destroy();
    };
  }, []);
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
