import React from 'react';
import { InputContainer } from './input.styled';

function Input(props) {
  return (
      <InputContainer placeholder={props.placeholder}/>
  )
}

export default Input;