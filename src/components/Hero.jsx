import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { MacbookScroll } from "./design/Macbook";
import dashboard from "../assets/snapshots/dashboard.png"

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Elevate your SACCO experience with &nbsp;efficiency&nbsp;try {``}
            <span className="inline-block relative">
              SAMS
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Boost your productivity and streamline operations. Maximize
            efficiency and effectiveness. Drive growth and success for your
            SACCO with SAMS
          </p>
          <Button href="/pricing" white>
            REQUEST A DEMO
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* <MacbookScroll
            src={`/linear.webp`}
            showGradient={false}
          /> */}
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={dashboard}
                  alt="dashboard"
                  className="w-full h-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[1%]"
                  width={1024}
                  height={490}
                />

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" /> */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 bg-n-90/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt="icon" width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Manager approved loan"
                  />
                </ScrollParallax>
              </div>
            </div>
            {/* <Gradient /> */}
          </div>
          {/* <div className="absolute -top-[54%] left-[52%] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[128%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
