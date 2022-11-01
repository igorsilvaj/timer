import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, inputClass, onChange, placeholder,
      value, maxLength, disabled } = this.props;
    return (
      <>
        <input
          disabled={disabled ? true : false}
          className={inputClass}
          name={id}
          type="text"
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
        />
      </>
    )
  }
};

export default Input;
