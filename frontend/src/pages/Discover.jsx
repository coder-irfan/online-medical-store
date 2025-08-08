import React from "react";
import Hero from "../components/Discover/Hero";
import Companies from "../components/Discover/Companies";
import OurStory from "../components/Discover/OurStory";
import Categories from "../components/Discover/Categories";
import CTA from "../components/Discover/CTA";
import CustomersReview from "../components/Discover/CustomersReview";
import Blog from "../components/Discover/Blog";

function Discover() {
  return (
    <>
      <Hero />
      <Companies />
      <OurStory />
      <Categories />
      <CTA />
      <CustomersReview />
      <Blog />
    </>
  )
}

export default Discover;