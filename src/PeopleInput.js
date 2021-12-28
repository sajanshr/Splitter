import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { bindActionCreators } from "redux";
import * as actionCreator from "./ActionCreator";

function PeopleInput() {
  const { peopleNumber } = useSelector((state) => ({
    peopleNumber: state.reducerCount.peopleNumber
  }));

  const dispatch = useDispatch();
  const { setPeople } = bindActionCreators(actionCreator, dispatch);
  // console.log(peopleNumber);

  return (
    <div className="billInput">
      <label for="number-of-people">Number of People</label>
      <input
        type="text"
        id="number-of-people"
        value={peopleNumber}
        onChange={(e) => setPeople(e.target.value)}
        name="number-of-people"
      />
    </div>
  );
}
export default PeopleInput;
