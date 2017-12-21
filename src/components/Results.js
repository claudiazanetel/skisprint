import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Homepage.css";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Patrocinio from "./Patrocinio";
import Sponsors from "./Sponsors";
import YearResults from "./YearResults";

class Results extends Component {
  constructor (props) {
    super(props);
    this.state = {
      years: []
    };
  }

  componentDidMount () {
    let years = this.state.years;
    for (let i = 2003; i < (new Date()).getFullYear(); i++) { 
      years.push(i);
      this.setState({years});
    }
  }

  getEditions () {
    this.state.years.map(year => {
      console.log(year)
      return(
        <div className="card" key={year}>
          <div className="card-header" role="tab" id={`heading${year}`}>
            <h5 className="mb-0">
              <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${year}`} aria-expanded="true" aria-controls={`collapse${year}`}>
                {year}
              </a>
            </h5>
          </div>
          <div id={`collapse${year}`} className="collapse show" role="tabpanel" aria-labelledby={`heading${year}`}>
            <div className="card-block">
              {year}
            </div>
          </div>
        </div>
      );
    }
    );
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
                        <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${year}`} aria-expanded="false" aria-controls={`collapse${year}`}>
                          {index+1}° edizione {year}
                        </a>
                      </h4>
                    </div>
                    <div id={`collapse${year}`} className="collapse" role="tabpanel" aria-labelledby={`heading${year}`}>
                      <div className="card-block">
                        {year}
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