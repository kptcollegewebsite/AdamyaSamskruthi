import React from "react";

const HeroSections = () => {
  const handleCopy = () => {
    const text = "npx prisma@latest init --db";
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <>
      <section className="relative flex flex-col items-center bg-gradient-to-b from-black to-[#1A0033] text-white pb-16 text-sm">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridPatternBg.svg"
          alt="hero-bg"
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        />
        <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
          {/* LOGO */}
          <a href="#">
            {/* Your SVG Logo Here */}
            <svg>...</svg>
          </a>

          {/* MENU */}
          <div
            id="menu"
            className="max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:w-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 font-medium"
          >
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <div className="relative group flex items-center gap-1 cursor-pointer">
              <span>Products</span>
              <div className="absolute bg-slate-900 font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-44 group-hover:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="hover:translate-x-1 hover:text-slate-500 transition-all"
                >
                  Templates
                </a>
                <a
                  href="#"
                  className="hover:translate-x-1 hover:text-slate-500 transition-all"
                >
                  UI Components
                </a>
                <a
                  href="#"
                  className="hover:translate-x-1 hover:text-slate-500 transition-all"
                >
                  Mobile Apps
                </a>
                <a
                  href="#"
                  className="hover:translate-x-1 hover:text-slate-500 transition-all"
                >
                  Web Apps
                </a>
              </div>
            </div>
            <a href="#" className="hover:text-gray-300">
              Stories
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <button className="md:hidden bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition">
              Sign up
            </button>
            <button
              id="close-menu"
              className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
            ></button>
          </div>

          <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-medium transition">
            Sign up
          </button>

          <button
            id="open-menu"
            className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
          ></button>
        </nav>

        {/* Community Avatar */}
        <div className="flex flex-wrap items-center justify-center p-1.5 mt-32 rounded-full border border-indigo-900 text-xs">
          <div className="flex items-center">
            <img
              className="size-7 rounded-full border-3 border-white"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="user1"
            />
            <img
              className="size-7 rounded-full border-3 border-white -translate-x-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="user2"
            />
            <img
              className="size-7 rounded-full border-3 border-white -translate-x-4"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50"
              alt="user3"
            />
          </div>
          <p className="-translate-x-2">Join community of 1m+ founders</p>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl text-center font-medium max-w-3xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
          Build. Launch. Scale. Without the complexity.
        </h1>
        <p className="text-slate-100 md:text-base max-md:px-2 text-center max-w-xl mt-3">
          A high-performance, serverless Postgres database that helps you ship
          fast and scale without limits.
        </p>

        {/* Get Started Button */}
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 mt-8 rounded-full transition">
          <span>Get started for free</span>
        </button>

        {/* Code Snippet Copy Box */}
        <div className="bg-gradient-to-t from-indigo-900 to-slate-600 p-px rounded-md mt-8">
          <div className="flex items-center gap-4 bg-black rounded-md px-4 py-3">
            $ <span id="copy-text">npx prisma@latest init --db</span>
            <button id="copy-button" onClick={handleCopy}></button>
          </div>
        </div>

        {/* Marquee Section Placeholder */}
        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-16">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#140029] to-transparent"></div>
          <div className="marquee-inner flex will-change-transform min-w-[200%]">
            <div className="flex py-4" id="logo-container">
              {/* Add logos here */}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#140029] to-transparent"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSections;
