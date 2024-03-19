import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css'; // Import styles for the navigation
import logo from './images/logo192.png'; // Import your logo image

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="left">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="right login">
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navigation;
