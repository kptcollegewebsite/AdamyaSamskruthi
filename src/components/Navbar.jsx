import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/panchatatva", label: "Pancha Tatva" },
    { to: "/events", label: "Activities & Events" },
    { to: "/workshops", label: "Workshops" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`text-gray-600 body-font sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-5 overflow-x-hidden">
        {/* Logo Section */}
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <img
            src="/images/logo.png"
            alt="Adamya Samskruthi Logo"
            className="w-10 h-10 object-cover"
          />
          <span className="ml-3 text-xl font-semibold whitespace-nowrap">
            Adamya Samskruthi
          </span>
        </NavLink>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:ml-auto w-full md:w-auto mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-5 text-base overflow-x-hidden`}
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all duration-200 ease-in hover:text-red-600 ${
                  isActive
                    ? "text-red-500 font-semibold underline underline-offset-4"
                    : "text-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Button */}
          <NavLink to="/donate" onClick={() => setMenuOpen(false)}>
            <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base whitespace-nowrap">
              Donate/Volunteer
              <FaArrowRight className="ml-2" />
            </button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
