import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="col"></div>
        <div id="aboutBox" className="d-flex flex-column align-self-center col-xl-10">
          <p className="lineOne text-right">Hi I'm Erin! A full-stack application developer based in Nashville, TN.</p>
          <p className="lineTwo text-left">I design and develop applications for the Salesforce CRM that make</p>
          <p className="lineThree text-left">life simple.  I enjoy solving process problems and visualizing data.  </p>
        </div>
        <div className="col"></div>
      </React.Fragment>
    );
  }
}

export default About;