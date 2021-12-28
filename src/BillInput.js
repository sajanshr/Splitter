import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { bindActionCreators } from "redux";
import * as actionCreator from "./ActionCreator";

function BillInput() {
  const { billInput } = useSelector((state) => ({
    billInput: state.reducerCount.billAmount
  }));

  console.log(billInput);

  const dispatch = useDispatch();

  const { setBill } = bindActionCreators(actionCreator, dispatch);

  return (
    <div className="billInput">
      <label for="bill">Bill</label>
      <input
        type="text"
        id="tipValue"
        value={billInput}
        onChange={(e) => setBill(e.target.value)}
        name="bill"
      />
    </div>
  );
}
export default BillInput;
