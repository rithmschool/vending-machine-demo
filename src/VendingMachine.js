import React, { Component } from "react";
import "./VendingMachine.css";
import machine from "./machine.png";
import { Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${machine})` }}
      >
        <div className="content">
          <h1>hello i am a vending machine. what would you like to eat?</h1>
        </div>
        <div className="content">
          <h1>
            <Link to="/soda">soda</Link>
          </h1>
          <h1>
            <Link to="/chips">chips</Link>
          </h1>
          <h1>
            <Link to="/candy">candy</Link>
          </h1>
          <h1>
            <Link to="/sardines">fresh sardines</Link>
          </h1>
        </div>
      </div>
    );
  }
}

export default VendingMachine;
