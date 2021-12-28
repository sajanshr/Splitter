import { createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";



const initalState = {

  // percentage: 0,
  peopleNumber: 0,
  billAmount: 0,
  selectedTip: 0
};

function reducerCount(state = initalState, action) {
  switch (action.type) {
  

    case "SET_BILL_AMOUNT":
      console.log("inside reducer " + action.payload);

      return { ...state, billAmount: action.payload };
    case "SET_PEOPLE_NUMBER":
      return { ...state, peopleNumber: action.payload };
    case "SET_PERCENTAGE":
      console.log("inside reducer " + action.payload);

      return { ...state, selectedTip: action.payload };

    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({ reducerCount }),
  composeWithDevTools(applyMiddleware(thunk)),
  


);
