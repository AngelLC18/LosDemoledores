import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { User } from "../pages";
import Form_rubro from "../pages/Form_rubro";

export const RouterFirebase = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:displayname" element={<User />} />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/formulario" element={<Form_rubro />} />
    </Routes>
  );
};
