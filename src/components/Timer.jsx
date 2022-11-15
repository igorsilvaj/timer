import React, { Component } from 'react'
import Button from './Button';
import Input from './Input';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      intervalId: 0,
      startDisabled: true,
      timerStarted: false,
      songEnabled: true,
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  componentDidUpdate() {
    const { time, intervalId, startDisabled,
      timerStarted } = this.state;
    const { alert } = this.props;
      if (time === 0 && startDisabled && timerStarted ) {
        clearInterval(intervalId);
        this.handleSong('play');
        this.setState({timerStarted: false});
        setTimeout(() => {
          alert && window.alert(alert);
          this.handleSong('pause');
        }, 500);
      } else if(time === 0) clearInterval(intervalId);
  };

  handleSong = (status) => {
    const {songEnabled} = this.state;
    if(songEnabled) {
      const { sound } = this.props;
      if(status === 'play') sound && sound.play();
      if(status === 'pause') sound.pause();
    }
  };

  handleMute = () => {
    const {songEnabled} = this.state;
    this.setState({songEnabled: !songEnabled});
  };

  initTimer = () => {
    this.setState({
      intervalId: setInterval(() => {
        const { time } = this.state;
        this.setState({ time: time - 1 })
      }, 1000),
      startDisabled: true,
      timerStarted: true });
  };

  stopTimer = () => {
    const { intervalId, time } = this.state;
    clearInterval(intervalId);
    if (time !== 0) {
      this.setState({ startDisabled: false });
    }
  };

  clearTimer = () => this.setState({ time: 0, timerStarted: false });

  formatTime = (seconds) => {
    const minutes = new Date(seconds * 1000).toISOString().substring(11, 19);
    const hours = new Date(seconds * 1000).toISOString().substring(11, 19);
    return seconds < 3600 ? minutes : hours;
  };

  addTime = (time) => {
    this.setState((prev) => ({ time: prev.time + time, startDisabled: false }));
  };

  render() {
    const { time, startDisabled, songEnabled } = this.state;
    return (
      <div className='timerContainer'>
        <div className='soundContainer'>
          <Input 
            id="controlSound"
            inputClass="controlSound" 
            type='checkbox'
            onChange={this.handleMute}
            checked={songEnabled}
            />
          <label className='soundAux' htmlFor="controlSound"/>
        </div>
        <h1 className='timerTitle'>Timer!</h1>
        <div className='inputContainer'>
          <Input
            disabled
            inputClass="timer"
            name="time"
            type="text"
            value={this.formatTime(time)}
            placeholder="00 : 00 : 00"
            maxLength="6"
            onChange={this.handleChange}
          />
        </div>
        <div className='btnContainer'>
          <Button btnClass="btnStd" onClick={() => this.addTime(60)}>+ 1 Minuto</Button>
          <Button btnClass="btnStd" onClick={() => this.addTime(300)}>+ 5 Minutos</Button>
          <Button btnClass="btnStd" onClick={() => this.addTime(1200)}>+ 20 Minutos</Button>

          <Button btnClass="btnStd" onClick={this.initTimer} disabled={startDisabled}>Iniciar</Button>
          <Button btnClass="btnStd" onClick={this.stopTimer}>Parar</Button>
          <Button btnClass="btnStd" onClick={this.clearTimer}>Limpar</Button>
        </div>
      </div>
    )
  }
};

export default Timer;
