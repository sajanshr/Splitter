import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Amount from "./Amount";

function CalculateBody() {
  const {billAmount} = useSelector((state) => ({
    billAmount: state.reducerCount.billAmount
  }));
  const {peopleNumber} = useSelector((state) => ({
    peopleNumber: state.reducerCount.peopleNumber
  }));
  const {tipPercent} = useSelector((state) => ({
    tipPercent: state.reducerCount.selectedTip
  }));



  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);

  const handleOnSubmit = () => {
    let tip = (billAmount * tipPercent * 0.01) / peopleNumber;
    setTipPerPerson(tip);
    setAmountPerPerson(billAmount / peopleNumber + tip);
  };

  return (
    <div className="calculatebody">
      <Amount title="Tip Amount" amount={tipPerPerson} />
      <Amount title="Total" amount={amountPerPerson} />
      <button className="btnsubmit" onClick={handleOnSubmit}>
        Submit
      </button>
    </div>
  );
}
export default CalculateBody;
