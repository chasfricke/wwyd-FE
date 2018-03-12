import React from "react";
import '../css/Header.css';

export class Header extends React.Component {
  render () {
    return (
      <header>
        <img src="http://www.ccorpusa.com/wp-content/uploads/2017/07/logo.png" alt="logo image" />
        <div className="title">
            <h1>What Would You Do?</h1>
        </div>
        
      </header>
    );
  }
}