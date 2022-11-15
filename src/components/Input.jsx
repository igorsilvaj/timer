import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, inputClass, onChange, placeholder,
      value, maxLength, disabled, type, checked } = this.props;
    return (
      <>
        <input
          className={inputClass}
          checked={checked && checked}
          disabled={disabled ? true : false}
          maxLength={maxLength}
          name={id}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type? type : "text"}
          value={value}
        />
      </>
    )
  }
};

export default Input;
