import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./user.css";
import Navbar from "./components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Accesibility_tools from "../../components/Accessibility_tools";
export const User = () => {
  const {
    startUpdatingUser,
    email: currentEmail,
    displayName: currentDisplayName,
  } = useAuth();

  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newDisplayName, setNewDisplayName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await startUpdatingUser({
      email: newEmail,
      password: newPassword,
      displayName: newDisplayName,
    });
    if (!result.ok) {
      console.error("Error updating user");
    } else {
      console.log("User updated successfully");
    }
  };
  return (
    <div className="w-full min-h-screen grid grid-rows-3 dark:bg-slate-950 bg-orange-100">
      <Navbar />
      <main className="row-span-2 flex flex-col min-h-screen justify-center items-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-700">Perfil</h1>
        <form
          onSubmit={handleSubmit}
          className="p-6 mt-4 bg-white w-[85%] h-[500px] rounded-md shadow-md grid grid-cols-2 gap-4 text-black"
        >
          <div className="form-group">
            <label className="text-gray-700">Correo actual:</label>
            <input
              type="email"
              value={currentEmail}
              readOnly
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="text-gray-700">Nuevo correo:</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="text-gray-700">Contraseña actual:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="text-gray-700">Nueva contraseña:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="text-gray-700">Nombre de usuario actual:</label>
            <input
              type="text"
              value={currentDisplayName}
              readOnly
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="text-gray-700">Nuevo nombre de usuario:</label>
            <input
              type="text"
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="col-span-2 mt-6 px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Update Profile
          </button>
        </form>
      </main>
      <Footer />
      <Accesibility_tools />
    </div>
  );
};
