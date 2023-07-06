import React from "react";
import Navbar from "../components/navbar/NavBar";

const Index = () => {
  return (
    <div className=" w-full min-h-screen grid grid-rows-3">
      <Navbar />
      <main className="row-span-2 flex flex-col justify-center min-h-screen items-center">
        <h1 className="text-6xl font-bold font-mono">Bienvenido</h1>
      </main>
    </div>
  );
};

export default Index;
