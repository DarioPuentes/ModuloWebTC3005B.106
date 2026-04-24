import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const Add = ({ addUser }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
        if (!name || !username || !password) {
            alert("Por favor, completa todos los campos");
            return;
        }
        addUser({ name, username, password });
        setName('');
        setUsername('');
        setPassword('');
    }

    return (
        <Paper elevation={2} sx={{ p: 2, width: '100%' }}>
            <Box 
                component="form" 
                onSubmit={onsubmit}
                sx={{display: 'flex', gap: 2, alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center'}}
>
                <TextField 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    label="Nombre" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                />
                <TextField 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    label="Email" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                />
                <TextField 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    label="Contraseña" 
                    variant="outlined" 
                    type="password" 
                    size="small"
                    fullWidth
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    sx={{ minWidth: '120px', height: '40px' }}
                >
                    Registrar
                </Button>
            </Box>
        </Paper>
    );
}

export default Add;