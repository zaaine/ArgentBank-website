import Landing from "./Landing";

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Landing
        img={"./src/assets/img/icon-chat.png"}
        alt={"Chat Icon"}
        title={"You are our #1 priority"}
        description={
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        }
      />
      <Landing
        img={"./src/assets/img/icon-money.png"}
        alt={"Chat Icon"}
        title={"More savings means higher rates"}
        description={
          "The more you save with us, the higher your interest rate will be!"
        }
      />
      <Landing
        img={"./src/assets/img/icon-security.png"}
        alt={"Chat Icon"}
        title={"Security you can trust"}
        description={
          "We use top of the line encryption to make sure your data and money is always safe."
        }
      />
    </section>
  );
};

export default Features;
