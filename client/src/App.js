import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import palki from "./assets/palki.png";
import Nikkah from "./components/nikkah";
import Holud from "./components/holud";
import Gifts from "./components/gifts";
import Navbar from "./components/navbar";
import Countdown from "./components/countdown";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const palkiRef = useRef(null);
  const palkibgRef = useRef(null);
  const navRef = useRef(null);
  const nikkahRef = useRef(null);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [isPalkiHidden, setIsPalkiHidden] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: palkiRef.current,
        start: "top top",
        end: "top+=80% top",
        // markers: true,
        scrub: true,
        pin: "#main",
        onLeave: () => {
          setIsScrollEnabled(true);
          setIsPalkiHidden(true);
        },
        onEnterBack: () => {
          setIsScrollEnabled(false);
          setIsPalkiHidden(false);
        },
        snap: {
          snapTo: 1,
          duration: { min: 0.5, max: 0.9 },
        },
      },
    });

    tl.to(palkiRef.current, { scale: 5, opacity: 0 });
  });

  useGSAP(() => {
    gsap.fromTo(
      palkibgRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: palkiRef.current,
          start: "top+=30% top",
          end: "top+=80% top",
          scrub: true,
          // markers: true,
        },
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: palkiRef.current,
          start: "top top",
          end: "top+=80% top",
          scrub: true,
          // markers: true,
        },
      }
    );
  });

  return (
    <>
      <div ref={navRef}>
        <Navbar />
      </div>
      <div
        id="main"
        className={`bg-gradient-to-t from-[#dad8c9] from-60% to-[#e2e0cc] ${
          isScrollEnabled ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        <div
          ref={palkibgRef}
          className={`absolute w-full h-full bg-zinc-50 z-30 ${
            isScrollEnabled ? "invisible pointer-events-none" : "visible"
          }`}
        ></div>
        <div
          ref={palkiRef}
          className={`h-screen w-full absolute z-50 ${
            isPalkiHidden ? "invisible pointer-events-none" : "visible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src={palki}
              alt="Palki"
              className="flex w-full h-3/5 object-contain"
            />
            <div className="flex flex-col items-center justify-center gap-2 mt-20">
              <h1 className="font-poppins">scroll down</h1>
              <ChevronDown className="size-12 animate-bounce" />
            </div>
          </div>
        </div>

        <div ref={nikkahRef} className="overscroll-none">
          <Nikkah />
          <Countdown targetDate="Feb 23, 2025 12:00:00" color="#dad8c9" />
          <Holud />
          <Countdown targetDate="Feb 21, 2025 19:00:00" color="#fde047" />
          <Gifts id="gifts" />
        </div>
      </div>
    </>
  );
}

export default App;
