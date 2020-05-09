import Hero from "./components/Hero/Hero";
import Container from "@material-ui/core/Container";
import About from "./components/About/About";
import History from "./components/History/History";
import Contact from "./components/Contact/Contact";
import React from "react";

import {heroContent, aboutContent, historyContent, contactContent} from './Content';

export const Home = () => (
  <>
    <Hero content={heroContent}/>
    <Container>
      <About content={aboutContent}/>
      <History content={historyContent}/>
      <Contact content={contactContent}/>
    </Container>
  </>
);