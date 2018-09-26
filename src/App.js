import React, { Component } from 'react';
import Nav from './Nav';
import NavRoutes from './NavRoutes';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="App">

          <header className="App-header">
            <Nav/>
          </header>

          <section className="App-body">
            <NavRoutes/>
          </section>
        </div>

    );
  }
}

export default App;
