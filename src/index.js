import React    from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home     from './pages/Home';
import Skills   from './pages/Skills';
import Work     from './pages/Work';
import Contact  from './pages/Contact';
import NotFound from './pages/404';

import './index.css';

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/skills" >
        <Skills />
      </Route>
      <Route exact path="/work" >
        <Work />
      </Route>
      <Route exact path="/contact" >
        <Contact />
      </Route>
      <Route path="*" >
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

