// Navbar.js
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home"><button>HOME</button></Link>
      <Link to="/about"><button>ABOUT</button></Link>
      <Link to="/login"><button>LOGIN</button></Link>
    </nav>
  );
};

export default Navbar;