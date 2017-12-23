import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";

import loading from '../assets/loading.gif';

class News extends Component {
  constructor (props) {
    super(props);
    this.state = {
      news: {}
    };
  }

  componentDidMount () {
    axios.get(`/api.php?endpoint=news`)
      .then(response => {
        console.log(response.data);
        this.setState({news: response.data});
      });
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage">
            <h1>NEWS</h1>
            <div className="news">
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

export default News;