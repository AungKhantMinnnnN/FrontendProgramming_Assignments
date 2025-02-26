import React from "react";
import HeroCatImg from "../public/hero-cat-img.jpg"

const Hero = () => {
    return (
      <section className="bg-amber-100 min-h-screen flex items-center justify-center flex-col">
        <div className="max-w-7xl w-full border-6 border-orange-400 shadow-lg rounded-full bg-gray-200 p-4">
          <div className="flex flex-col md:flex-row items-center gap-10 p-10">
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
              <img
                src={HeroCatImg}
                alt="Cute cat"
                className="relative w-full rounded-lg transition-transform duration-300 mix-blend-multiply h-150 w-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero;