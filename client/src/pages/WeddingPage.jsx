import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import palki from "../assets/palki.webp";
import Nikkah from "../components/Nikkah";
import Gifts from "../components/Gifts";
import AnotherNavbar from "../components/AnotherNavbar";
import Countdown from "../components/Countdown";
import { ChevronDown, ChevronUp } from "lucide-react";
import Ourstory from "../components/Ourstory";
import Footer from "../components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WeddingPage() {
  const palkiRef = useRef(null);
  const palkibgRef = useRef(null);
  const navRef = useRef(null);
  const nikkahRef = useRef(null);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [isPalkiHidden, setIsPalkiHidden] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: palkiRef.current,
        start: "top top",
        end: "top+=100% top",
        scrub: 1,
        pin: "#main",
        anticipatePin: 1,
        onLeave: () => {
          setIsScrollEnabled(true);
          setIsPalkiHidden(true);
        },
        onEnterBack: () => {
          setIsScrollEnabled(false);
          setIsPalkiHidden(false);
        },
        snap: {
          snapTo: [0, 1],
          duration: 0.5,
          ease: "power1.inOut",
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
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      "#nav > *",
      { y: -200 },
      {
        y: 0,
        scrollTrigger: {
          trigger: palkiRef.current,
          start: "center top",
          end: "top+=80% top",
          scrub: 1,
          ease: "power1.inOut",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <>
      <div id="nav" ref={navRef}>
        <AnotherNavbar />
      </div>
      <div
        id="main"
        className={`bg-gradient-to-t from-[#dad8c9] from-60% to-[#e2e0cc] overflow-hidden`}
      >
        <div
          ref={palkibgRef}
          className={`absolute w-full h-screen bg-zinc-50 z-30 ${
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
              loading="lazy"
              fetchPriority="high"
              className="flex w-full h-3/5 object-contain px-2"
            />
            {window.innerWidth < 768 ? (
              <div className="flex flex-col items-center justify-center gap-2 mb-20">
                <ChevronUp className="size-12 animate-bounce" />
                <h1 className="font-poppins">swipe up</h1>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 mt-20">
                <h1 className="font-poppins">scroll down</h1>
                <ChevronDown className="size-12 animate-bounce" />
              </div>
            )}
          </div>
        </div>

        <div ref={nikkahRef}>
          <Ourstory />
          <Nikkah />
          <Countdown targetDate="Feb 23, 2025 12:00:00" color="#dad8c9" />
          <Gifts id="gifts" ceremony="wedding" />
          <Footer />
        </div>
      </div>
    </>
  );
}
