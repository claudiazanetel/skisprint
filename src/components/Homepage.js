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
{/*               <h1>PROGRAMMA</h1>
              <p className="programm"><span className="time">14.00: </span>Qualifiche Ski Sprint Young</p>
              <p className="programm"><span className="time">15.00: </span>Batterie Team Sprint</p>
              <p className="programm"><span className="time">16.45: </span>Finali Ski Sprint Young</p>
              <p className="programm"><span className="time">17.30: </span>Finali Team Sprint</p> */}
              <p><strong>La gara sarà trasmessa in differita su Rai Sport dalle ore 00.15 e con replica il 27 dicembre alle ore 21.30.</strong></p>
            </div>
            <div className="">
              <h4 className="titleHomepage">Highlights dell'edizione 2017</h4>
              <video width="95%" controls>
                <source src="https://www.broadcaster.it/video/mp4/20171226_ski_sprint_primiero_hl.mp4" type="video/mp4"/>
              </video>
{/*               <h4 className="titleHomepage">Interviste 2016</h4>
              <video width="95%" controls>
                <source src="https://www.broadcaster.it/video/mp4/20161226_interviste_skisprint.mp4" type="video/mp4"/>
              </video> */}
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