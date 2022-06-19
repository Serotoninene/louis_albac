import React from "react";
import { motion } from "framer-motion";

export default function Realisation({ contentData, setElSelected }) {
  return (
    <div key={contentData.id} className="Realisation ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        onClick={() => setElSelected(contentData.id)}
      >
        <img src={contentData.imgSrc} className="img-fluid" />
      </motion.div>
    </div>
  );
}
