import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkMode from "../darkmode/DarkMode";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const navbar = document.querySelector("nav");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navbar.classList.add("bg-white", "shadow-md", "dark:bg-gray-950");
      } else {
        navbar.classList.remove("bg-white", "shadow-md", "dark:bg-gray-950");
      }
    });
  }, []);
  return (
    <nav className="bg-transparent dark:bg-slate-900 fixed w-full z-20 top-0 left-0 transition-all">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="http://epet20.com.ar/">
          <i className="fa-solid fa-code dark:text-white"></i>
        </a>
        <div className="flex md:order-2">
          <DarkMode />
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? "flex" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border w-full  bg-gray-50 md:bg-transparent rounded-md md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded-2xl md:bg-white md:bg-opacity-5 hover:bg-gray-100 md:hover:scale-105 md:hover:text-blue-700 md:p-2 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-20 dark:hover:text-white md:dark:hover:scale-105  dark:border-gray-700"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded-2xl md:bg-white md:bg-opacity-5 hover:bg-gray-100 md:hover:scale-105 md:hover:text-blue-700 md:p-2 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-20  dark:hover:text-white md:dark:hover:scale-105  dark:border-gray-700"
              >
                Locales
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded-2xl md:bg-white md:bg-opacity-5 hover:bg-gray-100 md:hover:scale-105 md:hover:text-blue-700 md:p-2 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-opacity-20 dark:hover:text-white md:dark:hover:scale-105  dark:border-gray-700"
              >
                Unirse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
