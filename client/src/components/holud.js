import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroFlower from "../assets/heroflower.png";
import holudbg from "../assets/holudbg.png";

gsap.registerPlugin(ScrollTrigger);

const Holud = () => {
  const sectionRef = useRef(null);
  const flowerRef = useRef(null);
  const topLeftFlowerRef = useRef(null);
  const bottomRightFlowerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        topLeftFlowerRef.current,
        { rotate: 90, x: -200 },
        {
          rotate: 10,
          x: 40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top top",
            scrub: true,
          },
        },
        bottomRightFlowerRef.current,
        { rotate: 90, x: 200 },
        {
          rotate: 10,
          x: 40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "top top",
            scrub: true,
          },
        },
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

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="holud"
      className="relative bg-gradient-to-b from-zinc-100 from-10% via-amber-200 via-40% to-[#fde047] h-screen"
    >
      <img
        ref={topLeftFlowerRef}
        src={holudbg}
        alt="Holud Background"
        className="absolute -top-40 -left-20 object-contain w-40 h-40 lg:w-96 lg:h-96 z-50 transfrom-origin-top-left transition-all duration-1000 ease-in-out"
      />
      <img
        ref={bottomRightFlowerRef}
        src={holudbg}
        alt="Holud Background"
        className="absolute -bottom-20 -right-20 object-contain w-40 h-40 lg:w-96 lg:h-96 z-50 mix-blend-multiply transfrom-origin-bottom-right transition-all duration-1000 ease-in-out"
      />
      <div className="flex flex-col items-center justify-center gap-4 pt-28">
        <h1 className="text-5xl lg:text-7xl text-custom-golden font-passionsConflict">
          Join us on our Holud ceremony!
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
