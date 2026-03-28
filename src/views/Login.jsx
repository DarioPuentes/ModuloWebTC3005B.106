import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import reactImg from '../assets/hero.png';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box>
            <Box component="img" src={reactImg} sx={{ position: 'absolute', top: 50, left: 300, height: 70 }} />

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 15}}>
                <Paper sx={{padding: 4, display: 'flex', flexDirection: 'column', gap: 3, width: 500}}>
                    <Typography variant="h4" align="center"> Bienvenido </Typography>
                    <TextField label="Usuario" variant="outlined" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <TextField label="Contraseña" type="password" variant="outlined"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Recordar contraseña"/> <br />
                    
                    <form style={{ display: 'flex', justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" size="large" component={Link} to="/Profile" disabled={!usuario || !password}> INICIAR SESION </Button>
                    </form>
                    <Typography variant="body2" align="center"> ¿No tienes cuenta? <Link to="/register"> Registrarse </Link> </Typography>
                </Paper>
            </Box>

        </Box>
    );
}

export default Login;