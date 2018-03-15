import React from 'react'
import '../css/Header.css'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="header-logo" src="./assets/logo.png" alt="logo" />
        <div className="title-container">
          <h1 className="header-title">ROOMINATE</h1>
          <p className="header-tagline">questions that grab the room</p>
        </div>
      </header>
    )
  }
}


