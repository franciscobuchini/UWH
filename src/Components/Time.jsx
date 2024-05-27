// TIME.jsx
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPhase, decrementTime, setTimeLeft } from "../Redux/Actions";

const Time = () => {
  const dispatch = useDispatch();
  const {
    Match_Date,
    Match_Duration,
    Match_Freezing,
    Match_Halftime,
    phase,
    timeLeft,
  } = useSelector((state) => state);

  const timerRef = useRef(null);

  useEffect(() => {
    if (phase === "BeforeMatch") {
      const matchDate = new Date(Match_Date).getTime();
      const now = new Date().getTime();
      const initialCountdown = matchDate - now;

      if (initialCountdown > 0) {
        dispatch(setTimeLeft(initialCountdown));
        dispatch(setPhase("BeforeMatch"));
        console.log("Time: BeforeMatch");
      } else {
        dispatch(setTimeLeft(Match_Duration * 60 * 1000));
        dispatch(setPhase("FirstHalf"));
        console.log("Time: FirstHalf");
      }
    }
  }, [Match_Date, Match_Duration, phase, dispatch]);

  useEffect(() => {
    if (phase !== "BeforeMatch" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        dispatch(decrementTime());
      }, 100);
    } else {
      clearInterval(timerRef.current);
      handlePhaseTransition();
    }

    return () => clearInterval(timerRef.current);
  }, [timeLeft, phase, dispatch]);

  const handlePhaseTransition = () => {
    if (phase === "BeforeMatch") {
      dispatch(setPhase("FirstHalf"));
    } else if (phase === "FirstHalf" && timeLeft <= 0) {
      dispatch(setPhase("HalfTime"));
    } else if (phase === "HalfTime" && timeLeft <= 0) {
      dispatch(setPhase("SecondHalf"));
    } else if (phase === "SecondHalf" && timeLeft <= 0) {
      dispatch(setPhase("FreezingTime"));
    } else if (phase === "FreezingTime" && timeLeft <= 0) {
      dispatch(setPhase("BeforeMatch"));
    }
  };
  
  const formatTime = (milliseconds) => {
    let minutes = Math.floor(milliseconds / (60 * 1000));
    let seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    let tenths = Math.floor((milliseconds % 1000) / 100);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${tenths}`;
  };

  return (
    <div className="Time">
      <h2>{formatTime(timeLeft)}</h2>
      <button onClick={() => clearInterval(timerRef.current)}>
        {timeLeft > 0 ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Time;