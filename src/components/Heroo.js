import React, { useEffect } from "react";
import coffe from "../assets/Coffee.png";

function Hero(props) {
  useEffect(() => {
    let coffee = document.getElementById("coffee");

    window.addEventListener("scroll", () => {
      console.log(Math.floor(window.scrollY));
      if (Math.floor(window.scrollY) <= 400) {
        coffee.style.left = window.scrollY + "px";
        coffee.style.top = `${window.scrollY * 1.5}px`;
      } else {
        coffee.style.top = `${window.scrollY * 1.5}px`;
        coffee.style.left = "400px";
      }
    });
  }, []);

  return (
    <img
      src={coffe}
      className="coffee relative transition duration-500"
      id="coffee"
      alt=""
    />
  );
}

export default Hero;
