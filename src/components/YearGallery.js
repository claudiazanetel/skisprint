import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[index] = r(item);
  });
  return images;
}

const images = importAll(require.context('../files/gallery/2016', false, /\.(png|jpe?g|svg)$/));


class Results extends Component {
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
          <div className="col-md-8 mainPage">
            <h1>GALLERY</h1>
            <img src={images[1]} />
          </div>
          <Sidebar />
          <Patrocinio />
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Results;