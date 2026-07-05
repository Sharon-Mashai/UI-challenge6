import React from 'react'

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

        <h3>
          Best Healthy Salad Served
        </h3>

        <button>
          Learn More
        </button>

      </div>

      <div className="heroImage">

        <img
          src="/images/hero.png"
          alt="Healthy Salad"
        />

      </div>

    </section>
  )
}