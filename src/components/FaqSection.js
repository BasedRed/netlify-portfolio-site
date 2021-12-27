import React from "react";
import styled from "styled-components";
import { About } from "../styles";
//Import Toggle
import Toggle from "./Toggle";

import { AnimateSharedLayout } from "framer-motion";
import {useScroll} from './useScroll';
import { scrollReveal } from "../animation";

const FaqSection = () => {
  //Variables
const [element, controls] = useScroll();


  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Why did I create this">
          <div className="answer">
            <p>Just because I can.</p>
            <p>
              Lol
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Coding.</p>
            <p>
              And then taking pictures. What else is there to it?
            </p>
          </div>
        </Toggle>

        <Toggle title="Different Payment methods">
          <div className="answer">
            <p>Of course there are many ways to pay.</p>
            <p>
              However there are much less people willing to.
            </p>
          </div>
        </Toggle>

        <Toggle title="What products do you offer.">
          <div className="answer">
            <p>Everything, from juggling to knitting and coding.</p>
            <p>
              Oh, I also know how to cook, a little.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
