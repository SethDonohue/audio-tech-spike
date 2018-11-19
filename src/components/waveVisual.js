import React, { Component } from 'react';
import { connect } from "react-redux";

import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
// import Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';

// import jabberSong from '../media/Jabberwocky - Photomaton Jean Tonique Remix.mp3';
// import tRexSong from '../media/t-rex-roar.mp3';

class WaveVisual extends Component {
  constructor(props) {
    super(props);

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

    this._loadWaveSurfer = () => {
      const wavesurfer = WaveSurfer.create({
        ...this.defaultWaveFormOptions,
        container: props.container
      })
      wavesurfer.load(props.songURL);
      wavesurfer.on('ready', function () {
        wavesurfer.play();
      });
      return wavesurfer;
    };
    
    this._wavesurfer = null;
  }

  componentDidMount() {
    this._wavesurfer = this._loadWaveSurfer();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.volume !== this.props.volume){
      this._wavesurfer.setVolume(this.props.volume)
    }
  }

  render() {
    return (
      <div ref={c => {
        this.wavesurferEl = c;
      }}
    />
    );
  }
}

const mapStateToProps = state => ({
  volume: state.volume.masterVolume,
});


export default connect(mapStateToProps)(WaveVisual);
