import { Navigate, Route, Routes } from "react-router-dom";
import { RouterAuth } from "../auth";
import { RouterFirebase } from "../app/index";
import { useCheckAuth } from "../hooks";
import { CheckingAuth } from "../components/ui";

export const RouterApp = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<RouterFirebase />} />
      ) : (
        <Route path="/auth/*" element={<RouterAuth />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/home" />} />
    </Routes>
  );
};
