import React, { Component } from 'react';
import './App.css';
import WaveVisual from './components/waveVisual';


class App extends Component {
    render() {
    return (
      <div className="App">
        <div id="waveform"></div>
        <div id="waveform-timeline"></div>
        <WaveVisual container="#waveform"/>
      </div>
    );
  }
}

export default App;
