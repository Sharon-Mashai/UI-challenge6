

import './global.css'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OrangeBenefit } from './components/OrangeBenefit'
import { ProductSection } from './components/ProductSection'
import { ImagineSection } from './components/ImagineSection'
import { MenuBenefit } from './components/MenuBenefit'




const App = () => {

  return (
    <>

    <div className="app">

      <Header />

       {/* Home Section */}
        <div id="home">
          <Hero />
        </div>

        {/* Menu Section */}
        <div id="menu">
          <ProductSection />
        </div>

        {/* Pages Section */}
        <div id="pages">
          <OrangeBenefit />
        </div>

        {/* Blog Section */}
        <div id="blog">
          <ImagineSection />
        </div>

        {/* Contact Us Section */}
        <div id="contact">
          <MenuBenefit />
        </div>
      </div>
  
    </>

  )

}

export default App