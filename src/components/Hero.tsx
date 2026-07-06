import React from 'react'

import fruitsalad from '../assets/images/fruitsalad.png'

export const Hero = () => {
  return (

    <section className="hero">

      <div className="heroText">

        <p className="premium">
          Premium Restaurant
        </p>

        <h1>
          Anida
          <br />
          Dedelay
        </h1>

        <h3>
          BEST HEALTHY SALAD SERVED
          <br />
          IN OUR RESTAURANT
        </h3>

        <button>
          Learn More
        </button>

      </div>

      <div className="heroImage">

        <img
          src={fruitsalad}
          alt="Healthy Salad"
        />

      </div>

    </section>

  )
}