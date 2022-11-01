import React, { Component } from 'react'
import Button from './Button';
import '../styles/Timer.css';
import Input from './Input';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      intervalId: 0,
      startDisabled: true,
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  componentDidUpdate() {
    const { time, intervalId } = this.state;
    const { alert, sound } = this.props;
    if (time === 0) {
      clearInterval(intervalId);
      sound && sound.play();
      alert && window.alert(alert);
      sound.pause();
    }
  };

  initTimer = () => {
    this.setState({
      intervalId: setInterval(() => {
        const { time } = this.state;
        this.setState({ time: time - 1 })
      }, 1000),
      startDisabled: true,
    });
  };

  stopTimer = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ startDisabled: false });
  };

  clearTimer = () => {
    this.setState({ time: 0 })
  };

  formatTime = (seconds) => {
    const minutes = new Date(seconds * 1000).toISOString().substring(11, 19);
    const hours = new Date(seconds * 1000).toISOString().substring(11, 19);
    return seconds < 3600 ? minutes : hours;
  };

  addTime1Min = () => {
    this.setState((prev) => ({ time: prev.time + 60, startDisabled: false }));
  };

  addTime5Min = () => {
    this.setState((prev) => ({ time: prev.time + 300, startDisabled: false }));
  };

  addTime20Min = () => {
    this.setState((prev) => ({ time: prev.time + 1200, startDisabled: false }));
  };

  render() {
    const { time, startDisabled } = this.state;
    return (
      <div className='timerContainer'>
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
          <Button btnClass="btnStd" onClick={this.addTime1Min}>+ 1 Minuto</Button>
          <Button btnClass="btnStd" onClick={this.addTime5Min}>+ 5 Minutos</Button>
          <Button btnClass="btnStd" onClick={this.addTime20Min}>+ 20 Minutos</Button>

          <Button btnClass="btnStd" onClick={this.initTimer} disabled={startDisabled}>Iniciar</Button>
          <Button btnClass="btnStd" onClick={this.stopTimer}>Parar</Button>
          <Button btnClass="btnStd" onClick={this.clearTimer}>Limpar</Button>
        </div>
      </div>
    )
  }
};

export default Timer;
