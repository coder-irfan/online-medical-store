import React from "react";
import Hero from "../components/Home/Hero";
import CreatingAccount from "../components/Home/CreatingAccount";
import HappyClients from "../components/Home/HappyClients";
import FollowUs from "../components/Home/FollowUs";

function Home({ isLoggedIn }) {
  return (
    <>
      <Hero />
      <CreatingAccount isLoggedIn={isLoggedIn} />
      <HappyClients />
      <FollowUs />
    </>
  )
}

export default Home;