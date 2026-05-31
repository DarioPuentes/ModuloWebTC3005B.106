import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const User = ({ user, delUser }) => {
    return (
        <TableRow hover>
            <TableCell><Link to={"/users/"+user._id+"?react=889"}>{user._id}</Link></TableCell>
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