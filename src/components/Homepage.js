import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Homepage.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

class Homepage extends Component {

  test() {
    
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage">
            <div className="d-md-none">
              <h1>PROGRAMMA</h1>
              <p className="programm"><span className="time">14.00: </span>Qualifiche Ski Sprint Young</p>
              <p className="programm"><span className="time">15.00: </span>Batterie Team Sprint</p>
              <p className="programm"><span className="time">16.45: </span>Finali Ski Sprint Young</p>
              <p className="programm"><span className="time">17.30: </span>Finali Team Sprint</p>
            </div>
          </div>
          <Sidebar />
          <Patrocinio />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Homepage;