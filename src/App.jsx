import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Doctors from './pages/Doctors';
import Navbar from './Navbar';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Pharmacy from './pages/Pharmacy';
import Footer from './assets/Footer';
import Contact from './assets/Contact';
import UsersList from './UserList';
import Signup from './pages/Signup';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [ setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false); 
    navigate('/intro');
  };

  const isPublicPage = location.pathname === '/intro' || location.pathname === '/login'  || location.pathname === '/signup' || location.pathname === '/';

  return (
    <div>
      {isPublicPage ? (
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <div>
          <UsersList/>
          <Navbar onSignOut={handleSignOut} />
          <Contact /> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/" element={<Pharmacy />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}