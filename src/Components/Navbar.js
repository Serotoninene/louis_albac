import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ scrollTo }) {
  return (
    <motion.ul
      id="Navbar"
      className="absolute flex"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.6, 0.05, -0.01, 0.9], delay: 0.4 }}
    >
      <li
        onClick={() => {
          scrollTo("#Realisations");
        }}
      >
        Réalisations
      </li>
      <li
        onClick={() => {
          scrollTo("#ParcoursScolaire");
        }}
      >
        Mon parcours
      </li>
      <li
        onClick={() => {
          scrollTo("#Contact");
        }}
      >
        Contact
      </li>
    </motion.ul>
  );
}
