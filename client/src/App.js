import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import palki from "./assets/palki.png"; // Import your palki image
import corner from "./assets/corner.png";
import corner3 from "./assets/corner3.png";
import Nikkah from "./components/nikkah";
import Holud from "./components/holud";
import Gifts from "./components/gifts";
import Navbar from "./components/navbar";
import Countdown from "./components/countdown";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const palkiRef = useRef(null);
  const nikkahRef = useRef(null); // Reference to Nikkah section
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [isPalkiHidden, setIsPalkiHidden] = useState(false); // Track whether the palki is hidden

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Palki Section
      gsap.to(palkiRef.current, {
        scale: 5,
        opacity: 0,
        scrollTrigger: {
          trigger: palkiRef.current,
          start: "top top",
          end: "top+=80% top", // Palki fades out as it grows
          scrub: true,
          pin: true,
          onLeave: () => {
            setIsScrollEnabled(true); // Enable scrolling
            setIsPalkiHidden(true); // Hide palki
          },
          onEnterBack: () => {
            setIsScrollEnabled(false); // Disable scrolling
            setIsPalkiHidden(false); // Show palki
          },
        },
      });

      // Snapping to Nikkah Section
      ScrollTrigger.create({
        trigger: nikkahRef.current, // Snap to this section
        start: "top bottom", // Trigger when the bottom of the viewport reaches the Nikkah section
        end: "top top", // End snapping when the top of the viewport aligns with the top of the section
        snap: {
          snapTo: 1, // Snap to the nearest progress point (e.g., 0% to 100%)
          duration: { min: 0.5, max: 0.9 }, // Smooth snapping duration
          // delay: 0.05, // Slight delay before snapping starts
        },
        scrub: true, // Enable smooth scroll
      });
    });

    return () => ctx.revert(); // Cleanup on component unmount
  }, []);

  return (
    <div
      id="main"
      className={`bg-gradient-to-t from-[#dad8c9] from-70% to-[#e2e0cc] ${
        isScrollEnabled ? "overflow-auto" : "overflow-hidden"
      }`}
    >
      {/* Navbar - Always Visible */}

      <Navbar />

      {/* Fullscreen Palki Section */}
      <div
        ref={palkiRef}
        className={`h-screen flex items-center justify-center bg-white z-50 ${
          isPalkiHidden ? "invisible pointer-events-none" : "visible"
        }`}
      >
        <img src={palki} alt="Palki" className="w-full h-1/2 object-contain" />
      </div>

      {/* Main Content */}
      <div ref={nikkahRef}>
        
        <Nikkah />

        <Countdown targetDate="Feb 20, 2025 16:00:00" />
        <Holud />
        <Countdown targetDate="Feb 28, 2025 16:00:00" />
        <Gifts id="gifts" />
      </div>
    </div>
  );
}

export default App;
