import React from 'react'

import berries from '../assets/images/berries.png'

export const ImagineSection = () => {

  return (

    <section className="imagineSection">

      <div className="imagineText">

        <h2>
          Just imagine
          <br />
          seeds and
          <br />
          summer in gell
          <br />
          sunshine.
        </h2>

      </div>

      <div className="berryImage">

        <img
          src={berries}
          alt="Fresh Berries"
        />

      </div>

      <div className="benefitsCard">

        <p className="benefitSmallTitle">
         EBEE WOUS BENEFIT.
        </p>

        <h3>
         With a variety, delicious, fresh and healthy
        </h3>

        <p>
          FUOCROLL LO MOTION
        </p>

        <button  onClick={() => alert("Our chefs prepare fresh meals every day!")}>
          HEAD MORE
        </button>

      </div>

    </section>

  )

}