import "./App.css";
import React from "react";
import Navbar from "../components/navbar.jsx";
import Home from "../Pages/home.jsx";
import Footer from "../components/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mask from "../Pages/Mask.jsx";
import Expression from "../Pages/Expression.jsx";
import Gender from "../Pages/Gender.jsx";
import Features from "../Pages/Features.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/mask" element={<Mask />} />
          <Route path="/expression" element={<Expression />} />
          <Route path="/gender" element={<Gender />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
