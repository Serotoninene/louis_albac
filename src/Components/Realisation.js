import React from "react";
import { motion } from "framer-motion";
import ExtendedRealisation from "./ExtendedRealisation";

export default function Realisation({
  contentData,
  elSelected,
  elSnapshot,
  setElSelected,
  width,
}) {
  return (
    <div key={contentData.id} className="Realisation relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        onClick={() => setElSelected(contentData.id)}
      >
        <img src={contentData.imgSrc} className="img-fluid" />
      </motion.div>
      {width <= 576 && elSelected == contentData.id && elSelected !== "" && (
        <ExtendedRealisation
          elSnapshot={elSnapshot}
          setElSelected={setElSelected}
        />
      )}
    </div>
  );
}
