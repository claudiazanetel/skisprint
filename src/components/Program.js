import React, { Component } from "react";

import program2017 from '../assets/program/program2017.jpg';

class Program extends Component {

  render() {
    return (
      <div className='col-sm-12 d-none d-md-block sidebox'>
        <img className="program2017" src={program2017} alt={program2017}></img>
      </div>
    );
  }
}

export default Program;