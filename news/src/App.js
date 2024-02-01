// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './bit/nav';
import Header from './HnF/header';
import Footer from './HnF/footer';
import './App.css';

const App = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('/newsdata.json') // Use a relative path starting from the public directory
      .then(response => response.json())
      .then(data => setNewsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div>
       
        <Navbar />
        <Header />
    

        
        <Routes>
        
          <Route
            path="/"
            element={
              <div className='body'>
            
              <div className="news-container">
                <hr/>
                <h2>News</h2>
                <ul className="news-grid">
                  {newsData.map(newsItem => (
                    <li className='newsarea' key={newsItem.id}>
                      <img src={newsItem.img} alt={newsItem.title} />
                     
                      <h3>{newsItem.title}</h3>
                      <h4>{newsItem.date}</h4>
                      <p>{newsItem.content}</p>
                    
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
