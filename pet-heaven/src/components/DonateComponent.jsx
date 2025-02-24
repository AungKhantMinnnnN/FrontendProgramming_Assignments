import { Link } from "@tanstack/react-router";

const DonateComponent = () => {
  return (
    <section className="bg-white flex items-center justify-center pl-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Donate To Our Animal Shelter
          </h1>
          <p className="text-gray-600 mt-4">
            We believe that every animal deserves a safe and happy life. With
            that goal in mind, we have created animal shelters across the
            country to vaccinate, rescue, and foster stray cats and dogs.
          </p>
          <div className="mt-6">
            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white">
              <Link to="/">Donate →</Link>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-md">
          <img
            src="/src/public/hero-cat-img.jpg"
            alt="Cat"
            className="relative w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DonateComponent;
