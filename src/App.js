import React from "react";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";

const App = props => (
  <div>
    <Route path="/" exact component={VendingMachine} />
    <Route path="/soda" exact component={VendingMachine} />
    <Route path="/chips" exact component={Chips} />
    <Route path="/candy" exact component={VendingMachine} />
    <Route path="/sardines" exact component={Sardines} />
  </div>
);

export default App;
