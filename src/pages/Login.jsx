import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const { login, authUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const res = login(username.trim(), password);
    if (!res.ok) {
      setError(res.message);
      return;
    }

    // Redirigir según rol
    const role = authUser?.role; // puede tardar 1 render, mejor calculamos con username
    // simple: si usuario inicia con ian01 admin en nuestro arreglo; pero mejor navegamos por rol desde context
    // Solución robusta: navegar con setTimeout 0
    setTimeout(() => {
      // authUser ya actualizado
      navigate((prev) => prev, { replace: true });
    }, 0);
  };

  return (
    <div className="authPage">
      <form className="authCard" onSubmit={handleSubmit}>
        <h2 className="authTitle">Login</h2>
        <p className="authSubtitle">Autenticación simulada (sin backend)</p>

        <Input
          label="Usuario"
          value={username}
          onChange={setUsername}
          placeholder="Ej: daniel01"
        />

        <Input
          label="Contraseña"
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="Ej: 1234"
        />

        {error && <div className="error">{error}</div>}

        <Button text="Iniciar sesión" type="submit" />
        <div className="hint">
          Tip: prueba <b>ian01 / 1234</b> (admin) o <b>daniel01 / 1234</b> (user)
        </div>
      </form>
    </div>
  );
}