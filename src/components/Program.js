import React, { Component } from "react";

class Program extends Component {

  render() {
    return (
      <div className='col-sm-12 d-none d-md-block sidebox'>
        <h4>PROGRAMMA</h4>
        <h5 className="time">14.00</h5>
        <h6 className="race">Qualifiche Ski Sprint Young</h6>
        <h5 className="time">15.00</h5>
        <h6 className="race">Batterie Team Sprint</h6>
        <h5 className="time">16.45</h5>
        <h6 className="race">Finali Ski Sprint Young</h6>
        <h5 className="time">17.30</h5>
        <h6 className="race">Finali Team Sprint</h6>
      </div>
    );
  }
}

export default Program;
