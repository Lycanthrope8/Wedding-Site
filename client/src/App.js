import React, { useState, useEffect } from "react";
import corner from "./assets/corner.png";
import corner3 from "./assets/corner3.png";
import Nikkah from "./components/nikkah";
import Holud from "./components/holud";
import Gifts from "./components/gifts";
import Navbar from "./components/navbar";
import Countdown from "./components/countdown";

function App() {
  // const [countdown, setCountdown] = useState("");
  // const [clock, setClock] = useState("");

  // useEffect(() => {
  //   const weddingDate = new Date("Feb 20, 2025 16:00:00").getTime();

  //   const countdownInterval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = weddingDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       setCountdown("EXPIRED");
  //     } else {
  //       setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  //     }
  //   }, 1000);

  //   const clockInterval = setInterval(() => {
  //     const now = new Date();
  //     const hours = now.getHours().toString().padStart(2, "0");
  //     const minutes = now.getMinutes().toString().padStart(2, "0");
  //     const seconds = now.getSeconds().toString().padStart(2, "0");
  //     setClock(`${hours}:${minutes}:${seconds}`);
  //   }, 1000);

  //   return () => {
  //     clearInterval(countdownInterval);
  //     clearInterval(clockInterval);
  //   };
  // }, []);

  return (
    <>
      <div className="bg-gradient-to-tr from-[#d1cfc5] to-[#e2e0cc] overflow-hidden">
        <h1 className="absolute left-1/2 translate-x-[-50%] font-bold text-2xl text-custom-golden">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِي
        </h1>
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-0 left-0 size-24 lg:size-48 scale-x-[-1] -rotate-90 z-50"
        />
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-0 right-0 size-24 lg:size-48 rotate-90 z-50"
        />
        <Navbar />

        <Nikkah />
        <Countdown targetDate="Feb 20, 2025 16:00:00" />
        <Holud />
        <Countdown targetDate="Feb 28, 2025 16:00:00" />
        <Gifts />
      </div>
    </>
  );
}

export default App;
