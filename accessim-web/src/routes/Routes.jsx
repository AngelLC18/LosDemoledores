import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
