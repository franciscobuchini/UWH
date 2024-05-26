// INPUT.JSX
import React, { useState, useEffect } from "react";

export default function Input({ id, type, value = "", LabelText, onChange }) {
  const [Value, SetValue] = useState(value);

  useEffect(() => {
    SetValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    SetValue(newValue);
    if (onChange) {
      onChange(id, newValue);
    }
  };

  return (
    <div className="Input">
      <label htmlFor={id}> {LabelText} </label>
      <input id={id} type={type} value={Value} onChange={handleChange}></input>
    </div>
  );
}