import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

const Profile = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mt: 8}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 500, gap: 4 }}>
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar sx={{ width: 200, height: 200, bgcolor: 'primary.main' }}>
                        DP
                    </Avatar>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Nombre Completo</Typography>
                        <Typography variant="body1" color="text.secondary">Dario Puentes Díaz</Typography>
                    </Box>
                    
                    <Box>
                        <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Correo Electrónico</Typography>
                        <Typography variant="body1" color="text.secondary">dario.puentes2b@gmail.com</Typography>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Número Telefónico</Typography>
                        <Typography variant="body1" color="text.secondary">+52 81 3132 1881</Typography>
                    </Box>
                    
                    <Box>
                        <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Rol</Typography>
                        <Typography variant="body1" color="text.secondary">Desarrollador Frontend</Typography>
                    </Box>
                    
                    <Box>
                        <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Fecha de Nacimiento</Typography>
                        <Typography variant="body1" color="text.secondary">14 de mayo de 2005</Typography>
                    </Box>
                </Box>

                <Box>
                    <Button variant="outlined" color="primary" size="large" fullWidth> EDITAR PERFIL</Button>
                </Box>
                
            </Box>
        </Box>
    );
}

export default Profile;