import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";


class Staff extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 staff">
            <h1>STAFF</h1>
            <p><strong>Organizzazione</strong>: A.s.d. Unione Sportiva Primiero<br /></p>
            <ul>
              <li>Luigi Zanetel</li>
              <li>Franco Orler</li>
              <li>Gianantonio Zanetel</li>
              <li>Paolo Debertolis</li>
              <li>Antonio Scalet</li>
              <li>Claudio Zanetel</li>
              <li>Bettega Camillo</li>
              <li>Giuseppe Giovanelli</li>
              <li>Tommaso Giovanelli</li>
            </ul>
            <p><strong>Ufficio Stampa</strong>: Mario Facchini<br /></p>
            <p><strong>Speaker Ufficiale</strong>: Paolo Malfer<br /></p>
            <p><strong>Riprese TV</strong>: Sirio Film - <a href="http://www.siriofilm.com/" target="_blank">siriofilm.com</a><br /></p>
            <p><strong>Impianti Suono Audio</strong>:  Gest snc Trento - <a href="http://www.gest-suonoluce.it" target="_blank">gest-suonoluce.it</a><br /></p>
            <p><strong>Logistica</strong>: Primiero Iniziative - <a href="http://www.primieroiniziative.it" target="_blank">primieroiniziative.it</a><br /></p>
            <p><strong>Sito Internet</strong>: Daniele Orler - Claudia Zanetel<br /><br /></p>
            <p><strong>Un particolare ringraziamento per la collaborazione a: </strong></p>
            <ul>
              <li>Enti ed Istituzioni</li>
              <li>Sponsors</li>
              <li>Volontari</li>
              <li>Corpo Consorziale Vigili del Fuoco Volontari di Primiero</li>
              <li>Gruppo NU.VOL.A Primiero Vanoi</li>
            </ul>
          </div>
          <Sidebar />
          <Patrocinio />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Staff;
