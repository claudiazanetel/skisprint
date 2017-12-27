import React, { Component } from "react";
import axios from 'axios';
import "./OtherPages.css";




class YearResults extends Component {
  constructor (props) {
    super(props);
    this.state = {
      download: false,
      rankingEditionSenior: [],
      rankingEditionYouth: []
    };
  }

  componentWillMount () {
    if (this.props.year > 2008) {
      this.setState({download: true});
      axios.get(`/api.php?endpoint=pdf_rankings&year=${this.props.year}`)
        .then(response => {
          this.setState({rankingEditionSenior: response.data.senior, rankingEditionYouth: response.data.youth });
        });
    }
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
        {this.state.download ?
          <div>
            <h4 className="rankingCategory">Download le classifiche complete</h4>
            {
              this.state.rankingEditionSenior.map ( element => {
                return (
                  <div key={element.path}>
                    <a className="downloadList" href={element.path} target="_blank">Team Sprint {element.gender}</a><br></br>
                  </div>
                );
              })
            }
            {
              this.state.rankingEditionYouth.map ( element => {
                return (
                  <div key={element.path}>
                    <a className="downloadList" href={element.path} target="_blank">Young Sprint {element.gender}</a><br></br>
                  </div>
                );
              })
            }
          </div> : null
        }
      </div>
    );
  }
}

export default YearResults;
