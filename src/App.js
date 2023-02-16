import React from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import Kontakt from './Components/Kontakt/Kontakt.js';
import Interesi from './Components/Interesi/Interesi.js';
import Anketa from './Components/Anketa/Anketa.js';
import Blog from './Components/Blog/Blog.js';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <nav className="topnav">
            <div>
              <ul>
                <Link to='home'><li style={{listStyleType: "none", fontSize: "18px"}}>За мене</li></Link>
                <Link to='interesi'><li style={{listStyleType: "none", fontSize: "18px"}}>Интереси</li></Link>
                <Link to='blog'><li style={{listStyleType: "none", fontSize: "18px"}}>Блог</li></Link>
                <Link to='kontakt'><li style={{listStyleType: "none", fontSize: "18px"}}>Контакт</li></Link>
                <Link to='anketa'><li style={{listStyleType: "none", fontSize: "18px"}}>Анкета</li></Link>
              </ul>
            </div>
          </nav>
    <div>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='interesi' element={<Interesi/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='anketa' element={<Anketa/>}/>
        <Route path='kontakt' element={<Kontakt/>}/>
      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;


