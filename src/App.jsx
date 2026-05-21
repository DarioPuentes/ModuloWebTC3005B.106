import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import Admin from './views/Admin'
import ResponsiveAppBar from './components/AppBar'
import { Container } from '@mui/material'

const API_URL = "https://apiresttc3005b106-production.up.railway.app";

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = localStorage.getItem('isLogin');
    if (saved && saved !== "undefined") {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parseando isLogin desde localStorage, reseteando...", e);
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
    localStorage.setItem('token', token);
  }, [isLogin, token]);

  useEffect(() => {
    const getUsers = async () => {
      if (isLogin && token) {
        try {
          const res = await fetch(`${API_URL}/users`, {
            headers: { 
              Authorization: `Bearer ${token}` 
            }
          });
          const data = await res.json();
          setUsers(Array.isArray(data) ? data : []);
        } catch (error) {
          console.error("Error obteniendo usuarios:", error);
        }
      }
    };
    getUsers();
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
        alert(result.msg || "Credenciales incorrectas");
        return result;
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  const delUser = async (id) => {
    setUsers(users.filter((u) => u._id !== id));
    await fetch(`${API_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }, 
      method: "delete"
    });
  };

  const addUser = async (newUser) => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 
          "content-type": "application/json", 
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(newUser)
      });
      
      const data = await res.json();
      if (data._id) {
        setUsers([...users, data]);
      } else {
        console.error("Error desde el backend:", data);
        alert("No se pudo registrar al usuario");
      }
    } catch (error) {
      console.error("Error en la petición de registro:", error);
      alert("Usuario ya existente");
    }
  };

  return (
    <>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar />}
        <Container sx={{ pt: '12px' }}>
          <Routes>
            <Route path="/" element={<Login setIsLogin={setIsLogin} login={login} />} />
            {/* <Route path="/prof" element={<Profile user={user} />} /> */}
            <Route path="/admin" element={<Admin users={users} delUser={delUser} addUser={addUser} />} />
          </Routes> 
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App