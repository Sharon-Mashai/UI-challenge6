import React from 'react'

import { ProductCard } from './ProductCard'

import orangefruit from '../assets/images/orangefruit.png'
import orange from '../assets/images/orange.png'
import berrysalad from '../assets/images/berrysalad.png'

export const ProductSection = () => {

  return (

    <section className="productSection">

      <ProductCard

        image={orangefruit}

        title="ARCU VOLUT FAT VITAE"

        description="Phesties Igeart"

      />

      <ProductCard

        image={orange}

        title="$19,99,90,99E"

        description="Orviste past bronps"

      />

      <ProductCard

        image={berrysalad}

        title="SFIELY TUN DRENARD"

        description="Ongand suniers"

      />

    </section>

  )

}