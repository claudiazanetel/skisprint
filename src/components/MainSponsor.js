import React, { Component } from "react";

import apt from '../assets/sponsor/apt.jpg';
import trentino from '../assets/sponsor/trentino.png';
import primieroEnergia from '../assets/sponsor/primieroenergia.jpg';


class MainSponsor extends Component {

  render() {
    return (
      <div className="col-sm-12 sidebox mainSponsors">
        <div className="col-sm-12 mainSponsorDesktop">
          <div className="col-sm-12 singleSponsor">
            <a href="http://www.sanmartino.com/" target="_blank">
              <img  className="mainSponsor" src={apt} title="APT primiero" alt="APT primiero" />
            </a>
          </div>
          <div className="col-sm-12 singleSponsor">
            <a href="http://www.trentino.to/" target="_blank">
              <img className="mainSponsor" src={trentino} title="Trentino" alt="Trentino" />
            </a>
          </div>
          <div className="col-sm-12 singleSponsor">
            <a href="http://www.primieroenergia.com/" target="_blank"> 
              <img className="mainSponsor" src={primieroEnergia} title="Primiero Energia" alt="primiero energia" />
            </a>
          </div>
        </div>
        <div className="col-sm-12 mainSponsorMobile">
          <a href="http://www.sanmartino.com/" target="_blank">
            <img  className="mainSponsor" src={apt} title="APT primiero" alt="APT primiero" />
          </a>
          <a href="http://www.trentino.to/" target="_blank">
            <img className="mainSponsor" src={trentino} title="Trentino" alt="Trentino" />
          </a>
          <a href="http://www.primieroenergia.com/" target="_blank"> 
            <img className="mainSponsor" src={primieroEnergia} title="Primiero Energia" alt="primiero energia" />
          </a>
        </div>
      </div>
    );
  }
}

export default MainSponsor;
