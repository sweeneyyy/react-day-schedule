import React, { Component } from 'react';
import './App.css';
// Daily schedule wrapper
import DayScheduleContainer from './components/DayScheduleContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Day Schedule</h1>
        </header>
        <div className="container">
          <DayScheduleContainer />
        </div>
      </div>
    );
  }
}

export default App;
