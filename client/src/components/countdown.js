import React, { useState, useEffect } from "react";
import roundFrame from "../assets/round-frame2.png";

const Countdown = ({ targetDate, color }) => {
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
      timerComponents.push(<span key={interval}>00</span>);
    }

    timerComponents.push(<span key={interval}>{timeLeft[interval]}</span>);
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-zinc-100 pb-16 bg-cover bg-no-repeat">
        <div className="relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            fill={color}
            className="absolute"
          >
            <path
              d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
              opacity=".5"
            ></path>
            <path
              d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
              opacity=".5"
            ></path>
            <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
          </svg>
        </div>
        <div className="flex justify-center space-x-5 lg:space-x-20 lg:p-4 font-poppins">
          {timerComponents.length ? (
            <>
              <div className="relative bg-custom-golden/25 rounded-full size-16 lg:size-28 p-4">
                <img
                  src={roundFrame}
                  alt="roundFrame"
                  className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 -rotate-45"
                />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl lg:text-8xl leading-6 lg:leading-[3.5rem] font-passionsConflict font-thin">
                    {timerComponents[0]}
                  </h1>
                  <h1 className="text-[0.6rem] lg:text-base">Days</h1>
                </div>
              </div>
              <div className="relative bg-custom-golden/25 rounded-full size-16 lg:size-28 p-4">
                <img
                  src={roundFrame}
                  alt="roundFrame"
                  className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 rotate-90"
                />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl lg:text-8xl leading-6 lg:leading-[3.5rem] font-passionsConflict font-thin">
                    {timerComponents[1]}
                  </h1>
                  <h1 className="text-[0.6rem] lg:text-base">Hours</h1>
                </div>
              </div>
              <div className="relative bg-custom-golden/25 rounded-full size-16 lg:size-28 p-4">
                <img
                  src={roundFrame}
                  alt="roundFrame"
                  className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 rotate-45"
                />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl lg:text-8xl leading-6 lg:leading-[3.5rem] font-passionsConflict font-thin">
                    {timerComponents[2]}
                  </h1>
                  <h1 className="text-[0.6rem] lg:text-base">Minutes</h1>
                </div>
              </div>{" "}
              <div className="relative bg-custom-golden/25 rounded-full size-16 lg:size-28 p-4">
                <img
                  src={roundFrame}
                  alt="roundFrame"
                  className="absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2 rotate-[145deg]"
                />
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl lg:text-8xl leading-6 lg:leading-[3.5rem] font-passionsConflict font-thin">
                    {timerComponents[3]}
                  </h1>
                  <h1 className="text-[0.6rem] lg:text-base">Seconds</h1>
                </div>
              </div>
            </>
          ) : (
            <div>It's the day!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Countdown;
