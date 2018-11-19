import React, { Component } from 'react';

import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';

import jabberSong from '../media/Jabberwocky - Photomaton Jean Tonique Remix.mp3';
import tRexSong from '../media/t-rex-roar.mp3';

class WaveVisual extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.waveFormPlugins = [
      TimelinePlugin.create({
        container: '#waveform-timeline'
      })
    ];

    this.defaultWaveFormOptions = {
      waveColor: 'violet',
      progressColor: 'red',
      cursorWidth: 2,
      cursorColor: 'black',
      mediaControls: true,
      responsive: true,
      splitChannels: false,
    }

    this._wavesurfer = null;
    // this._wavesurfer = WaveSurfer.create({
    //   ...this.defaultWaveFormOptions,
    //   container: props.container
    // })
    // this._wavesurfer = this._wavesurfer.bind(this);
  }

  componentDidMount() {
    // this.loadWaveVisual();
    // const options = assign({}, this.props.options, {
    //   container: this.wavesurferEl
    // });
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
    // this.loadTRexVisual();
    this.loadWaveVisual();
  }

  loadWaveVisual = () => {
    this._wavesurfer = WaveSurfer.create({
      ...this.defaultWaveFormOptions,
      container: this.props.container
    })
    this._wavesurfer.load(jabberSong);
    const that = this;

    this._wavesurfer.on('ready', function () {
      that._wavesurfer.play();
    });

  }

  loadJabberyWockyVisual = () => {
    const wavesurfer = WaveSurfer.create({
      ...this.defaultWaveFormOptions,
      plugins: this.waveFormPlugins
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
      progressColor: 'green',
      plugins: [
        Cursor.create({
          container: '#waveform'
        }),
        TimelinePlugin.create({
          container: '#waveform-timeline'
        })
      ]
    });

    wavesurfer.on('ready', function () {
      wavesurfer.play();
    });

    wavesurfer.load(tRexSong);
  }

  handleVolumeChange = (event) => {
    event.preventDefault();
    const volume = event.target.value / 100;
    this._wavesurfer.setVolume(volume);
  }

  render() {
    return (
      <div className="App">
        <div
          ref={c => {
            this.wavesurferEl = c;
          }}
        >
          <form>
            <input onChange={this.handleVolumeChange} type="range" name="points" min="0" max="100" />
          </form>
        </div>
      </div>
    );
  }
}

export default WaveVisual;
