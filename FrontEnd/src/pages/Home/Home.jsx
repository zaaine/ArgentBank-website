import React from "react";
import "./home.scss";
import Feature, { featuresMock } from "../../components/Feature/Feature";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <main>
      <div className="hero">
        <Hero
          title="Promoted Content"
          subtitle1="No fees."
          subtitle2="No minimum deposit."
          subtitle3="High interest rates."
          text="Open a savings account with Argent Bank today!"
        />
      </div>
      <section className="features">
        <h2 className="srOnly">Features</h2>
        {featuresMock.map((feature) => (
          <Feature 
            key={feature.title} 
            title={feature.title}
            icon={feature.icon}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
};

export { Home };
