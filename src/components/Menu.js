import React, { Component } from 'react';
import './Menu.css';

import logo from '../assets/logos/logo.jpg';

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="row nav">
          <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">
                <img className="logo" src={logo} alt={"logo"}></img>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        La gara
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Regolamento</a>
                      <a className="dropdown-item" href="#">Percorso</a>
                      <a className="dropdown-item" href="#">Viabilità</a>
                      <a className="dropdown-item" href="#">Lista Iscritti</a>
                      <a className="dropdown-item" href="#">Classifiche</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Staff</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Albo d'Oro</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="row title">
          <div className="col-sm-4 offset-sm-8 date">
            <h2 className="titleBordeaux">martedì</h2>
            <h2 className="titleBlue number">26</h2>
            <h2 className="titleBordeaux">DICEMBRE</h2>
            <h2 className="titleBlue">2017</h2>
          </div>
        </div>
        <div className="row subtitle">
          <h3>Campionato Italiano Assoluto Team Sprint e Ski Sprint Young</h3>
        </div>
      </div>
    );
  }
}

export default Menu;