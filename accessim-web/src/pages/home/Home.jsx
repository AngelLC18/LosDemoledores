import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Accesibility_tools from "../../components/Accessibility_tools";



const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-text-section">
                <h1 className="home-title">Bienvenido a Accessim</h1>
                <p className="home-paragraph">Aqui encontraras información sobre la accesibilidad en los locales de tu ciudad.</p>
                <h1>Busca y localiza puntos de interés accesibles</h1>
                <p>Accessim te permite localizar establecimientos que cumplan con los requisitos que buscas. Encontrarás cualquier establecimiento adaptado a tus necesidades. Las personas con discapacidad (motora, auditiva, visual) tienen necesidades especiales, pero no son los unicos e necesitar información sobre accesibilidad.</p>
                <p>Hay otras personas con otras necesidades, como vegetarianos o veganos, personas que tengan mascotas o bebés, personas con alergia alimenticia, o cualquier otra barrera que impida que accedan a lo mismo que otra persona a su lado.</p>
                <h1>Accedé de manera rápida y sencilla</h1>
                <p>Registrate</p>
                <p>Filtra las categorías que buscas y necesidades que tenes</p>
                <h1>¿Quieres que tu empresa aparezca en nuestro mapa?</h1>
                <p>Unite</p>
            </div>
        </div>
    );
};
export default Home;