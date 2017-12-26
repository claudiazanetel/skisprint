import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

// import iscrittiTeamSprint from '../files/regolamento2017.pdf';
import iscrittiYoungSprint from '../files/ordini_partenza_young.pdf';

class Iscritti extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage">
            <h1>LISTE ISCRITTI 2017</h1>
            {/* <p>Al momento non sono disponibili</p> */}
            <h4>Download</h4>
            {/* <a href={iscrittiTeamSprint} download="iscrittiTeamSprint">Lista Iscritti Team Sprint 2017</a><br></br> */}
            <a href={iscrittiYoungSprint} target="_blank">Lista Iscritti Ski Sprint Young 2017</a><br></br>
            <div className="col-sm-12 pdf d-none d-md-block">
              {/* <embed src={iscrittiTeamSprint} width="80%" height="375"/> */}
              <embed src={iscrittiYoungSprint} width="80%" height="375"/>
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

export default Iscritti;