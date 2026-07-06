import React from "react"
import {Header} from "./components/Header";
import { Text} from "./components/Text";
import "./global.css";
import { OrangeBenefit } from "./components/OrangeBenefit";
import { ProductSection } from "./components/ProductSection";
import { ImagineSection } from "./components/ImagineSection";

const App = () => {

  return (
    <div className="container">

       <Header/> 
       <Text/>
       <OrangeBenefit/>
       <ProductSection/>
       <ImagineSection/>
    
    </div>


  );
}

export default App;