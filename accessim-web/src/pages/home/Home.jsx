import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Accesibility_tools from "../../components/Accessibility_tools";



const Home = () => {
    return (
        <div class=" flex flex-col items-center  dark:bg-slate-950 bg-orange-100 mx-auto py-8 px-4">
            <Navbar />
            <main class="flex flex-col items-center ">
            <section class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-8 px-4 ">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400"> 
                        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bienvenido a Accessim</h1>
                        <p class="mb-4 font-bold">Aqui encontraras información sobre la accesibilidad en los locales de tu ciudad.</p>
                    </div> 
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img src="src\assets\accessim-logo.png"></img>
                        <div class="bg-white dark:bg-gray-900 items-center py-8 px-4 mx-auto max-w-screen-xl">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">¿Queres que tu empresa aparezca en nuestro mapa?</h2>
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Registrate
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
                    </div>
                </div>    
            </section>
            <section class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-8 px-4">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div>
                        <img src="src\assets\mappage.png"></img>
                    </div>
                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Busca y localiza puntos de interés accesibles</h1>
                        <p class="mb-4 font-bold">Accessim te permite localizar establecimientos que cumplan con los requisitos que buscas. Encontrarás cualquier establecimiento adaptado a tus necesidades. Las personas con discapacidad (motora, auditiva, visual) tienen necesidades especiales, pero no son los unicos e necesitar información sobre accesibilidad.</p>
                        <p class="mb-4 font-bold">Hay otras personas con otras necesidades, como vegetarianos o veganos, personas que tengan mascotas o bebés, personas con alergia alimenticia, o cualquier otra barrera que impida que accedan a lo mismo que otra persona a su lado.</p>
                    </div>
                </div>
                
            </section>
            <section class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-8 px-4">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Accedé de manera rápida y sencilla</h1>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div class="flex flex-row items-center gap-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <img src="src\assets\register.svg"></img>
                            <p class="mb-4 font-bold">Registrate</p>
                        </div>
                        <div class="flex flex-row items-center gap-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <img src="src\assets\categorias.svg"></img>
                            <p class="mb-4 font-bold">Filtra las categorías que buscas y necesidades que tenes</p>
                        </div> 
                        <div class="flex flex-row items-center gap-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <img src="src\assets\location-sharp.svg"></img>
                            <p class="mb-4 font-bold">Encontrá el lugar que mas se adapte a lo que necesitas</p>
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