// src/bit/nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="inactive-link">Home</Link></li>
        <li><Link to="/" className="inactive-link">News</Link></li>
        <li><Link to="/" className="inactive-link">Contact</Link></li>
        <li><Link to="/" className="inactive-link">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
