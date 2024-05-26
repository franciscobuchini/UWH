// INPUT.JSX
import React, { useState, useEffect } from "react";

export default function Input({ id, type, value = "", size, placeholder, Text, onChange }) {
  let [Value, SetValue] = useState(value);

  useEffect(() => {
    SetValue(value);
  }, [value]);

  let handleChange = (e) => {
    let newValue = e.target.value;
    SetValue(newValue);
    if (onChange) {
      onChange(id, newValue);
    }
  };

  return (
    <div className="Input_Component">
      <label className="Label" htmlFor={id}> {Text} </label>
      <input className="Input" id={id} type={type} value={Value} size={size} placeholder={placeholder} onChange={handleChange}></input>
    </div>
  );
}