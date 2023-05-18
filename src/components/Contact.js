import React from "react";

function Contact(props) {
  return (
    <div id="contact" className="bg-black text-white">
      <div className="container mt-5 pt-5 pb-6 px-4">
        <h3 className="font-poppins text-2xl font-bold text-center lg:text-3xl">
          Contact Me
        </h3>
        <form className="font-roboto text-gray-900">
          <div className="mt-4 sm:flex sm:justify-center">
            <input
              type="text"
              className="w-full p-2 rounded-lg sm:w-10/12 md:w-1/2 lg:w-1/3"
              placeholder="Name"
              name="name"
              id="name"
            />
          </div>
          <div className="mt-4 sm:flex sm:justify-center">
            <input
              type="email"
              className="w-full p-2 rounded-lg sm:w-10/12 md:w-1/2 lg:w-1/3"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <div className="mt-4 sm:flex sm:justify-center">
            <input
              type="text"
              className="w-full p-2 rounded-lg sm:w-10/12 md:w-1/2 lg:w-1/3"
              placeholder="Message"
              name="text"
              id="text"
            />
          </div>
          <div className="mt-4 sm:flex sm:justify-center">
            <button className="bg-primary w-full p-2 rounded-lg text-white sm:w-10/12 md:w-1/2 lg:w-1/3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
