import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';

const User = ({ user, delUser }) => {
    return (
        <TableRow hover>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell align="center">
                <Button 
                    variant="contained" 
                    color="error" 
                    size="small"
                    onClick={() => delUser(user._id)}
                >
                    Borrar
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default User;