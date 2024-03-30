import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import { TracingBeam } from "./components/ui/TracingBeam";

const App = () => {
  return (
    <TracingBeam className="px-6">
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Testimonial />
        <Footer />
      </div>

      <ButtonGradient />
    </TracingBeam>
  );
};

export default App;
