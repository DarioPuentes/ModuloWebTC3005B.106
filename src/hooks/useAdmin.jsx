import { useState, useEffect } from "react";

const API_URL = "https://apiresttc3005b106-production.up.railway.app";

const useAdmin = (token, isLogin) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        if (isLogin && token) {
            const res = await fetch(`${API_URL}/users`, {headers: { Authorization: `Bearer ${token}` }});
            const data = await res.json();
            setUsers(Array.isArray(data) ? data : []);
        }
    };

    useEffect(() => {
        if (token && isLogin) {
            getUsers();
        }
    }, [token, isLogin]);

    const delUser = async (id) => {
        setUsers(users.filter((u) => u._id !== id));
        await fetch(`${API_URL}/users/${id}`, {headers: { Authorization: `Bearer ${token}` }, method: "delete"});
    };

    const addUser = async (newUser) => {
        try {
            const res = await fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: { "content-type": "application/json", Authorization: `Bearer ${token}`},
                body: JSON.stringify(newUser)
            });
            
            const data = await res.json();
            setUsers([...users, data]);
        } catch (error) {
            alert("Usuario ya existente");
        }
    };
    return { users, getUsers, delUser, addUser };
}

export default useAdmin;