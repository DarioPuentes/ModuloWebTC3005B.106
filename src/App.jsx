import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import Admin from './views/Admin'
import ResponsiveAppBar from './components/AppBar'
import { Container } from '@mui/material'

const API_URL = "http://localhost:8000";

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = localStorage.getItem('isLogin');
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isLogin) {
      const getUsers = async () => {
        const res = await fetch(`${API_URL}/users`);
        const data = await res.json();
        setUsers(data);
      };
      getUsers();
    }
  }, [isLogin]);

  const login = async (userData) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  const delUser = async (id) => {
    setUsers(users.filter((u) => u._id !== id));
    await fetch(`${API_URL}/users/${id}`, {method: "delete"});
  };

  const addUser = async (newUser) => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser)
      });
      
      const data = await res.json();
      if (data._id) {
        setUsers([...users, data]);
      } else {
        console.error("Error desde el backend:", data);
        alert("No se pudo registrar. ¿Quizás el usuario ya existe?");
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