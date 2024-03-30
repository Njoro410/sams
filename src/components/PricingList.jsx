import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import { GlowingStarsBackground } from "./ui/GlowingBackground";

const PricingList = () => {
  return (
    <div className="relative">
      <div className="flex  gap-[1rem] max-lg:flex-wrap">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-full even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4 text-center">{item.title}</h4>

            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50 text-center">
              {item.description}
            </p>

            <Button
              className="w-full mb-2"
              href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
              white={!!item.price}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <GlowingStarsBackground />
      </div>
    </div>
  );
};

export default PricingList;
