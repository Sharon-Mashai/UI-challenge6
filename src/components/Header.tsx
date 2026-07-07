import React from 'react'
import menu1 from '../assets/images/menu1.png'
import { HugeiconsIcon } from '@hugeicons/react'
import { Location03Icon } from '@hugeicons/core-free-icons'
import { ShoppingCart02Icon } from '@hugeicons/core-free-icons'

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

        <button className="iconButton"  onClick={() => alert("Our restaurant is located at 123 Healthy Street, Fresh City.")}>

            <HugeiconsIcon icon={Location03Icon} />

        </button>

        <button className="iconButton" onClick={() => alert("Your shopping cart is currently empty.")}>
            <HugeiconsIcon icon={ShoppingCart02Icon} />

        </button>

      </div>

    </header>

  )

}