import React, { Component } from 'react';
import Nav from './Navbar/Nav';
import NavRoutes from './Navbar/NavRoutes';
import './App.css';
require('typeface-josefin-sans')
require('typeface-lato')
require('typeface-open-sans-condensed')

class App extends Component {
  render() {
    return (

        <div className="App container-fluid">

          <header className="App-header">
            <Nav/>
          </header>

          <section className="App-body d-flex">
              <NavRoutes/>
          </section>
        </div>

    );
  }
}

export default App;
