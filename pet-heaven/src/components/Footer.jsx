import { Link } from "@tanstack/react-router";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-2">Pet Heaven</h2>
            <p className="text-sm">
              Life is easier with a furry best friend by your side.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Explore</h2>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Adopt A Pet
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p>20 Sin Ming Road, Singapore</p>
            <p>(+65)80905438</p>
            <p>PetHeaven_AnimalRescue@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p>Copyright © Pet Heaven 2025. All rights reserved.</p>
        </div>
      </footer>
    );
}

export default Footer;