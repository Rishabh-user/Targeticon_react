import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import About from './pages/About/about';
import HireDevelopers from './pages/hire-app-developers/hire-app-developers';

function App() {
  return (
    <div>
      <Router forceRefresh>
        {/* <div>
          <Link to="/"></Link>
          <Link to="/about"></Link>
          <Link to="/hire-developers"></Link>
        </div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire-developers" element={<HireDevelopers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
