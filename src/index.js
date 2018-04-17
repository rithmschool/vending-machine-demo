import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <VendingMachine />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
