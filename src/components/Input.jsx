import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, inputClass, onChange, placeholder,
      value, maxLength } = this.props;
    return (
      <>
        <input
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
