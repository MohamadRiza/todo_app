// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/todos" element={<Todos/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}