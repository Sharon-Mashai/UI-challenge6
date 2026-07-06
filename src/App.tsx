import React from "react"
import {Header} from "./components/Header";
import { Text} from "./components/Text";
import "./global.css";
import { OrangeBenefit } from "./components/OrangeBenefit";
import { ProductSection } from "./components/ProductSection";
import { ImagineSection } from "./components/ImagineSection";
import { MenuBenefit } from "./components/MenuBenefit";

const App = () => {

  return (
    <div className="container">

       <Header/> 
       <Text/>
       <OrangeBenefit/>
       <ProductSection/>
       <ImagineSection/>
       <MenuBenefit/>
    
    </div>


  );
}

export default App;