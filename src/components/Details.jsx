import React from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { Button, Box, Typography, Paper } from '@mui/material'

const Details = ({ users }) => {
    const { id } = useParams();
    const [ searchParams ] = useSearchParams();
    
    const user = users.find(u => u._id === id);
    
    return (
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Paper sx={{ p: 4, width: '100%', maxWidth: 1000 }}>
                <Typography variant="h4"> Detalles del Usuario </Typography> <br />  
                <Typography> <strong>ID:</strong> {id} </Typography>
                <Typography> <strong>Username:</strong> {user?.username} </Typography>
                <Typography> <strong>Nombre:</strong> {user?.name} </Typography>
                <Typography> <strong>Contraseña:</strong> {user?.password} </Typography>
                <Typography color="textSecondary" sx={{ mt: 2 }}> 
                    Valor del parámetro react: {searchParams.get('react')} 
                </Typography>

                <Box sx={{ mt: 3}}>
                    <Button variant="outlined" component={Link} to="/admin">
                        Regresar a usuarios
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default Details;