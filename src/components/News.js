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
      posts: []
    };
  }

  componentDidMount () {
    axios.get(`/api.php?endpoint=news`)
      .then(response => {
        console.log(response.data.posts);
        this.setState({posts: response.data.posts});
      });
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 newsPage">
            <h1>NEWS</h1>
            {
              this.state.posts.map(post => {
                return (
                  <div className="news" key={post.title}>
                    <p className="datePost">{post.date}</p>
                    <h4><a className="titlePost" href={post.link} target="_blank">{post.title}</a></h4>
                    <p>{post.description.replace(/[[]?&#[0-9]+;[\]]?/g,'')} [<a href={post.link} target="_blank">Read more...</a>]</p>
                  </div>
                );
              })
            }
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

