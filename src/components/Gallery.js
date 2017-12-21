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
          <div className="d-md-none carouselDiv">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block img-fluid" src={require(`../files/gallery/2016/manifesto2016.jpg`)} alt="2016"/>
                </div>
                {
                  this.state.years.map(year => {
                    return (
                      <div class="carousel-item" key={year}>
                        <span className="didascalia">{year}</span>
                        <img class="d-block img-fluid" src={require(`../files/gallery/${year}/manifesto${year}.jpg`)} alt={year}/>
                      </div>
                    );
                  })
                }

              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
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

export default Gallery;