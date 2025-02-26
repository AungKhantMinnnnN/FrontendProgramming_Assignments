import { Link } from "@tanstack/react-router";

const ContactUsComponent = () => {
    return (
      <section className="bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center p-6">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src="/src/public/hero-cat-img.jpg"
              alt="Cute cat"
              className="relative w-96 rounded-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left p-6">
            <h1 className="text-4xl font-bold mb-4">
              Adopt Pets And <br /> Save Their Lives
            </h1>

            <p className="text-gray-600 mb-6">
              Why bother shopping for pets when thousands of homeless puppies
              and <br />
              kittens are looking for a family? Adopt rescued animals from our
              shelters <br />
              and make a change in the lives of animals in your area.
            </p>

            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white">
              <Link to="/">Contact Us →</Link>
            </button>
          </div>
        </div>
      </section>
    );
}

export default ContactUsComponent;