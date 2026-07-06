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
        description="Healthy vegetables mixed with fresh ingredients."
      />

      <ProductCard
        image={orange}
        title="$19,99,90,99E"
        description="Natural orange juice packed with vitamins."
      />

      <ProductCard
        image={berrysalad}
        title="SFIELY TUN DRENARD"
        description="A delicious combination of seasonal fruits."
      />

    </section>

  )
}