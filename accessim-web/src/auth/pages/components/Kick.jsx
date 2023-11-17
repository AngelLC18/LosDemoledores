import React from "react";
import { useNavigate } from "react-router-dom";

function Kick() {
  const navigate = useNavigate();

  return (
    <div className="fixed z-20 flex flex-row items-start h-full top-2 left-2">
      <button
        onClick={() => navigate("/home")}
        className="text-white bg-indigo-800 hover:bg-indigo-900 rounded-lg h-6 w-20 p-4 text-[14px]  translate-x-0 flex justify-center items-center text-center duration-500 ease-in-out"
      >
        Regresar
      </button>
    </div>
  );
}

export default Kick;
