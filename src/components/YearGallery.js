import React, { Component } from "react";
import "./OtherPages.css";
import axios from 'axios';



class YearGallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
 
  backInGallery () {
    this.props.selectedGallery(false);
  }

  render() {

    return (
      <div className="">
        <h1>{this.props.year}</h1>
        <p className="return" onClick={() => this.backInGallery()}>Ritorna alla gallery</p>
        {
          this.props.imagesOfYear.map(image => {
            return (
              <div className="galleryDiv" key= {image}>
                <img src={image} width="100" alt={image}/>
              </div>
            );
          })
        }
      </div>

    );
  }
}

export default YearGallery;

