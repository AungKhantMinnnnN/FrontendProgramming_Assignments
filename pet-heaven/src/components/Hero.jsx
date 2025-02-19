import React from "react";
import HeroCatImg from "../public/hero-cat.webp"

const Hero = () => {
    return (
      <section className="bg-amber-100 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
          {/* Left side content */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Adopt A <br /> Furry Friend
            </h1>

            <p className="text-gray-600 mt-4">
              Life is easier with a furry best friend by your side. Find your
              new pet from our animal shelters.
            </p>

            <div className="mt-6 flex items-center bg-white rounded-full shadow-md p-2 w-full max-w-md">
              <input
                type="text"
                placeholder="Choose Your Location"
                className="flex-1 px-4 py-2 outline-none bg-transparent text-gray-600"
              />
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-full transition">
                Search
              </button>
            </div>
          </div>

          {/* Right side content images and shapes*/}
          <div className="relative w-full max-w-lg">
            <div className="absolute -top-10 left-10 w-40 h-40 bg-orange-400 rounded-full opacity-50 transition-transform hover:rotate-12 hover:scale-105"></div>
            <div className="absolute top-10 right-0 w-40 h-40 bg-blue-500 rounded-tl-full rounded-br-full opacity-50 transition-transform hover:-rotate-12 hover:scale-105"></div>

            <img
              src={HeroCatImg}
              alt="Cute Dog"
              className="relative w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl mix-blend-multiply"
            />
          </div>
        </div>
      </section>
    );
}

export default Hero;