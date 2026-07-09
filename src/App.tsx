

import './global.css'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OrangeBenefit } from './components/OrangeBenefit'
import { ProductSection } from './components/ProductSection'
import { ImagineSection } from './components/ImagineSection'
import { MenuBenefit } from './components/MenuBenefit'


const App = () => {

  return (

    <div className="app">

      <Header />

      <Hero />

      <OrangeBenefit />

      <ProductSection />

      <ImagineSection />

      <MenuBenefit />


    </div>

  )

}

export default App