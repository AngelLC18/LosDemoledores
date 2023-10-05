import React, { useState } from "react";

const AccessibilityToolsButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleDropdownOpen}
        className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue"
      >
        Herramientas de accesibilidad
      </button>
      <ul style={{ display: isDropdownOpen ? "block" : "none" }}>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Aumentar texto
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Disminuir texto
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Escala de grises
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Alto contraste
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contraste negativo
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Fondo claro
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Subrayar enlaces
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Fuente legible
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Restablecer
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccessibilityToolsButton;
