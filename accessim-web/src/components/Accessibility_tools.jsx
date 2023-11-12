import React, { useState } from "react";
const Accesibility_tools = () => {
  // Define el estado para controlar si el desplegable está abierto o cerrado
  const [open, setOpen] = useState(false);

  // Define la función que cambia el valor de open al hacer clic en el botón
  const toggleOpen = () => {
    setOpen(!open);
  };

  // Define la función que aumenta el tamaño del texto al hacer clic en el botón
  const increaseTextSize = () => {
    // Obtiene todos los elementos del documento que tengan texto
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a"
    );
    // Recorre los elementos y aumenta su tamaño de fuente en un 10%
    textElements.forEach((element) => {
      // Obtiene el tamaño actual de fuente del elemento
      const currentFontSize = parseFloat(
        window.getComputedStyle(element).fontSize
      );
      // Calcula el nuevo tamaño de fuente aumentando el actual en un 10%
      const newFontSize = currentFontSize * 1.1;
      // Aplica el nuevo tamaño de fuente al elemento
      element.style.fontSize = `${newFontSize}px`;
    });
  };

  // Define la función que disminuye el tamaño del texto al hacer clic en el botón
  const decreaseTextSize = () => {
    // Obtiene todos los elementos del documento que tengan texto
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a"
    );
    // Recorre los elementos y disminuye su tamaño de fuente en un 10%
    textElements.forEach((element) => {
      // Obtiene el tamaño actual de fuente del elemento
      const currentFontSize = parseFloat(
        window.getComputedStyle(element).fontSize
      );
      // Calcula el nuevo tamaño de fuente disminuyendo el actual en un 10%
      const newFontSize = currentFontSize * 0.9;
      // Aplica el nuevo tamaño de fuente al elemento
      element.style.fontSize = `${newFontSize}px`;
    });
  };

  // Define la función que cambia el modo de color a escala de grises al hacer clic en el botón
  const grayscaleMode = () => {
    // Obtiene el elemento body del documento
    const body = document.body;
    // Aplica el filtro de escala de grises al elemento body
    body.style.filter = "grayscale(100%)";
  };

  // Define la función que cambia el modo de color a alto contraste al hacer clic en el botón
  const highContrastMode = () => {
    // Obtiene el elemento html del documento
    const html = document.documentElement;
    // Activa el modo oscuro añadiendo la clase dark al elemento html
    html.classList.add("dark");
    // Obtiene todos los elementos del documento que tengan la clase bg-white
    const whiteElements = document.querySelectorAll(".bg-white");
    // Recorre los elementos y les añade la clase dark:bg-black
    whiteElements.forEach((element) => {
      element.classList.add("dark:bg-black");
    });
  };

  // Define la función que cambia el modo de color a contraste negativo al hacer clic en el botón
  const negativeContrastMode = () => {
    // Obtiene el elemento body del documento
    const body = document.body;
    // Aplica el filtro de inversión al elemento body
    body.style.filter = "invert(100%)";
  };

  // Define la función que subraya los enlaces al hacer clic en el botón
  const underlineLinks = () => {
    // Obtiene todos los elementos a del documento que sean enlaces
    const linkElements = document.querySelectorAll("a[href]");
    // Recorre los elementos y les aplica el estilo de subrayado
    linkElements.forEach((element) => {
      element.style.textDecoration = "underline";
    });
  };

  // Define la función que cambia la fuente a una más legible al hacer clic en el botón
  const readableFont = () => {
    // Obtiene todos los elementos del documento que tengan texto
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a"
    );
    // Recorre los elementos y les aplica una fuente más legible
    textElements.forEach((element) => {
      element.style.fontFamily = "Arial, sans-serif";
      element.style.fontSize = "19px";
    });
  };

  // Define la función que restablece los valores por defecto al hacer clic en el botón
  const resetValues = () => {
    // Obtiene todos los elementos del documento
    const allElements = document.querySelectorAll("*");
    // Recorre los elementos y les quita los estilos aplicados
    allElements.forEach((element) => {
      element.style.removeProperty("font-size");
      element.style.removeProperty("filter");
      element.style.removeProperty("color");
      element.style.removeProperty("background-color");
      element.style.removeProperty("text-decoration");
      element.style.removeProperty("font-family");
      element.classList.remove("dark");
    });
  };
  return (
    <div
      className={`fixed  z-50 flex flex-row items-center h-full transition-right duration-500 ease-in-out ${
        open ? "right-0" : "right-[-166px]"
      }`}
    >
      {/* Botón desplegable */}
      <button
        className=" text-white bg-gray-500 rounded-full h-14 w-14 text-[40px] translate-x-0 flex justify-center items-center duration-500 ease-in-out"
        onClick={toggleOpen}
      >
        <i className="fa-solid fa-universal-access"></i>
      </button>
      <ul className=" bg-white dark:bg-slate-800 shadow-lg py-2 mt-2 rounded-lg divide-y">
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={increaseTextSize}
          >
            Aumentar texto
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={decreaseTextSize}
          >
            Disminuir texto
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={grayscaleMode}
          >
            Escala de grises
          </button>
        </li>
        {/* Añade las funciones que faltan */}
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={highContrastMode}
          >
            Alto contraste
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={negativeContrastMode}
          >
            Contraste negativo
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={underlineLinks}
          >
            Subrayar enlaces
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={readableFont}
          >
            Fuente legible
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={resetValues}
          >
            Restablecer
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Accesibility_tools;
