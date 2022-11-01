import React, { Component } from 'react'
import '../styles/Button.css'

class Button extends Component {
  render() {
    const text = this.props.children;
    const {btnClass, onClick} = this.props;
    return (
      <button className={btnClass} onClick={onClick}>{text}</button>
    )
  }
}

export default Button