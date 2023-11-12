import Navbar from "../../components/navbar/NavBar";
import Accesibility_tools from "../../components/Accessibility_tools";

const Login = () => {
  return (
    <div className=" w-full h-screen grid grid-rows-3 dark:bg-slate-950 bg-orange-100">
      <Navbar />
      <main className="row-span-2 flex flex-col justify-center h-screen items-center">
        <div className="shadow-md dark:bg-slate-700 bg-white h-[600px] w-[75%] flex flex-row ">
          <form className="  bg-white dark:bg-slate-700 h-full w-[50%] p-5 flex flex-col items-center ">
            <div className="flex flex-row flex-wrap gap-4 justify-center ">
              <div className="w-56">
                <label className="relative cursor-text ">
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="h-11 w-56 bg-transparent pl-2 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                    id="usuario"
                  />
                  <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Usuario
                  </span>
                </label>
              </div>
              <div className="w-56">
                <label className="relative cursor-text ">
                  <input
                    type="text"
                    placeholder="Contraseña"
                    className="h-11 w-56 bg-transparent pl-2 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                    id="contraseña"
                  />
                  <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Contraseña
                  </span>
                </label>
              </div>
              <div className="flex items-center justify-center text-[15px] font-bold w-[68.5%]">
                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white py-2 px-6 rounded-md hover:bg-sky-600"
                >
                  Registrar
                </button>
              </div>
            </div>
          </form>
          <div className="h-full w-[50%] bg-indigo-500"></div>
        </div>
      </main>
      <Accesibility_tools />
    </div>
  );
};

export default Login;
