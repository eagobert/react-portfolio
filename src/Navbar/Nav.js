import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
          <div className="navbar-brand">
            <div id="logo">
              <div className="logoContainer"> 
                <span className="firstName">ERIN</span>
                <span className="lastName">AGOBERT</span>
              </div>
            </div>
          </div>
          
          <ul className="container nav col justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Nav;