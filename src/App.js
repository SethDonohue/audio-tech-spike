import React, { Component } from 'react';
import './App.css';

import WaveSurfer from 'wavesurfer.js';

import jabberSong from './media/Jabberwocky - Photomaton Jean Tonique Remix.mp3';
import tRexSong from './media/t-rex-roar.mp3';

class App extends Component {
  componentDidMount() {
       // const wavesurfer = WaveSurfer.create({
    //   container: '#waveform',
    //   waveColor: 'violet',
    //   progressColor: 'purple'
    // });

    // wavesurfer.on('ready', function () {
    //   wavesurfer.play();
    // });
    // wavesurfer.load(jabberSong);
    // this.loadJabberyWockyVisual();
    this.loadTRexVisual();
  }

  loadJabberyWockyVisual = () => {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'red'
    });

    wavesurfer.on('ready', function () {
      wavesurfer.play();
    });

    wavesurfer.load(jabberSong);
  }

  loadTRexVisual = () => {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'green'
    });

    wavesurfer.on('ready', function () {
      wavesurfer.play();
    });

    wavesurfer.load(tRexSong);
  }

  render() {
    return (
      <div className="App">
        <div id="waveform"></div>
      </div>
    );
  }
}

export default App;
