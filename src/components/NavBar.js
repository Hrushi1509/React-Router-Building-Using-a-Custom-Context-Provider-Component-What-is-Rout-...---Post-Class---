import React from "react";
import { Link } from "react-router-dom";
// import Home from '../Pages/Home';
// import Index from '../Pages/Index'
export const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/" class="index-link">
            Index-Link
          </Link>
          <Link to="/home" class="home-link">
            Home-Link
          </Link>
        </ul>
      </nav>
    </>
  );
};
