import React from "react"
import {Header} from "./components/Header";
import { Text} from "./components/Text";
import "./global.css";
import { OrangeBenefit } from "./components/OrangeBenefit";
import { ProductSection } from "./components/ProductSection";

const App = () => {

  return (
    <div className="container">

       <Header/> 
       <Text/>
       <OrangeBenefit/>
       <ProductSection/>
    
    </div>


  );
}

export default App;