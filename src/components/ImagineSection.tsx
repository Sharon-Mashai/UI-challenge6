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
          src={berries} alt="Fresh Berries"
        />

      </div>

      <div className="benefitsCard">

        <h3>EBEE WOUS BENEFIT</h3>

        <p>
           With a variety, delicious, fresh and healthy
           
        </p>
        <p>
            FUOCROLL LO MOTION

        </p>

        <button>HEAD MORE</button>

      </div>

    </section>
  )
}