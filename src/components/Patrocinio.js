import React, { Component } from "react";

import regione from '../assets/sponsor/patrocinio/regione.jpg';
import pat from '../assets/sponsor/patrocinio/pat.jpg';
import comunita from '../assets/sponsor/patrocinio/comunita.jpg';
import primieroSMC from '../assets/sponsor/patrocinio/primieroSMC.png';
import mezzano from '../assets/sponsor/patrocinio/mezzano.jpg';
import imer from '../assets/sponsor/patrocinio/imer.jpg';
import nuvola from '../assets/sponsor/patrocinio/nuvola.jpg';
import vigilifuoco from '../assets/sponsor/patrocinio/vigilifuoco.jpg';
import bimbrenta from '../assets/sponsor/patrocinio/bimbrenta.png';



class Patrocinio extends Component {

  render() {
    return (
      <div className="col-xs-12 sponsorbox">
        <div className="col-xs-12">
          <div className="col-xs-12">
            <h4>con il patrocinio</h4>
          </div>
          <div className="row patrocinioRow">
            <div className="col-sm-4 col-xs-4 patrocinioDiv">
              <img  className="patrocinio" src={regione} alt="regione" />
            </div>
            <div className="col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={pat} alt="pat" />
            </div>
            <div className="col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={comunita} alt="comunita" />
            </div>
            <div className=" col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={primieroSMC} alt="primieroSMC" />
            </div>
            <div className="col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={imer} alt="imer" />
            </div>
            <div className="col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={mezzano} alt="mezzano" />
            </div>
            <div className="col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={nuvola} alt="nuvola" />
            </div>
            <div className="col-sm-4 col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={vigilifuoco} alt="vigilifuoco" />
            </div>
            <div className="col-sm-4 col-xs-4 patrocinioDiv">
              <img className="patrocinio" src={bimbrenta} alt="bimbrenta" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patrocinio;