import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

import percorso from '../files/percorso.jpg';


class Course extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage">
            <h1>PERCORSO 2017</h1>
            <img className="percorso" src={percorso} alt={percorso}></img>
          </div>
          <Sidebar />
          <Patrocinio />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Course;