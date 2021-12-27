import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images

import void1 from '../img/void1.jpg';

import omyt from "../img/omyt.png";

import heroin from '../img/heroin.jpg';

//Import animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imgAnim,
  lineAnim,
  slider,
  sliderContainer
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Film>
        <motion.h2 variants={fade}>THE VOID</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={imgAnim} src={void1} alt="athlete" />
          </Hide>
        </Link>
      </Film>
      <Film variants={fade} ref={element} animate={controls} initial="hidden">
        <h2>OMYT</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={omyt} alt="theracer" />
        </Link>
      </Film>
      <Film variants={fade} ref={element1} animate={controls1} initial="hidden">
        <h2>HEROIN</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={heroin} alt="goodtimes" />
        </Link>
      </Film>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Film = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
