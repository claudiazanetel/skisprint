import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OtherPages.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";
import YearResults from "./YearResults";

import loading from '../assets/loading.gif';

class Results extends Component {
  constructor (props) {
    super(props);
    this.state = {
      years: [],
      results: {},
      selectedYear: false
    };
  }

  componentDidMount () {
    let years = this.state.years;
    for (let i = ((new Date()).getFullYear() - 1); i >= 2003 ; i--) { 
      years.push(i);
      this.setState({years});
    }
  }

  retrieveResults (year, e) {
    if (e.target.className !== "collapsed") {
      this.setState({results: {}, selectedYear: false});
      axios.get(`http://192.168.33.10/api.php?endpoint=rankings&year=${year}`)
        .then(response => {
          this.setState({results: response.data}, () => this.checkResults());
        });
    }
  }

  checkResults () {
    if (this.state.results.male.length > 0) {
      this.setState({selectedYear: true});
    }
  }
  render() {
    return (
      <div className="container">
        <Menu />
        <div className="row">
          <div className="col-md-8 mainPage">
            <h1>CLASSIFICHE</h1>
            <div id="accordion" role="tablist" aria-multiselectable="true">
              {this.state.years.map((year, index) => {
                return(
                  <div className="card" key={year}>
                    <div className="card-header" role="tab" id={`heading${year}`}>
                      <h4 className="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={`#collapse${year}`}
                          aria-expanded="false"
                          aria-controls={`collapse${year}`}
                          onClick= {(e) => this.retrieveResults(year, e)}>
                          {this.state.years.length - index}° edizione {year}
                        </a>
                      </h4>
                    </div>
                    <div id={`collapse${year}`} className="collapse" role="tabpanel" aria-labelledby={`heading${year}`}>
                      <div className="card-block">
                        {
                          this.state.selectedYear ?
                            <YearResults results={this.state.results} />
                            : 
                            <div className="loading">
                              <img src={loading} width="100" />
                            </div>
                        }

                      </div>
                    </div>
                  </div>
                );
              }
              )}
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

export default Results;