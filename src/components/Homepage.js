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
              {/* <p><strong>La gara sarà trasmessa in differita su Rai Sport dalle ore 00.15 e con replica il 27 dicembre alle ore 21.30.</strong></p> */}
            </div>
            <div className="">
              <div className="video">
                <h4 className="titleHomepage">Highlights dell'edizione 2017</h4>
                <video width="100%" controls>
                  <source src="https://www.broadcaster.it/video/mp4/20171226_ski_sprint_primiero_hl.mp4" type="video/mp4"/>
                </video>
              </div>
              <div className="video">
                <h4 className="titleHomepage">Interviste 2017</h4>
                <video width="100%" controls>
                  <source src="https://www.broadcaster.it/video/mp4/20171226_ski_sprint_primiero_intv_sky.mp4" type="video/mp4"/>
                </video>
              </div>
              <div className="video">
                <h4 className="titleHomepage">Preparazione Skisprint 2017</h4>
                <div className="fbVideo">
                  <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fusprimieroscinordico%2Fvideos%2F783035788546466%2F&show_text=0&width=560" width="95%" height="250" scrolling="no" frameorder="0" allowtransparency="true" allowFullScreen="true"></iframe>
                </div>
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

export default Homepage;