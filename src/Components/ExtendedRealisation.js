import React from "react";
import { motion } from "framer-motion";

export default function ExtendedRealisation({ elSnapshot, setElSelected }) {
  return (
    <motion.div
      className="ExtendedRealisation flex align-center justify-center"
      key={elSnapshot.id}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="window relative">
        <div
          className="cross absolute"
          onClick={() => {
            setElSelected("");
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="img-container">
          {elSnapshot[0].video ? (
            <video
              src={elSnapshot[0].video}
              playsInline
              autoPlay
              preload="auto"
              className="img-fluid"
            />
          ) : (
            <img
              src={elSnapshot[0].imgSrc}
              className="img-fluid"
              alt={elSnapshot.title}
            ></img>
          )}
        </div>
        <h3>{elSnapshot[0].title}</h3>
        <p>{elSnapshot[0].description}</p>
      </div>
    </motion.div>
  );
}
