import Hero from "../../components/sections/Hero";
import About from "../About/About";
import Career from "../Careers/Careers";
import Contact from "../Contact/Contact";
import Insights from "../Insights/Insights";
import People from "../People/People";
import Practices from "../Practices/Practices";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Practices />
      <People/>
      <Insights/>
      <Career/>
      <Contact/>
    </main>
  );
};

export default Home;