import React, { Component } from "react";
import "./OtherPages.css";



class YearGallery extends Component {
  constructor (props) {
    super(props);
    this.state = {
      images: {}
    };
  }

  componentDidMount () {
    console.log(`../files/gallery/${this.props.year}`)
    let images = this.importAll(require.context(`../files/gallery/2016`, false, /\.(png|jpe?g|svg)$/));
    this.setState({images});
  }

  importAll (r) {
    let images = {};
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    return images;
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
          Object.keys(this.state.images).map(index => {
            return (
              <div className="galleryDiv" key= {index}>
                <img src={this.state.images[index]} width="100" />
              </div>
            );
          })
        }
      </div>

    );
  }
}

export default YearGallery;

