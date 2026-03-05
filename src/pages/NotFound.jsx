import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function NotFound() {
  return (
    <div className="page">
      <div className="card">
        <h2>404</h2>
        <p>Ruta no encontrada.</p>
        <Link to="/profile">Ir a Profile</Link>
      </div>
    </div>
  );
}