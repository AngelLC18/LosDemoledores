import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./user.css";
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
      // handle error
      console.error("Error updating user");
    } else {
      console.log("User updated successfully");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">User Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 mt-4 bg-white rounded shadow-md w-80 text-black"
      >
        <div className="form-group">
          <label className="text-gray-700">Current Email:</label>
          <input
            type="email"
            value={currentEmail}
            readOnly
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label className="text-gray-700">New Email:</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label className="text-gray-700">Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label className="text-gray-700">New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label className="text-gray-700">Current Username:</label>
          <input
            type="text"
            value={currentDisplayName}
            readOnly
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <label className="text-gray-700">New Username:</label>
          <input
            type="text"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};
