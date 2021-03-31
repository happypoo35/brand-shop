import Features from "../components/Features";
import Featured from "../components/homeComponents/Featured";
import Grid from "../components/homeComponents/Grid";
import Hero from "../components/homeComponents/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Grid />
      <Featured />
      <Features />
    </>
  );
};

export default Home;
