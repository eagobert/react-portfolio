import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="col"></div>
        <div id="aboutBox" className="col-lg-9">
          <p className="lineOne">Morty, I'm a drunk, not a hack. Come on, flip the pickle, Morty.</p>
          <p className="lineTwo">You're not gonna regret it. The payoff is huge.  Oh, that's Million </p>
          <p className="lineThree">Ants.  I can't see the ants from over here, I just assumed that </p>
        </div>
        <div className="col"></div>
      </React.Fragment>
    );
  }
}

export default About;