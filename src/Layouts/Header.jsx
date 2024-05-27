//HEADER.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Time from "../Components/Time";

export default function Header() {
  const [teamColorLeft, setTeamColorLeft] = useState("Black");
  const [teamColorRight, setTeamColorRight] = useState("White");

  const { Match_Team1, Match_Team2 } = useSelector(state => state);

  const swapColors = () => {
    setTeamColorLeft(prevColor => (prevColor === "Black" ? "White" : "Black"));
    setTeamColorRight(prevColor => (prevColor === "White" ? "Black" : "White"));
  };

  return (
    <div className="Header">
      <div className="Header_Game">
        <div className="Header_Time">
          <div className="Header_Time_Half">1T</div>
          <div className="Header_Time_Timer">
            <Time />
          </div>
        </div>
        <div className="Header_Score">
          <div className="Header_Score_Color">
          </div>
          <div id="Team1_Name" className="Header_Score_Name" style={{ color: teamColorLeft }}>
            {Match_Team1.toUpperCase()}
          </div>
          <div id="Team1_Goals" className="Header_Score_Goals">1</div>
          <div id="Team2_Goals" className="Header_Score_Goals">2</div>
          <div id="Team2_Name" className="Header_Score_Name" style={{ color: teamColorRight }}>
            {Match_Team2.toUpperCase()}
          </div>
          <div className="Header_Score_Color">
          </div>
        </div>
      </div>
      <div className="Header_Options"></div>
    </div>
  );
}
