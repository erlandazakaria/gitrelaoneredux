import React, { Component } from 'react';
import logo from '../images/relaone_logo.svg';
import '../App.css';

class dashboard extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Registration /> */}
        </header>
      </div>
    );
  }
}

export default dashboard;