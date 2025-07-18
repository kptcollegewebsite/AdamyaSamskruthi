import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-gray-600 body-font sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <img
            src="logo.png"
            alt="Adamya Samskruthi Logo"
            className="w-10 h-10 object-cover"
          />
          <span className="ml-3 text-xl font-semibold">Adamya Samskruthi</span>
        </NavLink>

        <nav
          aria-label="Main Navigation"
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
        >
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/panchatatva", label: "Pancha Tatva" },
            { to: "/events", label: "Activities & Events" },
            { to: "/workshops", label: "Workshops" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `mr-5 transition-all duration-200 ease-in hover:text-red-600 ${
                  isActive
                    ? "text-red-500 font-semibold underline underline-offset-4"
                    : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/donate">
          <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0">
            Donate/Volunteer
            <FaArrowRight className="ml-2" />
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
