// src/Header.js
import React from 'react';
import './header.css';
import islogo from './img/islogo.png';
import hdbg from './img/hdbg.png';

const Header = () => {
  return (
    <header style={{
      position: 'relative',
      textAlign: 'center',
      color: 'white', // Adjust text color based on your needs
      backgroundImage: `url(${hdbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
    }}>

      <img src={islogo} alt='islogo' className='headerlogo' />
      <h1>Ilocos Sur Polythecnic State College</h1>
    </header>
  );
}

export default Header;
