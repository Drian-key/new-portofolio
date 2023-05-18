import React, { useState } from "react";
import logo from "../assets/logo 1.png";
import hamburgerr from "../assets/hambur.svg";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(true);

  return (
    <>
      <div className="text-white py-4 flex justify-between sm:items-center lg:px-28">
        <img src={logo} alt="logo" className="max-w-[80px]" />

        <button
          className="cursor-pointer sm:hidden"
          onClick={() => setHamburger(hamburger ? false : true)}>
          <img
            src={hamburgerr}
            alt="hamburger"
            className="hover:scale-105 transition scale-125"
          />
        </button>
        <nav
          className={`bg-dark h-screen w-full fixed top-0 left-0 z-[55] ${
            hamburger ? "hidden" : null
          } sm:flex sm:relative sm:bg-transparent sm:h-0 sm:justify-end`}>
          <span
            className="fixed right-4 top-8 text-xl text-white cursor-pointer sm:hidden"
            onClick={() => setHamburger(hamburger ? false : true)}>
            ❌
          </span>
          <ul className="flex flex-wrap h-screen justify-center items-center sm:flex-nowrap sm:h-0">
            <li className="w-full text-center text-white font-poppins">
              <a
                href="#home"
                className="border py-2 px-4 rounded-lg sm:border-none"
                onClick={() => setHamburger(hamburger ? false : true)}>
                Home
              </a>
            </li>
            <li className="w-full text-center text-white font-poppins">
              <a
                href="#about"
                className="border py-2 px-4 rounded-lg sm:border-none"
                onClick={() => setHamburger(hamburger ? false : true)}>
                About
              </a>
            </li>
            <li className="w-full text-center text-white font-poppins">
              <a
                href="#skills"
                className="border py-2 px-4 rounded-lg sm:border-none"
                onClick={() => setHamburger(hamburger ? false : true)}>
                Skills
              </a>
            </li>
            <li className="w-full text-center text-white font-poppins">
              <a
                href="#projects"
                className="border py-2 px-4 rounded-lg sm:border-none"
                onClick={() => setHamburger(hamburger ? false : true)}>
                Projects
              </a>
            </li>
            <li className="w-full text-center text-white font-poppins">
              <a
                href="#contact"
                className="border py-2 px-4 rounded-lg sm:border-none"
                onClick={() => setHamburger(hamburger ? false : true)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
