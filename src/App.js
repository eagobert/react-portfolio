import React, { Component } from 'react';
import Nav from './Navbar/Nav';
import NavRoutes from './Navbar/NavRoutes';
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
