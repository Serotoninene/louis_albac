import React from "react";

export default function ExtendedRealisation({ elSnapshot, setElSelected }) {
  return (
    <div className="ExtendedRealisation flex align-center justify-center">
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
    </div>
  );
}
