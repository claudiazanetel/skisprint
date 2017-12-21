import React, { Component } from "react";
import axios from 'axios';
import "./OtherPages.css";


class YearResults extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="ranking">
        <h4 className="rankingCategory">Elite M</h4>
        <ol>
          {
            this.props.results.male.map(rank => {
              return(
                <li key={rank}>{rank}</li>
              );
            })
          }
        </ol>
        { this.props.results.female.length > 0 ? 
          <div>
            <h4 className="rankingCategory">Elite F</h4>
            <ol>
              {
                this.props.results.female.map(rank => {
                  return(
                    <li key={rank}>{rank}</li>
                  );
                })
              }
            </ol>
          </div> : null
        } 

      </div>
    );
  }
}

export default YearResults;
