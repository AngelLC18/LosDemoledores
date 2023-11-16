import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Register } from "../pages";
import Home from "../pages/Home";

export const RouterAuth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={<Home />} />
      <Route path="/*" element={<Navigate to="/auth/home" />} />
    </Routes>
  );
};
