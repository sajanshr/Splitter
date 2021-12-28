import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { bindActionCreators } from "redux";
import * as actionCreator from "./ActionCreator";

export default function TipPercentage(props) {
//   const { percentage, handleTip, selectedTip } = props;
const {percentage} = props
const { selectedTip  } = useSelector((state) => ({
    selectedTip: state.reducerCount.selectedTip
  }));

  const dispatch = useDispatch();

  const { setPercentage } = bindActionCreators(actionCreator, dispatch);


  function handleClass(){
    if(selectedTip === percentage){
      return "tip-active tipButton";
    }else{
      return "tipButton";
    }
  }

  return (
    <button className={handleClass()} onClick={()=>setPercentage(percentage)}>
      {percentage}%
    </button>
  );
}