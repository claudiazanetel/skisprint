import React, { Component } from "react";
import "./Homepage.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Sponsors from "./Sponsors";

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
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Homepage;