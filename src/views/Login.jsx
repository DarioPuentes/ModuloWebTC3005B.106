import React from 'react';
import { Box, TextField, Button, Typography, Paper, Alert } from '@mui/material'; 
import { Link, useNavigate } from 'react-router-dom';
import reactImg from '../assets/hero.png';

const Login = ({ setIsLogin, login }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        setIsLogin(false);
    }, [setIsLogin]);

    const [state, setState] = React.useState({
        username: '',
        password: ''
    });

    const [errorMsg, setErrorMsg] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }));
        setErrorMsg(''); 
    };

    const handleOnClick = async () => {
        setErrorMsg('');

        if (!state.username || !state.password) {
            setErrorMsg("Por favor, completa todos los campos");
            return;
        }
        
        try {
            const res = await login({ username: state.username, password: state.password });
            if (res.isLogin === true){ 
                setIsLogin(true);
                navigate('/admin'); 
            } else {
                setErrorMsg(res.msg || "username o password incorrectos");
            }
        } catch (error) {
            setErrorMsg("Error al intentar iniciar sesión. Revisa tu conexión.");
        }
    }
    
    return (
        <Box>
            <Box component="img" src={reactImg} sx={{ position: 'absolute', top: 50, left: 300, height: 70 }} />

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 15}}>
                <Paper sx={{padding: 4, display: 'flex', flexDirection: 'column', gap: 3, width: 500}}>
                    <Typography variant="h4" align="center"> Bienvenido </Typography>

                    {errorMsg && (
                        <Alert severity="error">
                            {errorMsg}
                        </Alert>
                    )}
                    
                    <TextField 
                        name="username" 
                        label="Correo" 
                        variant="outlined" 
                        value={state.username} 
                        onChange={handleChange} 
                    />
                    
                    <TextField 
                        name="password" 
                        label="Contraseña" 
                        type="password" 
                        variant="outlined"  
                        value={state.password} 
                        onChange={handleChange} 
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            size="large" 
                            onClick={handleOnClick} 
                            disabled={!state.username || !state.password}
                        > 
                            INICIAR SESION 
                        </Button>
                    </Box>
                    <Typography variant="body2" align="center"> ¿No tienes cuenta? <Link to="/"> Registrarse </Link> </Typography>
                </Paper>
            </Box>
        </Box>
    );
}

export default Login;