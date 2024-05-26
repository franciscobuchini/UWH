// CONDITIONS.JSX
import React from "react";
import { useDispatch } from "react-redux";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { updateCondition } from "../Redux/Actions";

export default function Conditions({ onContinue }) {
  const dispatch = useDispatch();

  const InputChange = (id, value) => {
    dispatch(updateCondition(id, value));
  };

  const ButtonClick = () => {
    onContinue();
  };

  return (
    <div className="Conditions_Screen">
      <div className="Conditions">
        <Input id="Match_Date" type="datetime-local" LabelText="Date & hour:" onChange={InputChange}/>
        <Input id="Match_Duration" type="number" value="15" LabelText="Match duration:" onChange={InputChange}/>
        <Input id="Match_Freezing" type="number" value="2" LabelText="Freezing time minutes:" onChange={InputChange}/>
        <Input id="Match_Halftime" type="number" value="2" LabelText="Halftime minutes:" onChange={InputChange}/>
        <Button id="Conditions_Continue" LabelText="Continue" onClick={ButtonClick}/>
      </div>
    </div>
  );
}
