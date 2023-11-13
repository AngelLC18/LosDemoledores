import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkMode from "../../../../components/darkmode/DarkMode";
import { Text } from "../../../../components";
import { useAuth } from "../../../../hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const { displayName, photoURL, startLogout } = useAuth();
  const avatar = photoURL === null ? "/src/assets/photoUser.jpg" : photoURL;

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
    <nav className="bg-transparent dark:bg-slate-900 fixed w-full z-[60] top-0 left-0 transition-all">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 relative">
        <a className="ml-12 md:ml-0" href="http://epet20.com.ar/">
          <i className="fa-solid fa-code dark:text-white"></i>
        </a>
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
        <div className="flex md:order-2">
          <DarkMode />
          <div className="flex flex-col relative justify-center items-center">
            <button
              className={`w-10 h-10 text-gray-200 rounded-full ${
                sidebarOpen ? "invisible" : "visible"
              }`}
              onClick={handleSidebarToggle}
            >
              <img
                className="w-10 h-10 text-gray-200 rounded-full"
                src={avatar}
                alt={`Avatar ${displayName}`}
              />
            </button>
            <div
              className={`fixed top-0 right-0 p-4 w-64 h-full z-40 bg-gray-50 rounded-l-lg dark:bg-gray-800 transition-transform transform ${
                sidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {sidebarOpen && (
                <div className="flex items-center space-x-2">
                  <button onClick={handleSidebarToggle}>
                    <img
                      className="w-10 h-10 text-gray-200 rounded-full"
                      src={avatar}
                      alt={`Avatar ${displayName}`}
                    />
                  </button>
                  <Text>{displayName}</Text>
                </div>
              )}
              <div className="flex flex-col mt-3  items-start m-0">
                {displayName && (
                  <Link
                    className="dark:text-white w-full rounded-md p-1 px-2 text-start hover:bg-gray-200 dark:hover:bg-slate-700"
                    to={`/user/${displayName}`}
                  >
                    Ver perfil
                  </Link>
                )}
                <button
                  className="dark:text-white w-full rounded-md p-1 px-2 text-start hover:bg-gray-200 dark:hover:bg-slate-700"
                  onClick={startLogout}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            className=" absolute top-3 left-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Abrir menu</span>
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
      </div>
    </nav>
  );
};

export default Navbar;
