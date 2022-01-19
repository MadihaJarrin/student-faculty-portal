import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AppointmentBanner from './Components/Home/AppoinmentBanner/AppointmentBanner';
import Appointment from './Components/Home/AppoinmentBanner/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
