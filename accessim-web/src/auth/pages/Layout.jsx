import Accesibility_tools from "../../components/Accessibility_tools";
import { Title } from "../../components/ui/Title";

export const Layout = ({ title, children }) => {
  return (
    <div className="flex min-h-screen bg-[url('/src/assets/DreamShaper_v7_cities_and_accesiblity_0.jpg')] bg-cover text-gray-300 flex-col gap-6 justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm opacity-100 ">
        <img
          className="mx-auto h-32 w-auto fill-white "
          src="/src/assets/accessim_logo_white.png"
          alt="Accesim"
        />

        <Title>{title}</Title>
      </div>
      <div className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-4 dark:bg-slate-800 rounded-lg">
        {children}
      </div>
      <Accesibility_tools />
    </div>
  );
};
