import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";
import YearGallery from "./YearGallery";

class Gallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      years: [],
      year:"",
      selectedYear: false,
      imagesOfYear: []
    };
    this.selectedGallery=this.selectedGallery.bind(this);
  }

  componentDidMount () {
    let years = this.state.years;
    for (let i = ((new Date()).getFullYear() - 1); i >= 2003 ; i--) { 
      years.push(i);
      this.setState({years});
    }
  }

  selectedGallery(boolean) {
    this.setState({selectedYear: boolean});
  }

  openGalleryByYear (year) {
    this.setState({year});
    axios.get(`/api.php?endpoint=gallery&year=${year}`)
      .then(response => {
        this.setState({imagesOfYear: response.data.pictures}, this.selectedGallery(true));
      });
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          {
            !this.state.selectedYear ?
              <div className="col-md-8 mainPage d-none d-md-block">
                <h1>GALLERY</h1>
                {
                  this.state.years.map(year => {
                    return (
                      <div className="manifestoDiv" key={year} onClick={() => this.openGalleryByYear(year)}>
                        <span className="didascalia">{year}</span>
                        <img className="manifesto" src={require(`../files/gallery/${year}/manifesto${year}.jpg`)} />
                      </div>
                    );
                  })
                }
              </div> :
              <div className="col-md-8 mainPage d-none d-md-block"> 
                <YearGallery selectedGallery={this.selectedGallery} year={this.state.year} imagesOfYear={this.state.imagesOfYear}/>
              </div>
          }

          <div className="d-md-none carouselDiv">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" onClick={() => this.openGalleryByYear('2016')}>
                  <span className="didascalia">2016</span>
                  <img className="d-block img-fluid" src={require(`../files/gallery/2016/manifesto2016.jpg`)} alt="2016"/>
                </div>
                {
                  this.state.years.map(year => {
                    return (
                      <div className="carousel-item" key={year} onClick={() => this.openGalleryByYear(year)}>
                        <span className="didascalia">{year}</span>
                        <img className="d-block img-fluid" src={require(`../files/gallery/${year}/manifesto${year}.jpg`)} alt={year}/>
                      </div>
                    );
                  })
                }

              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
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