import React from 'react';
import {Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import Add from '../components/Add';
import User from '../components/User';

const Admin = ({ users, delUser, addUser }) => {
    return (
        <Box sx={{ width: '80%', margin: '0 auto', mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Panel de Usuarios
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Add addUser={addUser} />
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Correo</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((u) => (
                            <User key={u._id} user={u} delUser={delUser} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Admin;