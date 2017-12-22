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
    if (this.props.year > 2013) {
      this.setState({download: true});
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
            <a className="downloadList" href={`/files/classifiche.pdf/${this.props.year}/class_sen_mas.pdf`} target="_blank">Team Sprint M</a><br></br>
            <a className="downloadList" href={`/files/classifiche.pdf/${this.props.year}/class_sen_fem.pdf`} target="_blank">Team Sprint F</a><br></br>
            <a className="downloadList" href={`/files/classifiche.pdf/${this.props.year}/class_you_mas.pdf`} target="_blank">Young Sprint M</a><br></br>
            <a className="downloadList" href={`/files/classifiche.pdf/${this.props.year}/class_you_fem.pdf`} target="_blank">Young Sprint F</a><br></br>
          </div> : null
        }


      </div>
    );
  }
}

export default YearResults;
