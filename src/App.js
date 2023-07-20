import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/Home/home';
import About from './pages/About/about';
import HireDevelopers from './pages/hire-app-developers/hire-app-developers';

function App() {
  return (

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
  );
}

export default App;
