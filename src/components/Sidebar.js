import React, { Component } from "react";
import Program from "./Program";
import MainSponsor from "./MainSponsor";

import "./Sidebar.css";

class Sidebar extends Component {

  render() {
    return (
      <div className="col-md-4 d-none d-md-block">
        <Program />
        <MainSponsor />
      </div>
    );
  }
}

export default Sidebar;