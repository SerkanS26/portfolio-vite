import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <section
      id="navbar"
      className="px-4 py-6 bg-dark text-light w-full sticky top-0 z-50 ease-in duration-300 shadow-md shadow-slate-700 md:px-14"
    >
      <nav className="flex flex-col justify-between container mx-auto md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <div id="navbar-logo">
            <a
              href="/"
              className="text-2xl font-semibold hover:text-primary ease-in duration-200"
            >
              Serkan Safran
            </a>
          </div>

          <div className="md:hidden">
            {!isMobileMenu && (
              <div
                className="cursor-pointer hover:text-primary ease-in duration-200
              "
                onClick={() => setIsMobileMenu((prev) => !prev)}
              >
                <FaBars className="text-3xl" />
              </div>
            )}

            {isMobileMenu && (
              <div
                className="cursor-pointer hover:text-primary"
                onClick={() => setIsMobileMenu((prev) => !prev)}
              >
                <FaTimes className="text-3xl" />
              </div>
            )}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="hidden md:block">
          <ul className="flex justify-evenly items-center gap-10 text-xl font-semibold">
            <li className=" hover:bg-primary rounded-md p-2 ease-in duration-200">
              <a href="#hero">Home</a>
            </li>
            <li className=" hover:bg-primary rounded-md p-2 ease-in duration-200">
              <a href="#about">About</a>
            </li>
            <li className=" hover:bg-primary rounded-md p-2 ease-in duration-200">
              <a href="#projects">Projects</a>
            </li>
            <li className=" hover:bg-primary rounded-md p-2 ease-in duration-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMobileMenu && (
          <div className="md:hidden">
            <ul className="py-4 flex flex-col justify-center items-center gap-4 text-xl font-semibold">
              <li
                className=" hover:bg-primary rounded-md p-2 ease-in duration-200"
                onClick={() => setIsMobileMenu((prev) => !prev)}
              >
                <a href="#hero">Home</a>
              </li>
              <li
                className=" hover:bg-primary rounded-md p-2 ease-in duration-200"
                onClick={() => setIsMobileMenu((prev) => !prev)}
              >
                <a href="#about">About</a>
              </li>

              <li
                className=" hover:bg-primary rounded-md p-2 ease-in duration-200"
                onClick={() => setIsMobileMenu((prev) => !prev)}
              >
                <a href="#projects">Projects</a>
              </li>
              <li
                className=" hover:bg-primary rounded-md p-2 ease-in duration-200"
                onClick={() => setIsMobileMenu((prev) => !prev)}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
