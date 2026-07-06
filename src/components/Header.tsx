import React from 'react'
import menu1 from '../assets/images/menu1.png'

export const Header = () => {

  return (

    <header className="header">

      <div className="logo">
        <img src={menu1} alt="favicon" />
      </div>

      <nav>

        <a href="#">Home</a>

        <a href="#">Menu</a>

        <a href="#">Pages</a>

        <a href="#">Blog</a>

        <a href="#">Contact</a>

      </nav>

      <div className="headerButtons">

        <button className="iconButton">

          👤

        </button>

        <button className="iconButton">

          🛒

        </button>

      </div>

    </header>

  )

}