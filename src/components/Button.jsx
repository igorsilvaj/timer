import React, { Component } from 'react'
import '../styles/Button.css'

class Button extends Component {
  render() {
    const text = this.props.children;
    const {btnClass} = this.props;
    return (
      <button className={btnClass}>{text}</button>
    )
  }
}

export default Button