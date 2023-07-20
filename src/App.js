import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/Home/home';
import About from './pages/About/about';
import HireDevelopers from './pages/hire-app-developers/hire-app-developers';

function App() {
  return (
<<<<<<< HEAD
    <Router forceRefresh>
      <div>
        <Link to="/"></Link>
        <Link to="/about"></Link>
        <Link to="/hire-developers"></Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/hire-developers" element={<HireDevelopers />} />
      </Routes>
    </Router>
=======
    <div>   
      <BrowserRouter>
        <Header />        
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/hire-developers" element={<HireDevelopers />} />
            </Routes>
            <Footer />  
      </BrowserRouter>
    </div>
>>>>>>> 708f49113d1fcc4af66f59dfd14e3506933c2b92
  );
}

export default App;
