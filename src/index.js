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
import Iscritti from './components/Iscritti';
import Results from './components/Results';
import Gallery from './components/Gallery';
import News from './components/News';
import Footer from './components/Footer';

import Promise from 'promise-polyfill';

if (!window['Promise']) {
  window['Promise'] = Promise;
}

var ReactGA = require('react-ga');
ReactGA.initialize('UA-100691146-2');
 
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;
};

const NoMatch = () => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {window.location.pathname} didn’t match any pages</p>
  </div>
);


ReactDOM.render(
  <BrowserRouter onUpdate={logPageView}>
    <div>
      <Route path="/" component={logPageView} />
      <Switch>
        <Route exact path="/news" component={News} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/classifiche" component={Results} />
        <Route exact path="/iscritti" component={Iscritti} />
        <Route exact path="/albodoro" component={WallOfFame} />
        <Route exact path="/staff" component={Staff} />
        <Route exact path="/viabilità" component={Logistics} />
        <Route exact path="/percorso" component={Course} />
        <Route exact path="/regolamento" component={Rules} />
        <Route exact path="/" component={Homepage} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
