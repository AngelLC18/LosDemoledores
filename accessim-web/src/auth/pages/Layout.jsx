import Accesibility_tools from "../../components/Accessibility_tools";
import { Title_auth } from "../../components/ui/Title_auth";
import Kick from "./components/Kick";
import { useState } from "react";
export const Layout = ({ title, children }) => {
  const [highContrast, setHighContrast] = useState(false);
  return (
    <div className="flex min-h-screen bg-[url('/src/assets/DreamShaper_v7_cities_and_accesiblity_0.jpg')] w-screen bg-cover text-gray-300 flex-col gap-6 justify-center items-center">
      <div className="bg-violet-900 dark:bg-slate-900  rounded-lg shadow-lg flex flex-col m-12 md:flex-row w-[60%]">
        <div className="mx-auto w-full max-w-sm opacity-100 m-3  ">
          <img
            className="mx-auto h-[150px] md:h-[400px] w-auto "
            src={
              highContrast
                ? "/src/assets/accessim_logo_white.png"
                : "/src/assets/accessim_logo_black.png"
            }
            alt="Accesim"
          />
        </div>
        <div className="flex flex-col gap-4 w-full sm:max-w-sm bg-white p-4 dark:bg-slate-800 rounded-r-lg">
          <Title_auth>{title}</Title_auth>
          {children}
        </div>
      </div>
      <Accesibility_tools onHighContrastChange={setHighContrast} />
      <Kick />
    </div>
  );
};
