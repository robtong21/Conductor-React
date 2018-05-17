import React from 'react';
import logo from '../logo.svg';
import '../styles/css/LandingPage.css';

class LandingPage extends React.Component {
  state = {
    title: 'Conductor'
  }

  render() {
    return (
      <div className="App col-sm-9">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.title}</h1>
        </header>
      </div>
    );
  }
}

export default LandingPage;