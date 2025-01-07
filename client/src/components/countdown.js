import React, { useState, useEffect } from "react";
import roundFrame from "../assets/round-frame2.png";

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

    timerComponents.push(<span key={interval}>{timeLeft[interval]}</span>);
  });

  return (
    <div className="flex justify-center items-center bg-gray-100 h-max">
      <div className="flex justify-center space-x-20 p-5 font-poppins">
        {timerComponents.length ? (
          <>
            <div className="relative bg-custom-golden bg-opacity-20 rounded-full size-28 p-4">
              <img
                src={roundFrame}
                alt="roundFrame"
                className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 -rotate-45"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-8xl leading-[3.5rem] font-passionsConflict font-thin">
                  {timerComponents[0]}
                </h1>
                <h1>Days</h1>
              </div>
            </div>
            <div className="relative bg-custom-golden bg-opacity-20 rounded-full size-28 p-4">
              <img
                src={roundFrame}
                alt="roundFrame"
                className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 rotate-90"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-8xl leading-[3.5rem] font-passionsConflict font-thin">
                  {timerComponents[1]}
                </h1>
                <h1>Hours</h1>
              </div>
            </div>
            <div className="relative bg-custom-golden bg-opacity-20 rounded-full size-28 p-4">
              <img
                src={roundFrame}
                alt="roundFrame"
                className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 rotate-45"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-8xl leading-[3.5rem] font-passionsConflict font-thin">
                  {timerComponents[2]}
                </h1>
                <h1>Minutes</h1>
              </div>
            </div>{" "}
            <div className="relative bg-custom-golden bg-opacity-20 rounded-full size-28 p-4">
              <img
                src={roundFrame}
                alt="roundFrame"
                className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 rotate-[145deg]"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-8xl leading-[3.5rem] font-passionsConflict font-thin">
                  {timerComponents[3]}
                </h1>
                <h1>Seconds</h1>
              </div>
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
