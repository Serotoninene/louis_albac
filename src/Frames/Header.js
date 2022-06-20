import React from "react";
// Components
import Navbar from "../Components/Navbar";
// Assets
import headerPicture from "../Assets/Images/louisAlbac.jpg";
import behance from "../Assets/Logos/behanceLogo.svg";
import facebook from "../Assets/Logos/facebookLogo.svg";
import instagram from "../Assets/Logos/instagramLogo.svg";
import linkedin from "../Assets/Logos/linkedinLogo.svg";
// Framer motion
import { motion } from "framer-motion";

export default function Header({ scrollTo }) {
  return (
    <div id="Header" data-scroll-section>
      <div className="container flex justify-center align-center relative">
        <Navbar scrollTo={scrollTo} />
        <div className="img-container relative">
          <motion.h1
            initial={{ opacity: 0, x: "-50%", y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.6, 0.05, -0.01, 0.9], delay: 0.2 }}
          >
            Louis{" "}
            <motion.span
              // initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
            >
              Albac
            </motion.span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.4,
            }}
            className="hidden"
          >
            <motion.img
              src={headerPicture}
              alt="Louis Albac"
              className="img-fluid"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ ease: [0.6, 0.05, -0.01, 0.9], delay: 0.1 }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: "50%", y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.6, 0.05, -0.01, 0.9], delay: 0.3 }}
          >
            Portfolio
          </motion.h1>
        </div>

        <motion.div
          className="footer absolute flex justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.6, 0.05, -0.01, 0.9], delay: 0.3 }}
        >
          <p> @2022</p>
          <ul className="flex socials">
            <li>
              <a href="https://www.behance.net/louisalbac">
                <img src={behance} alt="behance logo" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100004376804814">
                <img src={facebook} alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/negrobonnet/">
                <img src={instagram} alt="instagram logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/louis-albac/">
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
