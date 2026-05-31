import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import './App.css'
import Login from './views/Login'
import Profile from './views/Profile'
import Admin from './views/Admin'
import Details from './components/Details'
import ResponsiveAppBar from './components/AppBar'
import useAuth from './hooks/useAuth'
import useAdmin from './hooks/useAdmin'

function App() {
  const { isLogin, setIsLogin, token, login, user } = useAuth();
  const { users, getUsers, delUser, addUser } = useAdmin(token);

  return (
    <>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar />}
        <Container sx={{ pt: '12px' }}>
          <Routes>
            <Route path="/" element={<Login setIsLogin={setIsLogin} login={login} />} />
            {/* <Route path="/prof" element={<Profile user={user} />} /> */}
            <Route path="/admin" element={<Admin users={users} delUser={delUser} addUser={addUser} />} />
            <Route path='/users/:username' element={<Details users={users}/>} />
          </Routes> 
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App