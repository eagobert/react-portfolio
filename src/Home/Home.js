import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <React.Fragment>
        <div id="nameBox">
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
        
      </React.Fragment>
    );
  }
}

export default Home;