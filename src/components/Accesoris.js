import React from "react";
import coffee from "../assets/Coffee.png";
import troppy from "../assets/Troppy.png";
import game from "../assets/Game.png";
import liboay from "../assets/liboay.png";
import speaker from "../assets/Speaker.png";
import camera from "../assets/camera.png";
import laptop from "../assets/Laptop.png";

import { useParallax } from "react-scroll-parallax";

function Accesoris(props) {
  const spinLaptop = useParallax({
    rotateY: [100, 360],
  });

  return (
    <>
      <div
        className="-mt-12 lg:m-0 lg:mb-10 relative z-[100]"
        ref={spinLaptop.ref}>
        <img
          src={laptop}
          alt="laptop"
          className="max-w-full mx-auto scale-50"
        />
      </div>
      <span className="absolute -top-8 left-24 scale-50 md:scale-75 lg:left-96">
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
    </>
  );
}

export default Accesoris;
