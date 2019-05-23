import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="col"></div>
        <div id="nameBox" className="jumbotron col-lg-6 col-xl-8 align-self-center">
          <div id="minorBox">
            <div id="myName">
              <span className="first">ERIN</span>
              <span className="last">AGOBERT</span>
            </div>
            <div id="myTitle">
              <span className="title">Full-Stack Software Developer</span>
            </div>
          </div>
        </div>
        <div className="col"></div>
        
      </React.Fragment>
    );
  }
}

export default Home;