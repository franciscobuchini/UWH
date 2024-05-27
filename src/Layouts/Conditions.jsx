// CONDITIONS.JSX
import React from "react";
import { useDispatch } from "react-redux";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { updateCondition } from "../Redux/Actions";

export default function Conditions({ onContinue }) {
  let dispatch = useDispatch();

  let InputChange = (id, value) => {
    dispatch(updateCondition(id, value));
  };

  let ButtonClick = () => {
    onContinue();
  };

  return (
    <div className="Conditions_Layout">
      <div className="Conditions">
        <Input id="Match_Date" type="datetime-local" Text="Date & hour:" onChange={InputChange}/>
        <Input id="Match_Duration" type="number" value="2" Text="Match duration:" onChange={InputChange}/>
        <Input id="Match_Freezing" type="number" value="1" Text="Freezing time minutes:" onChange={InputChange}/>
        <Input id="Match_Halftime" type="number" value="1" Text="Halftime minutes:" onChange={InputChange}/>
        <Input id="Match_Team1" placeholder="ABC" size="3" Text="Team 1 name:" onChange={InputChange}/>
        <Input id="Match_Team2" placeholder="ABC" size="3" Text="Team 2 name:" onChange={InputChange}/>
        <Button id="Conditions_Continue" Text="Continue" onClick={ButtonClick}/>
      </div>
    </div>
  );
}
