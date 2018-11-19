import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeVolumeAction } from './action/volume'

import WaveVisual from './components/waveVisual';

import './App.css';

import jabberSong from './media/Jabberwocky - Photomaton Jean Tonique Remix.mp3';
import tRexSong from './media/t-rex-roar.mp3';

class App extends Component {
  handleVolumeChange = (event) => {
    event.preventDefault();
    const volume = event.target.value / 100;
    this.props.changeVolume(volume);
  }

  render() {
    return (
      <div className="App">
        <form>
          <input onChange={this.handleVolumeChange} type="range" name="points" min="0" max="100" defaultValue="100" />
        </form>

        <div id="waveform">
          <WaveVisual
            container="#waveform"
            songURL={jabberSong}
            />
        </div>
        <div id="waveform-2">
          <WaveVisual
            container="#waveform-2"
            songURL={tRexSong}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  masterVolume: state.volume.masterVolume
})

const mapDispatchToProps = dispatch =>({
  changeVolume: (volume) => dispatch(changeVolumeAction(volume))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
