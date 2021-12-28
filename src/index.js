
import React from 'react'
import { StrictMode } from "react";
import ReactDOM from 'react-dom'
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";
import "./styles.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
     <Provider store={store}>
        <App/>
     </Provider>
  </StrictMode>,
  rootElement
);

