import React from 'react'
import orangecut from '../assets/images/orangecut.png'
import orangejuice from '../assets/images/orangejuice.png'

export const OrangeBenefit = () => {
  return (
    <section className="orangeBenefit">

      <div className="orangeText">

        <h2>Orange Benefit</h2>

         <div className="orangecut">

        <img src={orangecut} alt="Orange cut in half"/>

      </div>

        <p>Jus1 reogine eseds and summer in golled quasiunp</p>

        <button>Learn More</button>

      </div>

      <div className="orangejuice">

        <img src={orangejuice} alt="Orange Drink"/>

      </div>

    </section>
  )
}