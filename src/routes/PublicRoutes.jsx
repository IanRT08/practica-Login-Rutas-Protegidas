import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute() {
  const { isAuthenticated, authUser } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={authUser.role === "admin" ? "/admin" : "/profile"} replace />;
  }

  return <Outlet />;
}