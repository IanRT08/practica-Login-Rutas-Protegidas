import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return (
      <Navigate
        to={user.rol === "admin" ? "/admin" : "/profile"}
        replace
      />
    );
  }

  return <Outlet />;
}