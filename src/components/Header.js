import React, { useState } from "react";
import coffee from "../assets/Coffee.png";
import troppy from "../assets/Troppy.png";
import game from "../assets/Game.png";
import liboay from "../assets/liboay.png";
import speaker from "../assets/Speaker.png";
import camera from "../assets/camera.png";
import laptop from "../assets/Laptop.png";
import Navbar from "./Navbar";

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

  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-b from-third to-primary relative">
        <div className="container px-4">
          <Navbar />
          <div className="flex flex-wrap mt-10 lg:px-28">
            <div className="w-full self-center text-center overflow-hidden relative">
              <h1 className="font-poppins font-extrabold text-4xl text-white relative z-10 md:text-5xl lg:text-6xl">
                HI I'M DRIAN TCHO <br /> WEB DEVELOPER
              </h1>
              <p className="text-sm text-white mt-6 relative z-10 sm:text-base md:text-lg">
                “Learn what you see, do what you think” <br /> Drian Tcho{" "}
              </p>
              <button className="text-sm font-bold text-primary bg-second mt-6 px-[15px] py-[10px] relative z-10 rounded-md hover:text-third transition duration-200 ease-in-out sm:text-base md:text-md">
                <a href="#hero">Get started</a>
              </button>
              <div className="-mt-12 lg:m-0 lg:mb-10">
                <img
                  src={laptop}
                  alt="laptop"
                  className="max-w-full mx-auto scale-50"
                />
              </div>
              <span className="absolute -top-8 left-24 rotate-[24deg] scale-50 md:scale-75 lg:left-96">
                <img src={troppy} alt="troppy" className="animate-pulse" />
              </span>
              <span className="absolute -left-10 -top-16 rotate-[24deg] scale-50 z-50 md:scale-75">
                <img src={coffee} alt="coffee" className="animate-pulse" />
              </span>
              <span className="absolute top-20 -right-20 rotate-[24deg] scale-50 md:scale-75">
                <img src={game} alt="game" className="animate-pulse" />
              </span>
              <span className="absolute top-20 -left-10 rotate-[24deg] scale-50 md:scale-75 md:left-10 md:top-28 lg:left-60">
                <img src={liboay} alt="liboay" className="animate-pulse" />
              </span>
              <span className="absolute -top-2 left-0 rotate-[24deg] scale-50 md:scale-75 md:top-10 lg:left-28">
                <img src={camera} alt="camera" className="animate-pulse" />
              </span>
              <span className="absolute top-0 rotate-[24deg] scale-50 lg:right-56">
                <img src={speaker} alt="speaker" className="animate-pulse" />
              </span>
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
