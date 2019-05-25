import React, { Component } from 'react';
import './Portfolio.css';
import comingsoon from '../Assets/ComingSoon.png'; 

class Portfolio extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="portfolioBox">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top w-75 align-self-center" src={comingsoon} alt="Coming Soon"></img>
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum dolor sit amet, </h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam. </p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top w-75 align-self-center" src={comingsoon} alt="Coming Soon"></img>
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum dolor sit amet, </h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam. </p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top w-75 align-self-center" src={comingsoon} alt="Coming Soon"></img>
              <div className="card-body">
                <h5 className="card-title">Lorem ipsum dolor sit amet, </h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam. </p>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;