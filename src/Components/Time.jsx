// Time.jsx
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Time = () => {
  const { Match_Date, Match_Duration, Match_Freezing, Match_Halftime } = useSelector(state => state);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState('countdown'); // 'countdown', 'match', 'halftime', 'match2'

  const timerRef = useRef(null);

  useEffect(() => {
    const matchDate = new Date(Match_Date).getTime();
    const now = new Date().getTime();
    const initialCountdown = matchDate - now;

    if (initialCountdown > 0) {
      setTimeLeft(initialCountdown);
      setIsRunning(true);
    } else {
      setPhase('match');
      setTimeLeft(Match_Duration * 60 * 1000);
      setIsRunning(true);
    }

    return () => clearInterval(timerRef.current);
  }, [Match_Date, Match_Duration]);

  useEffect(() => {
    if (isRunning && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0) {
            clearInterval(timerRef.current);
            handlePhaseTransition();
            return 0;
          }
          return prev - 100;
        });
      }, 100);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, isPaused, phase]);

  const handlePhaseTransition = () => {
    if (phase === 'countdown') {
      setPhase('match');
      setTimeLeft(Match_Duration * 60 * 1000);
    } else if (phase === 'match') {
      setPhase('halftime');
      setTimeLeft(Match_Halftime * 60 * 1000);
    } else if (phase === 'halftime') {
      setPhase('match2');
      setTimeLeft(Match_Duration * 60 * 1000);
    } else if (phase === 'match2') {
      setIsRunning(false);
      alert("The match has ended.");
    }
  };

  const handlePauseContinue = () => {
    if (timeLeft <= Match_Freezing * 60 * 1000) {
      setIsPaused(!isPaused);
    }
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    const tenths = Math.floor((milliseconds % 1000) / 100);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${tenths}`;
  };

  return (
    <div className="Time">
      <h1>{formatTime(timeLeft)}</h1>
      <button onClick={handlePauseContinue}>{isPaused ? "Continue" : "Stop"}</button>
    </div>
  );
};

export default Time;
