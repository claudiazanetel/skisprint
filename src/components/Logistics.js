import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

import viabilita from '../files/viabilita.jpg';


class Logistics extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage">
            <h1>VIABILITA'</h1>
            <p>La viabilità verrà modificata per permettere lo svolgimento della gara.<br></br>
            Lo schema rappresenta la situazione durante lo svolgimento della gara.</p>
            <img className="viabilita" src={viabilita} alt={viabilita}></img>
          </div>
          <Sidebar />
          <Patrocinio />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Logistics;