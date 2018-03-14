import React from "react";
import '../css/Header.css';

export class Header extends React.Component {
  render () {
    return (
      <header>
        <img className="header-image" src="./assets/logo.png" alt="logo" />
      </header>
    );
  }
}