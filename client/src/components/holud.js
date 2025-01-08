import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroFlower from "../assets/heroflower.png";

gsap.registerPlugin(ScrollTrigger);

const Holud = () => {
  const sectionRef = useRef(null);
  const flowerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        flowerRef.current,
        { scale: 0 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Clean up GSAP context on component unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      id="holud"
      className="flex items-center justify-center bg-gradient-to-b from-zinc-100 from-10% to-amber-300/80 to-70% h-screen"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl lg:text-7xl text-custom-golden font-passionsConflict">
          Holud
        </h1>
        <img
          ref={flowerRef}
          src={heroFlower}
          alt="Hero Flower"
          className="w-24 lg:w-96"
        />
      </div>
    </div>
  );
};

export default Holud;
