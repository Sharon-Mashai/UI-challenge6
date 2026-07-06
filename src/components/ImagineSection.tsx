import React from 'react'

import berries from '../assets/images/berries.png'

export const ImagineSection = () => {

  return (

    <section className="imagineSection">

      <div className="imagineText">

        <p className="sectionTitle">
          Healthy Food
        </p>

        <h2>
          Just imagine
          <br />
          seeds and
          <br />
          summer in
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
          OUR BENEFITS
        </p>

        <h3>
          Fresh &
          <br />
          Healthy
        </h3>

        <p>
          We prepare healthy meals using
          fresh fruits and vegetables
          every single day.
        </p>

        <button>
          Read More
        </button>

      </div>

    </section>

  )

}