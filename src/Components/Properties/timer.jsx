/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ initialTimeInSeconds }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    // Update the timer every second
    const timer = setInterval(() => {
      setTimeInSeconds((prevTime) => {
        if (prevTime === 0) {
          // Timer has reached 0, you can perform any action here
          clearInterval(timer);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
       
      <p>{formatTime(timeInSeconds)}</p>
    </div>
  );
};

export default CountdownTimer;
