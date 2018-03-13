import React from "react";
import '../css/Header.css';

export class Header extends React.Component {
  render () {
    return (
      <header>
        <img className="header-image" src="https://www.techonline.com/img/tmp/logo-placeholder.png" alt="logo" />
      </header>
    );
  }
}