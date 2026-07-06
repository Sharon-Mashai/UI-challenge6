import React from 'react'

import cherries from '../assets/images/cherries.png'
import menu1 from '../assets/images/menu1.png'
import menu2 from '../assets/images/menu2.png'
import menu3 from '../assets/images/menu3.png'

import { MenuItem } from './MenuItem'

export const MenuBenefit = () => {

  return (

    <section className="menuBenefit">

      {/* Left */}

      <div className="menuImage">

        <img
          src={cherries}
          alt="Fresh Cherries"
        />

      </div>

      {/* Center */}

      <div className="menuCenter">

        <p className="sectionTitle">

          OUR MENU BENEFIT

        </p>

        <div className="menuItems">

          <MenuItem
            image={menu1}
            title="Fresh Salad"
            description="Fresh vegetables served daily."
          />

          <MenuItem
            image={menu2}
            title="Healthy Juice"
            description="Natural fruit juice."
          />

          <MenuItem
            image={menu3}
            title="Fruit Bowl"
            description="Seasonal fresh fruits."
          />

        </div>

      </div>

      {/* Right */}

      <div className="openingHours">

        <h3>Opening Hours</h3>

        <div className="hours">

          <span>Monday</span>

          <span>09:00 - 20:00</span>

        </div>

        <div className="hours">

          <span>Tuesday</span>

          <span>09:00 - 20:00</span>

        </div>

        <div className="hours">

          <span>Wednesday</span>

          <span>09:00 - 20:00</span>

        </div>

        <div className="hours">

          <span>Thursday</span>

          <span>09:00 - 20:00</span>

        </div>

        <div className="hours">

          <span>Friday</span>

          <span>09:00 - 22:00</span>

        </div>

        <hr />

        <h3 className="quickLinks">

          QUICK LINKS

        </h3>

      </div>

    </section>

  )

}