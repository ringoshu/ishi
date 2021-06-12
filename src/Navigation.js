import React from 'react';
import './index.css';



function Navigation() {
  return (
    <ul className="nav">
        <li><a className="nav-item" href="#gallery">art</a></li>
        <li><a className="nav-item" href="#about">about</a></li>
        <li><a className="nav-item" href="#cv">statment</a></li>
        <li><a className="nav-item" href="#contact">contact</a></li>
    </ul>
  );
}

export default Navigation;
