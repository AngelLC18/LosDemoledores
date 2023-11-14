import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white  dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/ " className="mr-4 hover:underline md:mr-6">
                {" "}
                Inicio
              </Link>
            </li>
            <Link to="/ " className="mr-4 hover:underline md:mr-6">
              {" "}
              Locales
            </Link>
            <Link to="/ " className="mr-4 hover:underline md:mr-6">
              {" "}
              Unirse
            </Link>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://github.com/AngelLC18/ProyectoMuniNQN"
            className="hover:underline"
          >
            Muni Examen EPET 20™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
