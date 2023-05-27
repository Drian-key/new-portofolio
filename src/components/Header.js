import React, { useState } from "react";
import Navbar from "./Navbar";
import Accesoris from "./Accesoris";
import { useParallax } from "react-scroll-parallax";

export default function Header() {
  const [skewY1, setSkewY1] = useState(
    "-skew-y-[12deg] md:-skew-y-[8deg] lg:-skew-y-[6deg]"
  );
  const [skewY2, setSkewY2] = useState(
    "skew-y-[12deg] md:skew-y-[8deg] lg:skew-y-[6deg]"
  );

  window.addEventListener("scroll", () => {
    const value = 15 + window.scrollY / 45;
    setSkewY1(`-skew-y-[${value}deg]`);
    setSkewY2(`skew-y-[${value}deg]`);

    if (value <= 15) {
      setSkewY1("-skew-y-[12deg] md:-skew-y-[8deg] lg:-skew-y-[6deg]");
      setSkewY2("skew-y-[12deg] md:skew-y-[8deg] lg:skew-y-[6deg]");
    }
  });

  const heading = useParallax({
    scale: [1, 1.1, "easeInQuad"],
  });

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-b from-third to-primary relative">
        <div className="container px-4">
          <Navbar />
          <div className="flex flex-wrap mt-10 lg:px-28">
            <div className="w-full self-center text-center overflow-hidden relative">
              <h1
                className="font-poppins font-extrabold text-4xl text-white relative z-10 md:text-5xl lg:text-6xl"
                ref={heading.ref}>
                HI I'M DRIAN TCHO <br /> WEB DEVELOPER
              </h1>
              <p className="text-sm text-white mt-6 relative z-10 sm:text-base md:text-lg">
                “Learn what you see, do what you think” <br /> Drian Tcho{" "}
              </p>
              <button className="text-sm font-bold text-primary bg-second mt-6 px-[15px] py-[10px] relative z-10 rounded-md hover:text-third transition duration-200 ease-in-out sm:text-base md:text-md">
                <a href="#hero">Get started</a>
              </button>

              <Accesoris />
            </div>
          </div>
        </div>
      </section>

      <span
        className={`absolute left-0 w-full h-96 bg-dark ${skewY1} origin-top-left transition-all duration-1000`}></span>
      <span
        className={`absolute right-0 w-full h-96 bg-dark ${skewY2} origin-top-right transition-all duration-1000`}></span>
    </>
  );
}
