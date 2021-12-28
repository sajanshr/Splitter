import React from "react";
import "./styles.css";
import TipPercentage from "./TipPercentage";
import BillInput from "./BillInput";
import PeopleInput from "./PeopleInput";

const TipInput = () => {
  const tip = [5, 10, 15, 25, 50, 80];
  return (
    <div className="tipInput">
      <BillInput/>
      <div className="tipPercentages">
        {tip.map((i) => {
          return <TipPercentage percentage={i}/>;
        })}
      </div>
      <PeopleInput/>  

    </div>
  );
};

export default TipInput;
