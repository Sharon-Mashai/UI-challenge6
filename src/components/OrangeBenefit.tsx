import React from 'react'

import orangecut from '../assets/images/orangecut.png'
import orangejuice from '../assets/images/orangejuice.png'

export const OrangeBenefit = () => {
  return (

    <section className="orangeBenefit">

      <div className="orangeLeft">

        <h2>
          Orange Benefit
        </h2>

        <div className="orangeInfo">

          <img
            src={orangecut}
            alt="Orange"
          />

          <div className="orangeContent">

            <p>
              Jus1 reogine eseds and summer 
            </p>

            <p>
               quasiunp.
            </p>

            <button  onClick={() => alert("Oranges contain potassium and flavonoids, which work together to regulate blood pressure and help lower LDL cholestero")}>
              LEARN MORE
            </button>

          </div>

        </div>

      </div>

      <div className="orangeRight">

        <img
          src={orangejuice}
          alt="Orange Juice"
        />

      </div>

    </section>

  )
}