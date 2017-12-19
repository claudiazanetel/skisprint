import React, { Component } from 'react';
import './Menu.css';

import logo from '../assets/logos/skiSprint.jpg';
import headerImageDesktop from '../assets/headerImages/headerphoto.jpg';
import headerImageMobile from '../assets/headerImages/headerphoto1.jpg';

class Menu extends Component {
  render() {
    return (
        <div className="container Menu">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt={"logo"}></img>
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
                            <a className="nav-link" href="#">Programma</a>
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
            <div className="col-sm-12 title">
                <h1 className="nameRace">SKI SPRINT 2017</h1>
                <h2>martedì 26 DICEMBRE</h2>
            </div>
            <div className="col-sm-12 title-mobile">
                <h2>26 DICEMBRE 2017</h2>
            </div>
            <div className="col-sm-12 headerImageDiv">
                <img className="headerImageDesktop" src={headerImageDesktop} alt={headerImageDesktop}></img>
            </div>
            <div className="col-sm-12 headerImageDiv">
                <img className="headerImageMobile" src={headerImageMobile} alt={headerImageMobile}></img>
            </div>
            <div className="col-sm-12 subtitle">
                <h3>Campionato Italiano Assoluto Team Sprint e Ski Sprint Young</h3>
            </div>
        </div>
    );
  }
}

export default Menu;