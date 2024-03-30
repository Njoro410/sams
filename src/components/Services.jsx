import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
  BentoGridComponent,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Leverage the power of AI"
          text="Transforming Possibilities into Realities with Artificial Intelligence"
        />

        <div className="relative">
          <BentoGridComponent />

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
