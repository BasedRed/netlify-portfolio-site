import React from "react";

import italy1 from "../img/italy_01.jpg";
//Styles

import { About, Description, Image, Hide } from "../styles";
// import { motion } from "framer-motion";
import { motion } from "framer-motion/dist/es/index";
//Import animations

import { titleAnim, fade, imgAnim } from "../animation";

// Import wave
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>There is so </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              much <span>beauty</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>in this world.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Have you ever stopped and looked around? Sometimes it's enough.
        </motion.p>
        <motion.a className='button-a' href="https://www.instagram.com/jewish_goose/" target="_blank" variants={fade}>@jewish_goose</motion.a>
      </Description>
      <Image>
        <motion.img variants={imgAnim} src={italy1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled components

export default AboutSection;
