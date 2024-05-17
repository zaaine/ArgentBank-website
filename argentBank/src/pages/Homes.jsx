import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default Home;
