import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Form_rubro from "../pages/form/Form_rubro";

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
