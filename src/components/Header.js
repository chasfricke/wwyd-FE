import React from 'react'
import '../css/Header.css'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="header-image" src="./assets/logo.png" alt="logo" />
        <img className="header-title" src="./assets/title.png" alt="What Would You Do?" />
        <img className="hamburger-button" src="./assets/hamburger-button.png" alt="options" />
      </header>
    )
  }
}
