import React, { Component } from 'react';
import './Homepage.css';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5 ml-auto contacts">
            <p className="titleFooter"><strong>CONTATTI</strong></p>
            <p><strong>US PRIMIERO ASD</strong></p>
            <p>Via Dante 6 - Fiera di Primiero <br></br>
            38054 Primiero San Martino di Castrozza (TN)
            </p>
            <a href="mailto:info@usprimiero.com?subject=Info-Skisprint">info@usprimiero.com</a><br></br>
            <a href="mailto:scinordico@usprimiero.com?subject=Info-Skisprint">scinordico@usprimiero.com</a>
          </div>
          <div className="col-sm-5 ml-auto contacts">
            <p className="titleFooter"><strong>LINK</strong></p>
            <a href="http://www.usprimiero.com" target="_blank">US Primiero</a><br></br>
            <a href="http://www.newspower.it/" target="_blank">Ufficio stampa Newspower</a><br></br>
            <a href="http://www.sanmartino.com" target="_blank">APT San Martino</a><br></br>
            <a href="https://www.meteotrentino.it" target="_blank">Meteo Trentino</a><br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

