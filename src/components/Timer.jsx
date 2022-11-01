import React, { Component } from 'react'
import Button from './Button';
import '../styles/Timer.css';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: '00h 00m 00s',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  render() {
    const { time } = this.state;
    return (
      <div className='timerContainer'>
        <h1 className='timerTitle'>Timer!</h1>
        <div className='inputContainer'>
          <input
            disabled
            className='timer'
            name="timer"
            type="text"
            value={time}
            onChange={this.handleChange}
          />
        </div>
        <div className='setTimeContainer'>
          <label htmlFor="setTime">
          <input 
          id='setTime' 
          name='setTime'
          className='setTime'
          type="text" 
          placeholder='00h 00m 00s' />
          </label>
        </div>
        <div className='btnContainer'>
        <Button btnClass="btnStd">Iniciar</Button>
        <Button btnClass="btnStd">Parar</Button>
        <Button btnClass="btnStd">Limpar</Button>
        </div>
      </div>
    )
  }
}

export default Timer