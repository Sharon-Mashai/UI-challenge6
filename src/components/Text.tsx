import React from 'react'
import fruitsalad from '../assets/images/fruitsalad.png'

export const Text = () => {
    
  return (
    <section className="txt">

      <div className="text">

        <p className="premium">
          Premium Restaurant
        </p>

        <h1>
          Anida
          <br />
          Dedelay
        </h1>

        <h3> BEST HEALTHY SALAD SERVED IN PUT RESTUARANT</h3>

        <button> LEARN MORE </button>

      </div>

      <div className="heroImage">

        <img src={fruitsalad}  alt="Healthy Salad" />

      </div>

    </section>
  )
}