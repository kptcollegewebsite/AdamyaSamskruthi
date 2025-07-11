import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="/logo.png"
              alt="Adamya Samskruthi Logo"
              className="w-10 h-10 rounded-full bg-red-500 p-1"
            />
            <span className="ml-3 text-xl">Adamya Samskruthi</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Fostering cultural values and empowering children through education
            and service.
          </p>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* About Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Our Mission</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Pancha Tatva
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Core Values</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Swami Vivekananda Vision
                </a>
              </li>
            </nav>
          </div>

          {/* Programs */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              PROGRAMS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Ramarajya</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Sadhaka Parichaya Varga
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Raksha Bandhana
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Kargil Celebration
                </a>
              </li>
            </nav>
          </div>

          {/* Activities */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ACTIVITIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Workshops</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Temple Cleaning
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Children Camps
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Cultural Events
                </a>
              </li>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTACT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Email: contact@adamya.org
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Phone: +91 98765 43210
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Bengaluru, Karnataka
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Follow on Instagram
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Adamya Samskruthi —
            <span className="text-gray-600 ml-1">
              Empowering children through Dharma & culture
            </span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500" href="#">
              <i className="fab fa-facebook-f w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <i className="fab fa-twitter w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <i className="fab fa-instagram w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <i className="fab fa-linkedin-in w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
