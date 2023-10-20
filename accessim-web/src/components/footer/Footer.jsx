import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-white 
           shadow dark:bg-slate-950 w-full"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://github.com/AngelLC18/ProyectoMuniNQN"
            className="hover:underline"
          >
            AccesSim™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
