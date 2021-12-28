import "./styles.css";
import React from "react";
import CalculateBody from "./Calculate";
import TipInput from "./TipInput";


export default function App() {


  return (
    <div className="App">
      {console.log("Inside APP DIV!")}
      <div className="tipCalculator">
        <TipInput/>

        <CalculateBody/>
      </div>
    </div>
  );
}
