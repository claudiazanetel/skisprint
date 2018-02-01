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
            <div className="news">
              <p className="datePost">27 dicembre 2017</p>
              <h4><a className="titlePost" href="https://www.usprimiero.com/home/16457_tricolore-numero-sei-per-pellegrino-noeckler-stuerz-debertolis-ed-e-tripudio-fiamme-oro-a-fiera-di-primiero-tn.html" target="_blank">TRICOLORE NUMERO SEI PER PELLEGRINO-NOECKLER, STUERZ-DEBERTOLIS ED E’ TRIPUDIO FIAMME ORO A FIERA DI PRIMIERO (TN)</a></h4>
              <p>Oggi 15.a Ski Sprint – Campionato Italiano Assoluto Team Sprint a Fiera di Primiero (TN)
                Federico Pellegrino e Dietmar Noeckler conquistano il sesto titolo tricolore in sette anni
                Giulia Stuerz – Ilaria Debertolis ed è ancora vittoria per le Fiamme Oro
                Prossimo obiettivo per l’US Primiero la Primiero Dolomiti Marathon del 7 luglio
                [<a href="https://www.usprimiero.com/home/16457_tricolore-numero-sei-per-pellegrino-noeckler-stuerz-debertolis-ed-e-tripudio-fiamme-oro-a-fiera-di-primiero-tn.html" target="_blank">Read more...</a>]</p>
            </div>
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

