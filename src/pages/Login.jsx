import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

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

    navigate(res.rol === "admin" ? "/admin" : "/profile", {
      replace: true,
    });
  };

  return (
    <div className="authPage">
      <form className="authCard" onSubmit={handleSubmit}>
        <h2 className="authTitle">Inicio de sesión</h2>

        <Input
          label="Usuario"
          value={username}
          onChange={setUsername}
        />

        <Input
          label="Contraseña"
          value={password}
          onChange={setPassword}
          type="password"
        />

        {error && <div className="error">{error}</div>}

        <Button text="Iniciar sesión" type="submit" />
      </form>
    </div>
  );
}