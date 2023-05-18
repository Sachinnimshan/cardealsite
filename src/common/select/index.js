import React from "react";
import { SelectBoxContainer } from "./select.styled";

function SelectBox(props) {
  return (
    <SelectBoxContainer>
      {props.data?.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
      
    </SelectBoxContainer>
  );
}

export default SelectBox;
