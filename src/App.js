import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AppointmentBanner from './Components/Home/AppoinmentBanner/AppointmentBanner';
import Appointment from './Components/Home/AppoinmentBanner/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Registration/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
