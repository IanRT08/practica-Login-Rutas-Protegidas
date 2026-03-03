import { createContext, useState, useEffect, useMemo } from "react";
import { usuarios } from "../data/usuarios";

const AuthContext = createContext(null);

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null);
    
    const login = (userName, contrasenia) => {
        const found = usuarios.find(
            (u) => u.userName === userName && u.contrasenia === contrasenia
        );
        if (!found) return {
            ok: false,
            message: "Credenciales incorrectas"
        };

        setAuthUser({
            userName: found.userName,
            nombre: found.nombre,
            rol: found.rol
        });

        return {
            ok: true
        };

        };

        const logout = () => {
            setAuthUser(null);
        };

        const value = useMemo(
            () => ({
            authUser,
            isAutenticated: !!authUser,
            login,
            logout,
            users: usuarios,
        }),
        [authUser]
        );

        return 
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>;
    }

    export function useAuth() {
        const context = useContext(AuthContext);
        if (!context) {
            throw new Error("useAuth debe ser usado dentro de un AuthProvider");
        }
        return context;
    }
