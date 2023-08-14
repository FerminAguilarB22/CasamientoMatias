import React, { useState, useEffect } from 'react';
import '../styles/countdown.css'

const CountDown = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  function getRemainingTime() {
    const currentTime = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - currentTime;

    return {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-number">{remainingTime.days}</span>
        <span className="countdown-label">Días</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{remainingTime.hours}</span>
        <span className="countdown-label">Hs</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{remainingTime.minutes}</span>
        <span className="countdown-label">Min</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{remainingTime.seconds}</span>
        <span className="countdown-label">Seg</span>
      </div>
    </div>
  );
};

export default CountDown;