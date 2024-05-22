import Hero from "../components/Hero";
import Features from "../components/Features";
import PageTitle from '../components/PageTitle'

const Home = () => {
  return (
    <>
    <PageTitle title="ArgentBank - HomePage" /> {/* Définition du titre de la page */}
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default Home;
