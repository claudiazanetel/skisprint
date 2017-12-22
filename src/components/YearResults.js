import React, { Component } from "react";
import axios from 'axios';
import "./OtherPages.css";




class YearResults extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rankingSenM: "",
      rankingSenF: "",
      rankingYouM: "",
      rankingYouF: "",
      download: false
    };
  }

  componentWillMount () {
    try {
      let rankingSenM = require(`../files/classifiche/${this.props.year}/class_sen_mas.pdf`);
      this.setState({rankingSenM: rankingSenM});
      let rankingSenF = require(`../files/classifiche/${this.props.year}/class_sen_fem.pdf`);
      this.setState({rankingSenF: rankingSenF});
      let rankingYouM = require(`../files/classifiche/${this.props.year}/class_you_mas.pdf`);
      this.setState({rankingYouM: rankingYouM});
      let rankingYouF = require(`../files/classifiche/${this.props.year}/class_you_fem.pdf`);
      this.setState({rankingYouF: rankingYouF});
      this.setState({download: true});
    }
    catch (e) {
      this.setState({download: false});
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
            <a className="downloadList" href={`/files/class_sen_mas_2016.pdf`}>Team Sprint M</a><br></br>
            <a className="downloadList" href={this.state.rankingSenF} download="classTeamSprintF">Team Sprint F</a><br></br>
            <a className="downloadList" href={this.state.rankingYouM} download="classTeamYoungM">Young Sprint M</a><br></br>
            <a className="downloadList" href={this.state.rankingYouF} download="classTeamYoungF">Young Sprint F</a><br></br>
          </div> : null
        }


      </div>
    );
  }
}

export default YearResults;
