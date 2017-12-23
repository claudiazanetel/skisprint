import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";
import YearGallery from "./YearGallery";

import loading from '../assets/loading.gif';

class Gallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      year:"",
      isEditionsSelected: false,
      imagesOfYear: [],
      posters: [],
      isLoading: true,
      isLoadingPosters: true
    };
    this.selectedGallery=this.selectedGallery.bind(this);
  }

  componentDidMount () {
    axios.get(`/api.php?endpoint=posters`)
      .then(response => {
        this.setState({posters: response.data.posters}, () => this.endLoadingPosters());
      });
  }

  selectedGallery(boolean) {
    if (boolean) {
      this.setState({isLoading: false});
    }
    this.setState({isEditionsSelected: boolean});
  }

  openGalleryByYear (year) {
    this.selectedGallery(true);
    this.setState(
      {year, isLoading: true},
      () => this.retrieveImages(year));
  }

  retrieveImages (year) {
    axios.get(`/api.php?endpoint=gallery&year=${year}`)
      .then(response => {
        this.setState({imagesOfYear: response.data.pictures}, () => this.endLoading());
      });
  }

  endLoading () {
    this.setState({isLoading: false});
  }

  endLoadingPosters () {
    this.setState({isLoadingPosters: false});
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          {
            !this.state.isEditionsSelected ?
              <div className="col-md-8 mainPage d-none d-md-block">
                <h1>GALLERY</h1>
                <div>
                  {this.state.isLoadingPosters ? 
                    <div className="loading">
                      <img src={loading} width="100" />
                    </div> : 
                    <div>
                      {
                        this.state.posters.map(poster => {
                          return (
                            <div className="manifestoDiv" key={poster.year} onClick={() => this.openGalleryByYear(poster.year)}>
                              <span className="didascalia">{poster.year}</span>
                              <img className="manifesto" src={poster.path} alt={poster.year}/>
                            </div>
                          );
                        })
                      }
                    </div>
                  }
                </div>
              </div> : <div className="col-md-8 mainPage d-none d-md-block">
                {
                  this.state.isLoading ? 
                    <div className="loading">
                      <img src={loading} width="100" />
                    </div> : 
                    <div> 
                      <YearGallery selectedGallery={this.selectedGallery} year={this.state.year} imagesOfYear={this.state.imagesOfYear}/>
                    </div>
                }
              </div>
          }
          {
            !this.state.isEditionsSelected ?
              <div className="d-md-none carouselDiv">
                {
                  this.state.isLoadingPosters ? 
                    <div className="loading">
                      <img src={loading} width="100" />
                    </div> : 
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner" role="listbox">
                        {
                          this.state.posters.map((poster, index) => {
                            if(index === 0) {
                              return (
                                <div className="carousel-item active" key={poster.year} onClick={() => this.openGalleryByYear(poster.year)}>
                                  <span className="didascalia">{poster.year}</span>
                                  <img className="d-block img-fluid" src={poster.path} alt={poster.year}/>
                                </div>
                              );
                            } else {
                              return (
                                <div className="carousel-item" key={poster.year} onClick={() => this.openGalleryByYear(poster.year)}>
                                  <span className="didascalia">{poster.year}</span>
                                  <img className="d-block img-fluid" src={poster.path} alt={poster.year}/>
                                </div>
                              );
                            }
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
                }
              </div> : 
              <div className="d-md-none">
                {
                  this.state.isLoading ? 
                    <div className="loading">
                      <img src={loading} width="100" />
                    </div> : 
                    <div> 
                      <YearGallery selectedGallery={this.selectedGallery} year={this.state.year} imagesOfYear={this.state.imagesOfYear}/>
                    </div>
                }
              </div>
          }


          <Sidebar />
          <Patrocinio />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Gallery;