import React, { Component } from "react";
import lays from "./lays.png";
import "./Chips.css";
import { Link } from "react-router-dom";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState(prevState => ({
      bags: [...prevState.bags, { x, y }]
    }));
  }

  render() {
    const bags = this.state.bags.map(bag => (
      <img
        src={lays}
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      />
    ));
    return (
      <div className="Chips">
        <div className="message">
          <h1>bags eaten: {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>nom nom nom</button>
          <h1>
            <Link to="/">go back</Link>
          </h1>
        </div>
        {bags}
      </div>
    );
  }
}

export default Chips;
