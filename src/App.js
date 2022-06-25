import './App.css';
import Home from './components/home/home';
import Details from './components/tour-details/Tour-Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tours from './components/tours/Tours';
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register';
import Hotels from './components/hotels/Hotels'

function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour-details" element={<Details />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hotels" element={<Hotels />} />
    </Routes>
  </Router>);
}

export default App;
