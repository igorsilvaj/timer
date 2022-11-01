import React, { Component } from 'react'
import Button from './Button';
import '../styles/Timer.css';
// import { mask, unMask } from 'remask';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 2,
      seconds: 0,
      minutes: 0,
      hours: 0,
      intervalId: 0,
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    console.log('mount');
  }

  componentDidUpdate() {
    const { time, intervalId } = this.state;
    if (time === 0) {
      clearInterval(intervalId);
    }
  }

  initTimer = () => {
    this.setState({
      intervalId: setInterval(() => {
        const { time } = this.state;
        this.setState({ time: time - 1 })
      }, 1000)
    });
  }

  stopTimer = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  clearTimer = () => {
    this.setState({time:0})
  }

  formatTime = (seconds) => {
    const minutes = new Date(seconds * 1000).toISOString().substring(11, 19);
    const hours = new Date(seconds * 1000).toISOString().substring(11, 19);
    return seconds < 3600 ? minutes : hours ;
  }

  addTime1Min = () => {
    this.setState((prev) => ({time: prev.time + 60}));
  }

  addTime5Min = () => {
    this.setState((prev) => ({time: prev.time + 300}));
  }

  addTime20Min = () => {
    this.setState((prev) => ({time: prev.time + 1200}));
  }

  render() {
    const { time } = this.state;
    return (
      <div className='timerContainer'>
        <h1 className='timerTitle'>Timer!</h1>
        <div className='inputContainer'>
          <input
            className='timer'
            name="time"
            type="text"
            value={time}
            placeholder="00h 00m 00s"
            maxLength="6"
            onChange={this.handleChange}
          />
        </div>
        <div className='setTimeContainer'>
          {this.formatTime(time)}
        </div>
        <div className='btnContainer'>
          <Button btnClass="btnStd" onClick={this.addTime1Min}>Adicionar 1 Minuto</Button>
          <Button btnClass="btnStd" onClick={this.addTime5Min}>Adicionar 5 Minutos</Button>
          <Button btnClass="btnStd" onClick={this.addTime20Min}>Adicionar 20 Minutos</Button>

          <Button btnClass="btnStd" onClick={this.initTimer}>Iniciar</Button>
          <Button btnClass="btnStd" onClick={this.stopTimer}>Parar</Button>
          <Button btnClass="btnStd" onClick={this.clearTimer}>Limpar</Button>
        </div>
      </div>
    )
  }
}

export default Timer