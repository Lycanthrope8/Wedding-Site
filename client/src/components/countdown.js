import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex justify-center items-center bg-gray-100 h-max">
      <div className="flex justify-center space-x-12 p-5">
        {timerComponents.length ? (
          <>
            <div className="flex items-center justify-center bg-white rounded-full size-28 p-4">
              {timerComponents[0]}
            </div>
            <div className="flex items-center justify-center bg-white rounded-full size-28 p-4">
              {timerComponents[1]}
            </div>
            <div className="flex items-center justify-center bg-white rounded-full size-28 p-4">
              {timerComponents[2]}
            </div>
            <div className="flex items-center justify-center bg-white rounded-full size-28 p-4">
              {timerComponents[3]}
            </div>
          </>
        ) : (
          <div>It's the day!</div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
