import React, { Component } from "react";

import poolPrimiero from '../assets/sponsor/pool.jpg';
import salomon from '../assets/sponsor/salomon.jpg';
import sportful from '../assets/sponsor/sportful.jpg';
import artigiani from '../assets/sponsor/artigiani.jpg';
import caseificio from '../assets/sponsor/caseificio.jpg';
import casseruraliprimiero from '../assets/sponsor/casseruraliprimiero.jpg';
import casserurali from '../assets/sponsor/casse_rurali_trentine.jpg';
import coop from '../assets/sponsor/coop.jpg';
import esco from '../assets/sponsor/esco.jpg';



class Sponsors extends Component {

  render() {
    return (
      <div className="col-xs-12 sponsorbox">
        <div className="col-xs-12">
          <h4>Sponsors</h4>
        </div>
        <div className="row sponsorRow">
          <div className="col-sm-4 col-xs-4 sponsorDiv">
            <a href="https://www.usprimiero.com/sponsor" target="_blank">
              <img className="sponsor" src={poolPrimiero} title="US primiero" alt="US primiero" />
            </a>
          </div>
          <div className="col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.salomon.com/" target="_blank">
              <img className="sponsor" src={salomon} title="Salomon" alt="Salomon" />
            </a>
          </div>
          <div className="col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.sportful.it" target="_blank">
              <img className="sponsor" src={sportful} title="Sportful" alt="Sportful" />
            </a>
          </div>
          <div className=" col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.primart.it/" target="_blank">
              <img className="sponsor" src={artigiani} title="Consorzio Artigiani Imprenditori Primiero" alt="Consorzio Artigiani Imprenditori Primiero" />
            </a>
          </div>
          <div className="col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.caseificioprimiero.com/" target="_blank">
              <img className="sponsor" src={caseificio} title="Caseificio Sociale" alt="Caseificio Sociale" />
            </a>
          </div>
          <div className="col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.crdolomiti.it/" target="_blank">
              <img className="sponsor" src={casseruraliprimiero} title="Cassa Rurale Dolomiti" alt="Cassa Rurale Dolomiti" />
            </a>
          </div>
          <div className="col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.casserurali.it/" target="_blank">
              <img className="sponsor" src={casserurali} title="Casse Rurali Trentine" alt="Casse Rurali Trentine" />
            </a>
          </div>
          <div className="col-sm-4 col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.saittn.it/fc/" target="_blank">
              <img className="sponsor" src={coop} title="Famiglia Cooperativa" alt="Famiglia Cooperativa" />
            </a>
          </div>
          <div className="col-sm-4 col-xs-4 sponsorDiv">
            <a href="http://www.escoprimiero.it/" target="_blank">
              <img className="sponsor" src={esco} title="Esco Primiero" alt="Esco Primiero" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
