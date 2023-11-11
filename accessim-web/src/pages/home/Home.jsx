import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Accesibility_tools from "../../components/Accessibility_tools";



const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-text-section">
                <h1 className="home-title" class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight" >Bienvenido a Accessim</h1>
                <p className="home-paragraph" class="mt-6 text-xl leading-8 text-gray-700">Aqui encontraras información sobre la accesibilidad en los locales de tu ciudad.</p>
                <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Busca y localiza puntos de interés accesibles</h1>
                <p class="mt-6 text-xl leading-8 text-gray-700">Accessim te permite localizar establecimientos que cumplan con los requisitos que buscas. Encontrarás cualquier establecimiento adaptado a tus necesidades. Las personas con discapacidad (motora, auditiva, visual) tienen necesidades especiales, pero no son los unicos e necesitar información sobre accesibilidad.</p>
                <p class="mt-6 text-xl leading-8 text-gray-700">Hay otras personas con otras necesidades, como vegetarianos o veganos, personas que tengan mascotas o bebés, personas con alergia alimenticia, o cualquier otra barrera que impida que accedan a lo mismo que otra persona a su lado.</p>
                <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Accedé de manera rápida y sencilla</h1>
                <p class="mt-6 text-xl leading-8 text-gray-700">Registrate</p>
                <p class="mt-6 text-xl leading-8 text-gray-700">Filtra las categorías que buscas y necesidades que tenes</p>
                <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">¿Quieres que tu empresa aparezca en nuestro mapa?</h1>
                <a href="#" class="rounded-md bg-indigo-600 dark:bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Unite</a>
            </div>
        </div>
    );
};
export default Home;