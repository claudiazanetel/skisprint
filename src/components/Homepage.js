import React, { Component } from "react";
import "./Homepage.css";
import Menu from "./Menu"

class Homepage extends Component {

  test() {
    
  }

  render() {
    return (
        <div className="App">
            <Menu />
            <p>Homepage</p>
        </div>
    );
  }
}

export default Homepage;