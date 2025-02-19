import React, { useEffect, useState } from "react";
import Logo from "../public/pet-heaven-logo.png"
import { Link } from "@tanstack/react-router";

const Navbar = () => {

    const [isMenuItemSelected, setIsMenuItemSelected] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuItemSelected((prev) => (!prev));
    };

    useEffect(() => {
        const handleScrolling = () => {
            const currentY = window.scrollY;
            if(currentY < lastScrollY)
                setIsScrollingUp(true);
            else
                setIsScrollingUp(false);

            setLastScrollY(currentY);
        };

        window.addEventListener("scroll", handleScrolling);
        return () => window.removeEventListener("scroll", handleScrolling);
    }, [lastScrollY]);

    return (
      <nav className="bg-amber-100 py-4 px-8 flex items-center justify-between fixed top-0 left-0 w-full shadow-md z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="PetHeaven Logo" className="h-10" />
          <h1 className="text-xl font-bold text-gray-900">Pet Heaven</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0"
              onClick={toggleMenu}
            >
              Adopt A Pet
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0"
              onClick={toggleMenu}
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;