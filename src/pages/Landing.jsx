import Benefits from "../components/Benefits";
import CardSection from "../components/CardSection";
import FaqsSection from "../components/FaqsSection";
import Hero from "../components/Hero";
import OpenAccountSection from "../components/OpenAccountSection";
import Testimonials from "../components/Testimonials";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <CardSection />
      <FaqsSection />
      <Testimonials />
      <OpenAccountSection />
    </div>
  );
};

export default Landing;
