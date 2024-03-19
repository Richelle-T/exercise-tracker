import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add-exercise" className="nav-link">Add</Link>
        </nav>
    );
};

export default Navigation;