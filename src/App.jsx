import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Updated path
import Home from "./components/Home"; // Updated path
import About from "./components/About"; // Updated path
import Login from "./components/Login"; // Updated path
import "./App.css";
import "./styles.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
