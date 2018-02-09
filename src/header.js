import React, { Component } from 'react';
import logo from './img/logo_transparent.png';
import './css/header.css';

class Header extends Component {
  render() {
    return <div className="header">
      <img src={logo} alt="logo, plein air vacances"/>
      <ul className="main-menu">
        <li>
          <a href=""><i className="" />Menu 1</a>
        </li>
      </ul>
    </div>;
  }
}

export default Header;
