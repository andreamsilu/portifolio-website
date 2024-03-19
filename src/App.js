import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Home from './components/home'; 
import About from './components/about'; 
import Projects from './components/projects'; 
import Contact from './components/contact'; 
import Navigation from './components/navigation'; 
import Footer from './components/footer'; // Import the Footer component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';


function App() {
    return (
        <Router>
            <div className="app-container">
                <Navigation /> 
                <Routes> 
                    <Route exact path="/" element={<Home />} /> 
                    <Route path="/about" element={<About />} /> 
                    <Route path="/projects" element={<Projects />} /> 
                    <Route path="/contact" element={<Contact />} /> 
                    <Route path="/login" element={<Login />} /> 

                </Routes>
                <Footer /> {/* Include the Footer component */}
            </div>
        </Router>
    );
}

export default App;
