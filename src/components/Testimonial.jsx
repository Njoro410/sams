import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { TestimonialMovingCards } from "./design/Testimonials";


const Testimonial = () => {
  return (
    <Section className="overflow-hidden bg-grid-white/[0.05]" id="testimonials">
      <div className=" md:pb-10">
        <Heading
          tag="You sacco could be one of them"
          title="What they are saying"
        />

        <TestimonialMovingCards />
      </div>
    </Section>
  );
};

export default Testimonial;
