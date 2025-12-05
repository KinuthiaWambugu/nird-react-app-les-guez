import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">        
        <div className="navbar-brand">
            <Link to="/">Project Logo</Link>
        </div>
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/digital_village">Digital Village</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/nird">NIRD Chatbot</Link></li>
        </ul>
    </nav>
    );
}

export default Navbar;