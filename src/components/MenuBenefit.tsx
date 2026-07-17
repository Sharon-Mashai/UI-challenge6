

import cherries from '../assets/images/cherries.png'
import menu1 from '../assets/images/menu1.png'
import menu2 from '../assets/images/menu2.png'
import menu3 from '../assets/images/menu3.png'

import { MenuItem } from './MenuItem'

export const MenuBenefit = () => {

  return (

    <section className="menuBenefit">

      {/* Left part*/}

      <div className="menuImage">

        <img
          src={cherries}
          alt="Fresh Cherries"
        />

      </div>

      {/* Center part*/}

      <div className="menuCenter">

        <p className="sectionTitle">

          OUR MENU BENEFIT

        </p>

        <div className="menuItems">

          <MenuItem
            image={menu1}
            title="FRESH"
            description="Plays orand on inoorianties"
          />

          <MenuItem
            image={menu2}
            title="VITAMIN"
            description="Nisoen non prcens"
          />

          <MenuItem
            image={menu3}
            title="ORE ANIC"
            description="Towagelas weriuris "
          />

        </div>

      </div>

      {/* Right Part */}

      <div className="openingHours">

        <h3>OPENING HOURS</h3>

        <div className="hours">

          <span>Mondday</span>

          <span>17.00 cm x17</span>

        </div>

        <div className="hours">

          <span>Tlaueday</span>

          <span>13.60 cm x17</span>

        </div>

        <div className="hours">

          <span>Wednsseday</span>

          <span>19.00 km x11</span>

        </div>

        <div className="hours">

          <span>Thaneday</span>

          <span>13.00 cm x11</span>

        </div>


        <hr />

          <div className="quickLinksContainer">
          <p className="quickLinks">QUICK LINKS</p>
          <div className="footerNavLinks">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#pages">Pages</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>

    </section>

  )

}