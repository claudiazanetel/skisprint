import React, { Component } from "react";
import Program from "./Program";

class Sidebar extends Component {

  render() {
    return (
      <div className="col-lg-4 col-md-3">
        <Program />
      </div>
    );
  }
}

export default Sidebar;