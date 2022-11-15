import React, { Component } from 'react';

class Button extends Component {
  render() {
    const text = this.props.children;
    const {btnClass, onClick, disabled} = this.props;
    return (
      <button
      className={btnClass} 
      disabled={disabled ? true : false}
      onClick={onClick}>
        {text}
      </button>
    )
  }
};

export default Button;
