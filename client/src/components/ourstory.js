import React from "react";
import corner3 from "../assets/corner3.png";
import couplePic from "../assets/muftibhaiyamomoapu.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Ourstory = () => {
  const sectionRef = React.useRef(null);
  const mufti = React.useRef(null);
  const weds = React.useRef(null);
  const momo = React.useRef(null);

  const getResponsiveValues = () => {
    const width = window.innerWidth;
    if (width < 320) {
      return {
        mufti: { scale: 0.5, x: 100, y: 100 },
        weds: { y: 107 },
        momo: { scale: 0.5, x: -90, y: 132 },
      };
    } else if (width < 640) {
      return {
        mufti: { scale: 0.6, x: 155, y: 130 },
        weds: { y: 157 },
        momo: { scale: 0.6, x: -130, y: 180 },
      };
    } else if (width < 1024) {
      return {
        mufti: { x: 120, y: 200 },
        weds: { y: 207 },
        momo: { x: -110, y: 232 },
      };
    } else {
      return {
        mufti: { x: 170, y: 300 },
        weds: { y: 307 },
        momo: { x: -155, y: 332 },
      };
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      const values = getResponsiveValues();
      gsap.set(mufti.current, {
        scale: values.mufti.scale,
        x: values.mufti.x,
        y: values.mufti.y,
      });
      gsap.set(weds.current, {
        scale: 0.5,
        y: values.weds.y,
      });
      gsap.set(momo.current, {
        scale: values.momo.scale,
        x: values.momo.x,
        y: values.momo.y,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const values = getResponsiveValues();

    gsap.fromTo(
      mufti.current,
      {
        scale: 0.5,
        x: values.mufti.x,
        y: values.mufti.y,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: mufti.current,
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      weds.current,
      {
        scale: 0.5,
        y: values.weds.y,
      },
      {
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: weds.current,
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      momo.current,
      {
        scale: 0.5,
        x: values.momo.x,
        y: values.momo.y,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: momo.current,
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      }
    );
  });

  return (
    <>
      <div
        id="ourstory"
        className="w-full min-h-screen pb-12 px-4 sm:px-6 lg:px-0"
      >
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center gap-3">
            <div className="hidden lg:block h-px w-16 bg-yellow-600/50" />
            <Sparkles className="hidden lg:block text-yellow-600 size-4" />
            <h1 className="text-yellow-600 font-bold text-lg lg:text-2xl">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِي
            </h1>
            <Sparkles className="hidden lg:block text-yellow-600 size-4" />
            <div className="hidden lg:block h-px w-16 bg-yellow-600/50" />
          </div>
        </div>
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-100 left-0 size-24 lg:size-48 scale-x-[-1] -rotate-90"
        />
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-100 right-0 size-24 lg:size-48 rotate-90"
        />
        <div
          className="flex items-center justify-center gap-2 lg:gap-4 pt-24 lg:pt-32"
          ref={sectionRef}
        >
          <h1
            ref={mufti}
            className="font-passionsConflict text-6xl sm:text-6xl lg:text-9xl text-yellow-600 z-40 will-change-transform"
          >
            Mufti
          </h1>
          <span
            ref={weds}
            className="font-passionsConflict text-2xl sm:text-6xl lg:text-6xl z-40 will-change-transform"
          >
            weds
          </span>
          <h1
            ref={momo}
            className="font-passionsConflict text-6xl sm:text-6xl lg:text-9xl text-yellow-600 z-40 will-change-transform"
          >
            Momo
          </h1>
        </div>
        <div className="flex flex-col items-center mt-12 space-y-6 lg:mt-24">
          <img
            src={couplePic}
            alt="Couple"
            className="rounded-lg shadow-lg w-3/4 lg:w-1/2"
          />
          <p className="text-center text-base lg:text-lg text-gray-700 px-4 lg:px-32">
            It all started with a shared smile that blossomed into a journey of
            love and companionship. A story destined to be cherished for a
            lifetime.
          </p>
          <p className="text-center text-base lg:text-lg text-gray-700 px-4 lg:px-32">
            Together, we embark on a path filled with dreams, laughter, and
            countless adventures, forever grateful for the bond that unites us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
