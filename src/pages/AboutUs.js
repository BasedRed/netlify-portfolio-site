import React from "react";
//Import About Section
import AboutSection from "../components/AboutSection";
//Import Service section
import ServiceSection from "../components/ServiceSection";
//Faq section
import FaqSection from "../components/FaqSection";
//Import animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
