

import berries from '../assets/images/berries.png'

export const ImagineSection = () => {

  return (

    <section className="imagineSection">

      <div className="imagineText">

        <h2>Just imagine <br/> seeds and<br/> summer in gell <br/> sunshine.</h2>

      </div>

      <div className="berryImage">

        <img
          src={berries}
          alt="Fresh Berries"
        />

      </div>

      <div className="benefitsCard">

        <h4 className="benefitSmallTitle">
         EBEE WOUS 
        </h4>
        <p className='benefit-par'>
           BENEFIT.
        </p>

        <h3>
         With a variety and delicious 
        </h3>

        <p className='benefit-text'>
          FUOCROLL LO MOTION
        </p>

        <button className='benefitButton' onClick={() => alert("Our chefs prepare fresh meals every day!")}>
          HEAD MORE
        </button>

      </div>

    </section>

  )

}