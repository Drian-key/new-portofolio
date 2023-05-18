import React from "react";
import profile from "../assets/profile.png";

// icon
import bootstrap from "../assets/icon/bootstrap.svg";
import react from "../assets/icon/react.svg";
import tailwindcss from "../assets/icon/tailwindcss.svg";
import wordpress from "../assets/icon/wordpress.svg";
import php from "../assets/icon/php-logo-only-letter-2.svg";
import laravel from "../assets/icon/laravel-2.svg";
import javascript from "../assets/icon/javascript-1.svg";
import html from "../assets/icon/html-1.svg";
import css from "../assets/icon/css-3.svg";

import globe from "../assets/icon/globe.svg";

// Portofolion
import japanstyle from "../assets/portofolio/japan-style.vercel.app_.png";
import ababdotcom from "../assets/portofolio/ababdotcom.vercel.app_.png";
import drbookshelf from "../assets/portofolio/drbookshelf.vercel.app_.png";
import lahshishop from "../assets/portofolio/lahshishop.vercel.app_.png";
import tchofilm from "../assets/portofolio/tchofilm.vercel.app_.png";

function Main(props) {
  let icons = [
    bootstrap,
    react,
    tailwindcss,
    wordpress,
    javascript,
    php,
    laravel,
  ];

  return (
    <div className="bg-dark text-white" id="hero">
      <div id="about" className="mt-10 container px-4 lg:px-28">
        <h2 className="font-poppins text-2xl font-bold text-center lg:text-3xl">
          About Me
        </h2>
        <div className="md:flex md:items-center">
          <div className="mt-5 w-3/4 mx-auto rounded-xl overflow-clip sm:w-2/4 md:w-2/5 lg:w-1/4">
            <img src={profile} alt="profile" />
          </div>
          <div className="md:w-3/5 lg:w-3/4">
            <p className="font-roboto md:text-lg">
              Hello, my name is{" "}
              <span className="font-bold hover:underline">
                Riski Drian Pratama
              </span>
              ! I am an 18-year-old web programmer with a strong passion for
              becoming a skilled frontend developer. My hobbies include reading
              and watching videos. I am committed to continuously learning and
              keeping up with the latest advancements in web technology. If you
              have any exciting projects or collaboration opportunities, I am
              ready to contribute and learn from industry professionals. I am
              confident that with hard work and a strong commitment to learning,
              I will achieve my dream of becoming a successful web programmer.
              Thank you for your attention, and I look forward to creating
              exceptional and captivating web experiences!
            </p>
            <div id="soccial" className="flex gap-4 mt-2 md:text-lg">
              <a
                href="https://github.com/drian-key"
                className="border rounded-lg px-2 py-1"
                target="_blank"
                rel="noreferrer">
                Github
              </a>
              <a
                href="https://www.instagram.com/driannaird/"
                className="border rounded-lg px-2 py-1"
                target="_blank"
                rel="noreferrer">
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@driantcho"
                className="border rounded-lg px-2 py-1"
                target="_blank"
                rel="noreferrer">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="mt-10 bg-[#121212] px-4 pb-10 pt-8">
        <div className="container">
          <h2 className="font-poppins text-2xl font-bold text-center lg:text-3xl">
            My Skills
          </h2>
          <div className="flex flex-wrap mt-5 gap-4 justify-center">
            {icons.map((icon) => (
              <div className="w-1/5 flex p-2 rounded-xl cursor-pointer bg-slate-800 hover:dark sm:w-[15%] md:w-[10%] lg:w-[5%]">
                <img src={icon} alt={icon} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="projects" className="mt-10 container px-4 lg:px-28 lg:mb-10">
        <h2 className="font-poppins text-2xl font-bold text-center lg:text-3xl">
          My Projects
        </h2>
        <div className="flex flex-wrap mt-5">
          <div className="w-full mb-5 md:mb-0 md:w-1/2 lg:w-1/3 md:p-3">
            <div className="bg-slate-800 rounded-xl overflow-clip">
              <div className="relative">
                <img
                  src={japanstyle}
                  alt="japanstyle"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute p-4 flex gap-2 justify-end bottom-0 right-0">
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={html} alt="html" />
                  </div>
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={css} alt="css" />
                  </div>
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={javascript} alt="javascript" />
                  </div>
                </div>
              </div>
              <div className="p-4 pb-10">
                <h3 className="mb-2 font-bold text-lg">
                  Japan Style Landing Page
                </h3>
                <p className="text-gray-300">
                  I created a Japanese-themed website landing page using only
                  vanilla CSS and JavaScript.
                </p>
                <div className="float-right hover:animate-pulse transition duration-500 ease-in-out">
                  <a href="https://japan-style.vercel.app/">
                    <img src={globe} alt="view web" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-5 md:mb-0 md:w-1/2 lg:w-1/3 md:p-3">
            <div className="bg-slate-800 rounded-xl overflow-clip">
              <div className="relative">
                <img
                  src={drbookshelf}
                  alt="drbookshelf"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute p-4 flex gap-2 justify-end bottom-0 right-0">
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={html} alt="html" />
                  </div>
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={css} alt="css" />
                  </div>
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={javascript} alt="javascript" />
                  </div>
                </div>
              </div>
              <div className="p-4 pb-10">
                <h3 className="mb-2 font-bold text-lg">Dr Bookshelf Apps</h3>
                <p className="text-gray-300">
                  I created a book logging web application while studying
                  intermediate web storage in JavaScript.
                </p>
                <div className="mb-4 float-right hover:animate-pulse transition duration-500 ease-in-out">
                  <a href="https://drbookshelf.vercel.app/">
                    <img src={globe} alt="view web" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-5 md:mb-0 md:w-1/2 lg:w-1/3 md:p-3">
            <div className="bg-slate-800 rounded-xl overflow-clip">
              <div className="relative">
                <img
                  src={ababdotcom}
                  alt="ababdotcom"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute p-4 flex gap-2 justify-end bottom-0 right-0">
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={bootstrap} alt="bootstrap" />
                  </div>
                </div>
              </div>
              <div className="p-4 pb-10">
                <h3 className="mb-2 font-bold text-lg">Ababdotcom</h3>
                <p className="text-gray-300">
                  I created a website for my friend using the Bootstrap
                  framework.
                </p>
                <div className="mb-4 float-right hover:animate-pulse transition duration-500 ease-in-out">
                  <a href="https://ababdotcom.vercel.app/">
                    <img src={globe} alt="view web" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mb-5 md:mb-0 md:w-1/2 lg:w-1/3 md:p-3">
            <div className="bg-slate-800 rounded-xl overflow-clip">
              <div className="relative">
                <img
                  src={lahshishop}
                  alt="lahshishop"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute p-4 flex gap-2 justify-end bottom-0 right-0">
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={html} alt="html" />
                  </div>
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={css} alt="css" />
                  </div>
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={javascript} alt="javascript" />
                  </div>
                </div>
              </div>
              <div className="p-4 pb-10">
                <h3 className="mb-2 font-bold text-lg">Lahshishop</h3>
                <p className="text-gray-300">
                  The marketplace-styled landing page that I created while
                  learning CSS grid.
                </p>
                <div className="mb-4 float-right hover:animate-pulse transition duration-500 ease-in-out">
                  <a href="https://drbookshelf.vercel.app/">
                    <img src={globe} alt="view web" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-5 md:mb-0 md:w-1/2 lg:w-1/3 md:p-3">
            <div className="bg-slate-800 rounded-xl overflow-clip">
              <div className="relative">
                <img
                  src={tchofilm}
                  alt="tchofilm"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute p-4 flex gap-2 justify-end bottom-0 right-0">
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={javascript} alt="javascript" />
                  </div>
                  <div className="w-[12%] flex bg-slate-200 p-1 rounded-lg">
                    <img src={bootstrap} alt="bootstrap" />
                  </div>
                </div>
              </div>
              <div className="p-4 pb-10">
                <h3 className="mb-2 font-bold text-lg">Tcho Film</h3>
                <p className="text-gray-300">
                  A movie search website that I created using a public API,
                  utilizing JavaScript and Bootstrap.
                </p>
                <div className="mb-4 float-right hover:animate-pulse transition duration-500 ease-in-out">
                  <a href="https://tchofilm.vercel.app/">
                    <img src={globe} alt="view web" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
