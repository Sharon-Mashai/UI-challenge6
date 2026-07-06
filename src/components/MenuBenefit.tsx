import React from 'react'
import { MenuItem } from './MenuItem'

export const MenuBenefit = () => {
  return (
    <section className="menuBenefit">

      {/* Left */}

      <div className="menuImage">

        <img
          src="/images/cherries.png"
          alt="Cherries"
        />

      </div>

      {/* Middle */}

      <div className="menuCenter">

        <p className="smallHeading">
          Our Menu Benefit
        </p>

        <div className="menuItems">

          <MenuItem
            image="/images/menu1.png"
            title="Fresh Salad"
            description="Fresh vegetables with natural dressing."
          />

          <MenuItem
            image="/images/menu2.png"
            title="Healthy Juice"
            description="Rich in vitamins and antioxidants."
          />

          <MenuItem
            image="/images/menu3.png"
            title="Fruit Bowl"
            description="Seasonal fruits served fresh."
          />

        </div>

      </div>
{/* Right */}

<div className="openingHours">

    <h3>Opening Hours</h3>

    <div className="hours">
        <p>Monday</p>
        <p>09:00 - 20:00</p>
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