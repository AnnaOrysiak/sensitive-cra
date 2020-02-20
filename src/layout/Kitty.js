import React, { Component } from 'react';
import music from '../assets/bensound-cute.mp3';
import '../style/kitty.css';

class Kitty extends Component {
  state = {
    firstTime: true,
    play: false,
    volume: 1
  };

  audio = new Audio(music);
  audiosource = (
    <div className="description description--ext">
      <p>
        «Cute» from
        <a className="external" href="https://www.bensound.com">
          Bensound.com
        </a>
      </p>
    </div>
  );

  playHandler = () => {
    this.state.play ? this.audio.pause() : this.audio.play();
    this.setState(prevState => ({
      firstTime: false,
      play: !prevState.play
    }));
  };

  volumeHandler = e => {
    const stateVolume = this.state.volume;
    let volume;
    if (stateVolume >= 0 && stateVolume <= 1 && e.deltaY > 0) {
      volume =
        stateVolume === 0
          ? stateVolume
          : (stateVolume * 1000 - e.deltaY) / 1000;
    } else if (stateVolume <= 1 && stateVolume >= 0 && e.deltaY < 0) {
      volume =
        stateVolume === 1
          ? stateVolume
          : (stateVolume * 1000 - e.deltaY) / 1000;
    }
    this.audio.volume = stateVolume;
    this.setState({ volume });
  };

  render() {
    return (
      <>
        <div className="kittyContainer">
          <div
            className="btn kitty"
            onClick={this.playHandler}
            onWheel={this.volumeHandler}
          >
            <div className="body"></div>
            <div className="head">
              <div className="ears">
                <div className="ear-left"></div>
                <div className="ear-right"></div>
              </div>
              <div className="face">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
                <div className="nose"></div>
              </div>
            </div>
            <div className="tail"></div>

            {this.state.firstTime && (
              <span className="description"> Kliknij!</span>
            )}
            {this.state.play && this.audiosource}
          </div>
        </div>
      </>
    );
  }
}

export default Kitty;
