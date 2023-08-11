import React, { useState } from "react";
const AccessibilityMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="mt-4">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <i className="fas fa-moon"></i> Cambiar a modo oscuro
      </button>
      <ul
        className={isMenuOpen ? "show" : "hidden"}
        id="accessibility-menu"
      >
        <li>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFontSize(fontSize + 1);
            }}
          >
            <i className="fas fa-plus"></i> Aumentar el tamaño de la letra
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFontSize(fontSize - 1);
            }}
          >
            <i className="fas fa-minus"></i> Disminuir el tamaño de la letra
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setContrast(contrast + 1);
            }}
          >
            <i className="fas fa-plus"></i> Aumentar el contraste
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setContrast(contrast - 1);
            }}
          >
            <i className="fas fa-minus"></i> Disminuir el
contraste
          </button>
        </li>
      </ul>
    </div>
  );
};
export default AccessibilityMenu;