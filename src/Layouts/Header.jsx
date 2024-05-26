// HEADER.JSX
import Time from '../Components/Time';
import React from 'react';

export default function Header({}) {
  return (
    <div className="Header">
      <div className="Header_Game">
        <div className="Header_Time">
          <div className="Header_Time_Half">
            1T
          </div>
          <div className="Header_Time_Timer">
            {formatTime(timer)}
          </div>
        </div>
        <div className="Header_Score">
              <div className="Header_Score_Color ">
              </div>
              <div id="Team1_Name" className="Header_Score_Name" style={{ color: TeamColor_Left }}>WWW</div>
              <div id="Team1_Goals" className="Header_Score_Goals">1</div>
              <div id="Team2_Goals" className="Header_Score_Goals">2</div>
              <div id="Team2_Name" className="Header_Score_Name" style={{ color: TeamColor_Right }}>WWW</div>
              <div className="Header_Score_Color">
              </div>
        </div>
      </div>
      <div className="Header_Options">
      </div>
    </div>
  )
}


