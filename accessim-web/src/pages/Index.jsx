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
        
      </main>
      <Footer />
      <Accesibility_tools />
    </div>
  );
};

export default Index;
