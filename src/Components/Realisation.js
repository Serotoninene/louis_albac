import React from "react";
import { motion } from "framer-motion";

export default function Realisation({ contentData, setElSelected }) {
  return (
    <>
      <motion.div
        key={contentData.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        className="Realisation"
        onClick={() => setElSelected(contentData.id)}
      >
        <img src={contentData.imgSrc} className="img-fluid" />
      </motion.div>
    </>
  );
}
