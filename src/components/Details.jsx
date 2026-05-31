import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Details = ({ users }) => {
    const { username } = useParams();
    const [ searchParams ] = useSearchParams();
    /*Fix ts*/
    const user = users.find(u => u.username === username);
    return (
        <div> 
            Detalles 
            <p> Username: {username} </p>
            <p> Nombre: {users.find(u => u.username === username)?.name} </p>
            <p> Contraseña: {users.find(u => u.username === username)?.password} </p>
            <p> valor del parametro react = {searchParams.get('react')} </p>
        </div>
    )
}

export default Details;