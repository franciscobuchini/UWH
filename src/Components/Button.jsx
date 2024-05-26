// BUTTON.JSX
import React from 'react';

export default function Button({ id, LabelText, onClick }) {
  return (
    <button id={id} onClick={onClick}>
      {LabelText}
    </button>
  );
}
