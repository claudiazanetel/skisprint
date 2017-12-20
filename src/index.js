import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Rules from './components/Rules';
import Course from './components/Course';
import Logistics from './components/Logistics';
import Staff from './components/Staff';
import WallOfFame from './components/WallOfFame';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/albodoro" component={WallOfFame}/>
        <Route path="/staff" component={Staff}/>
        <Route path="/viabilità" component={Logistics}/>
        <Route path="/percorso" component={Course}/>
        <Route path="/regolamento" component={Rules}/>
        <Route path="/" component={Homepage}/>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
