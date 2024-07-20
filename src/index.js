import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import {Switch, Route, Redirect} from "react-router-dom";
import './index.css';
import App from './App';
import Header from './components/Header';
import Upload from './components/Upload';
import "./styles/main.scss"; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path="/" component={App} exact />
          {/* <Route path="/videos" component={App} exact /> */}
          <Route path="/video/:id" component={App} />
          <Route path="/upload" component={Upload} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

