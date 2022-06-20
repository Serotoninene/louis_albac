import React from "react";

export default function Button({ setIsDisplayingCV }) {
  return (
    <div
      className="Button"
      onClick={() => {
        setIsDisplayingCV(true);
      }}
    >
      Voir mon CV PDF
    </div>
  );
}
