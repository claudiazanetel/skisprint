import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/app" component={Homepage}/>
        <Route path="/" component={Homepage}/>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
