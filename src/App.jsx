import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './views/Login';
import Profile from './Views/Profile';
import ButtonAppBar from './components/AppBar';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const showAppBar = location.pathname !== '/' && location.pathname.toLowerCase() !== '/login';

  return (
    <>
      {showAppBar && <ButtonAppBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;