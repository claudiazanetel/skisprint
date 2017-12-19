import React, { Component } from "react";
import "./Homepage.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

class Homepage extends Component {

  test() {
    
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8">
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Homepage;