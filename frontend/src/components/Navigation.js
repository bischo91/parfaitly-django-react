import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import Recipe from "../routes/Recipe";

function Navigation(){
    return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recipe">Recipe</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}

export default Navigation;



// Using <a href> refreshes page -> no point of using React
