import React from "react";

export default function TimelinePoint({ timelineData }) {
  const descriptionDisplayed = timelineData.description.split(".");

  return (
    <div
      className="TimelinePoint absolute flex-column align-center"
      style={{ left: timelineData.position }}
    >
      <div className="point relative"></div>
      <div className="content">
        <h3>
          {timelineData.date} <br />
          {timelineData.company} -{" "}
          <span className="italic">
            {timelineData.lieu} <br />
            {timelineData.title}
          </span>
        </h3>
        {descriptionDisplayed.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
        <p></p>
      </div>
    </div>
  );
}
