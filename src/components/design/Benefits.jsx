import { benefits } from "../../constants";

export const GradientLight = () => {
  return (
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
  );
};


import { HoverEffect } from "../ui/CardHover";

export function BenefitsCards() {
  return (
    <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={benefits} GradientLight={GradientLight} />
    </div>
  );
}
