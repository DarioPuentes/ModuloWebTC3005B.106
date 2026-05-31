import { useState, useEffect } from "react";

const API_URL = "https://apiresttc3005b106-production.up.railway.app";

const useAuth = () => {
    const [isLogin, setIsLogin] = useState(() => {
        const saved = localStorage.getItem('isLogin');
        if (saved && saved !== "undefined") {
            try {
                return JSON.parse(saved);
            } catch (e) {
                localStorage.removeItem('isLogin');
                return false;
            }
        }
        return false;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || "";
    });

    const [user, setUser] = useState({});

    useEffect(() => {
        localStorage.setItem('isLogin', JSON.stringify(isLogin));
        localStorage.setItem('token', token);
    }, [isLogin, token]);

    const login = async (userData) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userData)
            });
            const result = await response.json();
            
            if (result.isLogin) {
                setIsLogin(true);
                setUser(result.user);
                setToken(result.token);
                return result;
            } else {
                alert("Credenciales incorrectas");
                return result;
            }
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    };

    return { isLogin, setIsLogin, token, user, login };
}

export default useAuth;