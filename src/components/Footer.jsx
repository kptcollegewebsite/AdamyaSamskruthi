import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold transition-colors"
      : "text-gray-600 hover:text-gray-800 transition-colors";

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and Description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img
              src="/logo.png"
              alt="Adamya Samskruthi Logo"
              className="w-10 h-10 bg-red-100 p-0"
            />
            <span className="ml-3 text-xl">Adamya Samskruthi</span>
          </NavLink>
          <p className="mt-2 text-sm text-gray-500">
            Fostering cultural values and empowering children through education
            and service.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* ABOUT */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <NavLink to="/about" className={linkClass}>
                  Our Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/about#pancha-tatva" className={linkClass}>
                  Pancha Tatva
                </NavLink>
              </li>
              <li>
                <NavLink to="/about#core-values" className={linkClass}>
                  Core Values
                </NavLink>
              </li>
              <li>
                <NavLink to="/about#vivekananda" className={linkClass}>
                  Swami Vivekananda Vision
                </NavLink>
              </li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              PROGRAMS
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <NavLink to="/programs#ramarajya" className={linkClass}>
                  Ramarajya
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs#spv" className={linkClass}>
                  Sadhaka Parichaya Varga
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs#raksha-bandhana" className={linkClass}>
                  Raksha Bandhana
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs#kargil" className={linkClass}>
                  Kargil Celebration
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ACTIVITIES */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ACTIVITIES
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <NavLink to="/workshops" className={linkClass}>
                  Workshops
                </NavLink>
              </li>
              <li>
                <NavLink to="/workshops#temple-cleaning" className={linkClass}>
                  Temple Cleaning
                </NavLink>
              </li>
              <li>
                <NavLink to="/workshops#camps" className={linkClass}>
                  Children Camps
                </NavLink>
              </li>
              <li>
                <NavLink to="/workshops#events" className={linkClass}>
                  Cultural Events
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTACT
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="mailto:adamyasamskruthi@gmail.com"
                >
                  adamyasamskruthi@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="tel:+919876543210"
                >
                  +91 96060 89600
                </a>
              </li>
              <li>
                <p className="text-gray-600">Bengaluru, Karnataka</p>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with social icons */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © Copyright All Rights Reserved {new Date().getFullYear()},
            <span className="text-gray-600 ml-1">Adamya Samskruthi</span>
          </p>

          <p className="text-gray-500 text-sm text-center sm:text-left">
            Maintained by —
            <span className="text-gray-600 ml-1 hover:text-red-600 cursor-pointer">
              Swasyaha Solutions{" "}
            </span>
          </p>

          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-red-600 text-l"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-red-600 text-l"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-red-600 text-l"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-red-600 text-l"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
