import Navbar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import Accesibility_tools from "../components/Accessibility_tools";

const Index = () => {
  const [usuario, setUsuario] = useState({
    usuario: "",
    nombre: "",
    apellido: "",
    contraseña: "",
    correo: "",
  });
  return (
    <div className=" w-full min-h-screen grid grid-rows-3 dark:bg-slate-950 bg-orange-100">
      <Navbar />
      <main className="row-span-2 flex flex-col justify-center min-h-screen items-center">
        <div className="shadow-md rounded-xl dark:bg-slate-700 bg-white h-[600px] w-[80%]  mt-4">
          <form className="  bg-white dark:bg-slate-700 h-full w-[50%] p-3 drop-shadow-lg rounded-xl  ">
            <div className="flex flex-row flex-wrap gap-4 p-2 justify-center">
              <div className="w-56">
                <label className="relative cursor-text ">
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="h-11 w-56 bg-transparent pl-2 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                    id="usuario"
                    onChange={(e) =>
                      setUsuario({ ...usuario, usuario: e.target.value })
                    }
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
              <div className=" w-56">
                <label className="relative cursor-text">
                  <input
                    id="nombre"
                    type="text"
                    placeholder="nombre"
                    className="h-11 w-56 bg-transparent pl-2 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                  />
                  <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Nombre
                  </span>
                </label>
              </div>
              <div className=" w-56">
                <label className="relative cursor-text">
                  <input
                    id="apellido"
                    type="text"
                    placeholder="apellido"
                    className="h-11 w-56 bg-transparent pl-2 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                  />
                  <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Apellido
                  </span>
                </label>
              </div>
              <div className=" w-56">
                <label className="relative cursor-text">
                  <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    className="h-11 w-56 bg-transparent pl-2 dark:text-white   border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                    autoComplete="off"
                  />
                  <span className="text-opacity-80 dark:text-white   dark:bg-slate-700 text-gray-600 bg-white absolute left-3 -top-[2px] px-1 transition duration-200 input-text">
                    Correo Electronico
                  </span>
                </label>
              </div>
              <div className="relative w-56 ">
                <select
                  className="border-black border-[1px] pl-2 rounded-[4px] outline-none border-opacity-30 bg-transparent  w-56 h-11 dark:bg-slate-700 dark:text-white text-gray-600 transition duration-200"
                  defaultValue="default"
                  id="genero"
                >
                  <option disabled value="default">
                    Seleccione un genero
                  </option>
                  <option value="MASCULINO">Masculino</option>
                  <option value="FEMENINO">Femenino</option>
                </select>
              </div>
              <div className="flex items-center justify-center w-[520px]">
                <button
                  type="submit"
                  className="ml-1 bg-sky-500 text-white py-2 px-6 rounded-md hover:bg-sky-600"
                >
                  Registrar
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="ml-1 bg-red-100 text-black py-2 px-6 rounded-md shadow-lg hover:bg-gray-100"
                >
                  Iniciar sesión con google
                  <i className="fa-brands fa-google m-2"></i>
                </button>
                <button
                  type="submit"
                  className="ml-1 bg-blue-800 text-white py-2 px-6 rounded-md shadow-lg hover:bg-blue-900"
                >
                  Iniciar sesión con facebook
                  <i className="fa-brands fa-facebook m-2"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <Accesibility_tools />
    </div>
  );
};

export default Index;
