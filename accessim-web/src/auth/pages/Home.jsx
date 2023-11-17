import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Accesibility_tools from "../../components/Accessibility_tools";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center bg-[url('/src/assets/uno.jpg')] mx-auto py-12 px-4">
      <Navbar />
      <main className="flex flex-col items-center justify-center m-4 gap-4">
        <section className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-8 px-4  ">
          <div className="gap-16 items-start py-8 px-4 mx-auto max-w-screen-xl grid md:grid-cols-2 md:py-16 md:px-6">
            <div className="font-light h-[200px] text-gray-500 sm:text-lg dark:text-gray-400">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Bienvenido a Accessim
              </h1>
              <p className="mb-4 font-bold">
                Aqui encontraras información sobre la accesibilidad en los
                locales de tu ciudad.
              </p>
            </div>
            <div className="grid grid-rows-2 md:grid-cols-2  mt-8">
              <img src="/src/assets/accessim_logo_black.png" />
              <div className="bg-white dark:bg-gray-800 items-center py-8 px-4 mx-auto max-w-screen-xl">
                <div className="w-56 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                  <div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      ¿Queres que tu empresa aparezca en nuestro mapa?
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate("/auth/register")}
                      className="inline-flex items-center px-3 py-2 text-xs font-medium text-center rounded-lg text-white bg-indigo-800 hover:bg-indigo-900 "
                    >
                      Registrate
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => navigate("/auth/login")}
                      className="inline-flex items-center px-3 py-2 text-xs font-medium text-center rounded-lg text-white bg-indigo-800 hover:bg-indigo-900 "
                    >
                      Inicia sesión
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-8 px-4">
          <div className="gap-16 items-center md:py-8 md:px-4 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="h-[575px] w-[312px] m-auto">
              <img
                src="../../src/assets/mappage.png"
                className="h-[575px] w-[312px]"
                alt="Map"
              />
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Busca y localiza puntos de interés accesibles
              </h1>
              <p className="mb-4 font-bold">
                Accessim te permite localizar establecimientos que cumplan con
                los requisitos que buscas. Encontrarás cualquier establecimiento
                adaptado a tus necesidades. Las personas con discapacidad
                (motora, auditiva, visual) tienen necesidades especiales, pero
                no son los unicos e necesitar información sobre accesibilidad.
              </p>
              <p className="mb-4 font-bold">
                Hay otras personas con otras necesidades, como vegetarianos o
                veganos, personas que tengan mascotas o bebés, personas con
                alergia alimenticia, o cualquier otra barrera que impida que
                accedan a lo mismo que otra persona a su lado.
              </p>
            </div>
          </div>
        </section>
        <section className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-8 px-4">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Accedé de manera rápida y sencilla
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="flex flex-row items-center gap-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <div className="bg-orange-500 rounded-full items-center px-2 py-2">
                  <img src="../../src\assets\newaccount.svg"></img>
                </div>
                <button
                  onClick={() => navigate("/auth/register")}
                  className="mb-4 font-bold"
                >
                  Registrate
                </button>
              </div>
              <div className="flex flex-row items-center gap-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <div className="bg-orange-500 rounded-full items-center px-2 py-2">
                  <img src="../../src\assets\categorias.svg"></img>
                </div>
                <p className="mb-4 font-bold">
                  Filtra las categorías que buscas y necesidades que tenes
                </p>
              </div>
              <div className="flex flex-row items-center gap-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <div className="bg-orange-500 rounded-full items-center px-2 py-2">
                  <img src="../../src\assets\location-sharp.svg"></img>
                </div>
                <p className="mb-4 font-bold">
                  Encontrá el lugar que mas se adapte a lo que necesitas
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Accesibility_tools />
    </div>
  );
};
export default Home;
