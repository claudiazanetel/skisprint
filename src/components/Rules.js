import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

import regolamentoTeamSprint from '../files/regolamento2017.pdf';
import regolamentoYoungSprint from '../files/regolamento.young2017.pdf';

class Rules extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage">
            <h1>REGOLAMENTI 2017</h1>
            <div className="row rules">
              <div className="col-sm-6">
                <h4>Download</h4>
                <a href={regolamentoTeamSprint} download="regolamentoTeamSprint2017">Regolamento Team Sprint 2017</a><br></br>
                <a href={regolamentoYoungSprint} download="regolamentoYoungSprint2017">Regolamento Ski Sprint Young 2017</a><br></br>
              </div>
              <div className="col-sm-6">
                <h4>Contatti</h4>
                <a href="http://www.usprimiero.com" target="_blank">usprimiero.com</a><br></br>
                <a href="mailto:info@usprimiero.com?subject=Info-Skisprint">email</a>
              </div>
              <div className="col-sm-12 pdf d-none d-md-block">
                <embed src={regolamentoTeamSprint} width="80%" height="375"/>
                <embed src={regolamentoYoungSprint} width="80%" height="375"/>
              </div>
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

export default Rules;
