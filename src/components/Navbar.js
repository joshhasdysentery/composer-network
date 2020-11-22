import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">Biography</li>
            <li className="nav-item">Music</li>
            <li className="nav-item">Composer Store</li>
          </ul>
        </div>
      </nav>
    );
  }
}
