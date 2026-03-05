import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return null; 

  return (
    <div className="page">
      <div className="card">
        <h2>Bienvenido</h2>

        <p>
          Usuario autenticado: <b>{user.nombre}</b>
        </p>

        <p>
          Rol: <b>{user.rol}</b>
        </p>

        <Button text="Cerrar sesión" variant="danger" onClick={logout} />
      </div>
    </div>
  );
}