import React, { useEffect, useState } from "react";
import Logo from "../public/pet-heaven-logo.png"
import { Link } from "@tanstack/react-router";

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
              className={`text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0 ${active === "Home" ? "underline" : ""}`}
              onClick={() => setActive("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className={`text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0 ${active === "AboutUs" ? "underline" : ""}`}
              onClick={() => setActive("AboutUs")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Adopt"
              className={`text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0 ${active === "Adopt" ? "underline" : ""}`}
              onClick={() => setActive("Adopt")}
            >
              Adopt A Pet
            </Link>
          </li>
          <li>
            <Link
              to="/Donate"
              className={`text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0 ${active === "Donate" ? "underline" : ""}`}
              onClick={() => setActive("Donate")}
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`text-black hover:text-gray-500 cursor-pointer transition-transform duration-150 focus:scale-0 active:scale-0 ${active === "ContactUs" ? "underline" : ""}`}
              onClick={() => setActive("ContactUs")}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;