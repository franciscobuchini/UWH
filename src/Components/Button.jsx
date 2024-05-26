// BUTTON.JSX
import React from 'react';

export default function Button({ id, Text, onClick }) {
  return (
    <button className="Button" id={id} onClick={onClick}>
      {Text}
    </button>
  );
}
