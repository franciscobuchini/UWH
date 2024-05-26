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
            <svg
              className="Stick StickLeft"
              width="60"
              height="20"
              viewBox="0 0 40 9"
              fill={teamColorLeft}
              xmlns="http://www.w3.org/2000/svg"
              onClick={swapColors}
            >
              <path d="M27.7875 3.86913C21.6813 3.86913 16.5933 1.42479 15.168 1.42664C13.7427 1.42849 13.1331 1.83187 9.06178 1.63018C4.99042 1.42849 2.34494 2.64788 2.34494 2.64788C2.34494 2.64788 -0.435609 3.66374 0.0589888 5.08852C1.04835 7.93858 2.75202 6.31162 2.75202 6.31162C2.75202 6.31162 4.78725 6.10993 9.46887 5.90454C14.1505 5.69914 13.9469 6.30977 15.168 6.7187C16.3891 7.12763 20.7059 8.05723 24.3273 8.34703C27.3383 8.58796 32.0619 8.34703 32.0619 8.34703C32.0619 8.34703 35.7966 8.44836 37.7611 7.32932C38.7427 6.77015 40 1.63018 40 1.63018C39.8472 0.614327 39.1234 0.0624314 38.1681 0.00185197C37.1998 -0.0595574 36.1327 1.42664 36.1327 1.42664C36.1327 1.42664 33.8938 3.86913 27.7875 3.86913Z" />
            </svg>
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
            <svg
              className="Stick StickRight"
              width="60"
              height="20"
              viewBox="0 0 40 9"
              fill={teamColorRight}
              xmlns="http://www.w3.org/2000/svg"
              onClick={swapColors}
            >
              <path d="M12.2125 3.86913C18.3187 3.86913 23.4067 1.42479 24.832 1.42664C26.2573 1.42849 26.8669 1.83187 30.9382 1.63018C35.0096 1.42849 37.6551 2.64788 37.6551 2.64788C37.6551 2.64788 40.4356 3.66374 39.941 5.08852C38.9516 7.93858 37.248 6.31162 37.248 6.31162C37.248 6.31162 35.2127 6.10993 30.5311 5.90454C25.8495 5.69914 26.0531 6.30977 24.832 6.7187C23.6109 7.12763 19.2941 8.05723 15.6727 8.34703C12.6617 8.58796 7.9381 8.34703 7.9381 8.34703C7.9381 8.34703 4.20345 8.44836 2.23895 7.32932C1.25731 6.77015 0 1.63018 0 1.63018C0.152828 0.614327 0.876629 0.0624314 1.83187 0.00185197C2.80019 -0.0595574 3.86728 1.42664 3.86728 1.42664C3.86728 1.42664 6.10622 3.86913 12.2125 3.86913Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="Header_Options"></div>
    </div>
  );
}
