// BUTTONPANEL.JSX
import Button from "../Components/Button";
import { useState } from 'react';

export default function ButtonPanel() {
  const [state, setState] = useState('');

  const _onClick = () => {
    setState('BeforeMatch');
    console.log("State: Before // Blue");
  };

  const Game_onClick = () => {
    setState('Game');
    console.log("State: Game // Green");
  };

  const Goal_onClick = () => {
    setState('Goal');
    console.log("State: Goal // Red");
  };

  const Foul_onClick = () => {
    setState('Foul');
    console.log("State: Foul // Red");
  };

  const Stoped_onClick = () => {
    setState('Stoped');
    console.log("State: Stoped // Red");
  };

  const Timeout_onClick = () => {
    setState('Timeout');
    console.log("State: Timeout // Red");
  };

  const Button_States = () => {
    switch (state) {
      case 'Out':
        return (
          <>
          </>
        );

      case 'Game':
        return (
          <>
          </>
        );

      case 'Stoped':
        return (
          <>
          </>
        );

      case 'Goal':
        return (
          <>
          </>
        );

      case 'Foul':
        return (
          <>
          </>
        );

      case 'Timeout':
        return (
          <>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="ButtonPanel">
      {Button_States()}
    </div>
  );
}