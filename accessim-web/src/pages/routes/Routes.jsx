import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import Form_rubro from "../form/Form_rubro";

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/formulario" element={<Form_rubro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rutas;
