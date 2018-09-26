import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

class NavRoutes extends Component {
  render(){
    return(
      <React.Fragment>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </React.Fragment>
    );
  }
}

export default NavRoutes;