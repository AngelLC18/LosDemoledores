import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import Form_rubro from "../form/Form_rubro";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
