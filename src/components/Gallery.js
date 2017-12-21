import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";


class Gallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      years: [],
      year:""
    };
  }

  componentDidMount () {
    let years = this.state.years;
    for (let i = ((new Date()).getFullYear() - 1); i >= 2003 ; i--) { 
      years.push(i);
      this.setState({years});
    }
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage d-none d-md-block">
            <h1>GALLERY</h1>
            {
              this.state.years.map(year => {
                return (
                  <div className="manifestoDiv">
                    <span className="didascalia">{year}</span>
                    <img className="manifesto" src={require(`../files/gallery/${year}/manifesto${year}.jpg`)} />
                  </div>
                );
              })
            }
          </div>
          <div className="d-md-none">

          </div>
          <Sidebar />
          <Patrocinio />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Gallery;