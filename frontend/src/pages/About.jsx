import React from "react";
import Hero from "../components/About/Hero";
import AboutUs from "../components/About/AboutUs";
import Services from "../components/About/Services";
import CTA from "../components/About/CTA";

function About({ isLoggedIn }) {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <CTA isLoggedIn={isLoggedIn}/>
    </>
  )
}

export default About;