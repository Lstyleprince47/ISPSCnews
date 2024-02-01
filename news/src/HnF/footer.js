import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="contact-section" style={contactSectionStyle}>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>ISPSC<br />Office of the President<br />Email: <a href="mailto:op@ispsc.edu.ph">op@ispsc.edu.ph</a></p>
        </div>

        <div className="contact-info">
          <h3>Registrar</h3>
          <p>Tel. No.: (077) 604-1422<br />Email: <a href="mailto:registrarispsc@yahoo.com">registrarispsc@yahoo.com</a></p>
          <p>FB: <a href="https://www.facebook.com/Registrar-Office-Page">Registrar's Office Page</a></p>
        </div>
      </div>

      <div className="contact-section" style={contactSectionStyle}>
        <div className="contact-info">
          <h3>Campuses</h3>
          <ul className="campuses-list">
            <li>Main Campus</li>
            <li>Sta. Maria</li>
            <li>Santiago</li>
            <li>Narvacan</li>
            <li>Tagudin</li>
            <li>Candon City</li>
            <li>Cervantes</li>
          </ul>
        </div>
      </div>
      <div style={copyrightStyle}>
        <p>&copy; 2023 Ilocos Sur Polytechnic State College</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const contactSectionStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: '20px',
};

const copyrightStyle = {
  marginTop: '20px', // Adjust margin as needed
  textAlign: 'center',
  color: '#ccc', // Adjust color as needed
};


export default Footer;
