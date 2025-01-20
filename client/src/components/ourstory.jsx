import { useRef } from "react";
import corner from "../assets/corner.png";
import couplePic from "../assets/muftibhaiyamomoapu.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Ourstory = () => {
  const sectionRef = useRef(null);
  const mufti = useRef(null);
  const weds = useRef(null);
  const momo = useRef(null);
  const leavesdiv = useRef(null);
  const leaf1 = useRef(null);
  const leaf2 = useRef(null);
  const leaf3 = useRef(null);
  const leaf4 = useRef(null);
  const leaf5 = useRef(null);
  const leaf6 = useRef(null);
  const leaf7 = useRef(null);
  const leaf8 = useRef(null);

  const images = require.context("../assets/leaves", true);

  const imageList = images.keys().map((key) => images(key));

  const getResponsiveValues = () => ({
    "(max-width: 320px)": {
      mufti: { scale: 0.6, x: 370, y: 100 },
      weds: { scale: 0.8, y: 155 },
      momo: { scale: 0.6, x: -180, y: 190 },
    },
    "(min-width: 321px) and (max-width: 375px)": {
      mufti: { scale: 0.6, x: 250, y: 110 },
      weds: { scale: 3, y: 175 },
      momo: { scale: 0.6, x: -145, y: 190 },
    },
    "(min-width: 375px) and (max-width: 379px)": {
      mufti: { scale: 0.6, x: 260, y: 112 },
      weds: { scale: 3, y: 177 },
      momo: { scale: 0.6, x: -150, y: 190 },
    },
    "(min-width: 380px) and (max-width: 389px)": {
      mufti: { scale: 0.6, x: 265, y: 114 },
      weds: { scale: 3, y: 178 },
      momo: { scale: 0.6, x: -155, y: 190 },
    },
    "(min-width: 390px) and (max-width: 392px)": {
      mufti: { scale: 0.6, x: 280, y: 115 },
      weds: { scale: 3, y: 179 },
      momo: { scale: 0.6, x: -158, y: 190 },
    },
    "(min-width: 393px) and (max-width: 413px)": {
      mufti: { scale: 0.6, x: 290, y: 117 },
      weds: { scale: 0.8, y: 160 },
      momo: { scale: 0.6, x: -175, y: 190 },
    },
    "(min-width: 414px) and (max-width: 428px)": {
      mufti: { scale: 0.62, x: 285, y: 118 },
      weds: { scale: 0.8, y: 162 },
      momo: { scale: 0.62, x: -172, y: 192 },
    },
    "(min-width: 429px) and (max-width: 430px)": {
      mufti: { scale: 0.62, x: 320, y: 119 },
      weds: { scale: 3, y: 195 },
      momo: { scale: 0.62, x: -180, y: 210 },
    },
    "(min-width: 431px) and (max-width: 479px)": {
      mufti: { scale: 0.6, x: 300, y: 120 },
      weds: { scale: 0.8, y: 160 },
      momo: { scale: 0.6, x: -180, y: 200 },
    },
    "(min-width: 480px) and (max-width: 639px)": {
      mufti: { scale: 0.6, x: 370, y: 120 },
      weds: { scale: 3, y: 200 },
      momo: { scale: 0.6, x: -200, y: 220 },
    },
    "(min-width: 640px) and (max-width: 767px)": {
      mufti: { scale: 0.7, x: 410, y: 120 },
      weds: { scale: 0.8, y: 175 },
      momo: { scale: 0.7, x: -200, y: 220 },
    },
    "(min-width: 768px) and (max-width: 820px)": {
      mufti: { scale: 0.75, x: 100, y: 330 },
      weds: { scale: 0.7, y: 343 },
      momo: { scale: 0.75, x: -90, y: 358 },
    },
    "(min-width: 821px) and (max-width: 1023px)": {
      mufti: { scale: 0.75, x: 100, y: 330 },
      weds: { scale: 0.7, y: 344 },
      momo: { scale: 0.75, x: -90, y: 358 },
    },
    "(min-width: 1024px)": {
      mufti: { scale: 0.5, x: 170, y: 316 },
      weds: { scale: 0.7, y: 328 },
      momo: { scale: 0.5, x: -155, y: 348 },
    },
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const breakpoints = getResponsiveValues();

    Object.entries(breakpoints).forEach(([query, values]) => {
      mm.add(query, () => {
        gsap.fromTo(
          mufti.current,
          {
            scale: values.mufti.scale,
            x: values.mufti.x,
            y: values.mufti.y,
            force3D: true,
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
            scale: values.weds.scale,
            y: values.weds.y,
            force3D: true,
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
            scale: values.momo.scale,
            x: values.momo.x,
            y: values.momo.y,
            force3D: true,
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
            onComplete: () => {
              const leaves = [
                leaf1.current,
                leaf2.current,
                leaf3.current,
                leaf4.current,
                leaf5.current,
                leaf6.current,
                leaf7.current,
                leaf8.current,
              ];

              gsap.to(leaves, {
                scale: 1,
                stagger: 0.2,
                force3D: true,
                scrollTrigger: {
                  trigger: mufti.current,
                  start: "top center",
                  end: "top center",
                  scrub: 1,
                  immediateRender: false,
                  toggleActions: "play none none none",
                },
              });
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <div
        id="ourstory"
        className="w-full min-h-screen pb-20 lg:pb-36 px-4 sm:px-6 lg:px-0 bg-gradient-to-b from-[#dad8c9] from-60% to-zinc-100"
      >
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center gap-3">
            <div className="hidden lg:block h-px w-16 bg-yellow-600/50" />
            <Sparkles className="hidden lg:block text-yellow-600 size-4" />
            <h1 className="text-yellow-600 font-bold text-lg lg:text-2xl font-sans">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِي
            </h1>
            <Sparkles className="hidden lg:block text-yellow-600 size-4" />
            <div className="hidden lg:block h-px w-16 bg-yellow-600/50" />
          </div>
        </div>
        <img
          src={corner}
          alt="Corner"
          className="absolute top-100 left-0 size-24 lg:size-48 scale-x-[-1] -rotate-90"
        />
        <img
          src={corner}
          alt="Corner"
          className="absolute top-100 right-0 size-24 lg:size-48 rotate-90"
        />
        <div
          className="flex flex-col items-center justify-center gap-2 lg:gap-4 pt-20 lg:pt-28"
          ref={sectionRef}
        >
          <div className="flex items-center justify-center gap-2 lg:gap-4">
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
        </div>
        <div className="flex flex-col items-center mt-4 space-y-6 lg:mt-8">
          <h1 className="text-2xl lg:text-4xl text-gray-700 font-semibold font-poppins">
            Our Story
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-5 w-full">
            <div className="w-3/5 mx-auto col-span-2">
              <div
                className="rounded-full p-1.5 z-20"
                style={{
                  background:
                    "linear-gradient(to bottom, #DA9B61, transparent 60%)",
                }}
              >
                <div
                  className="relative hidden lg:flex items-center justify-center z-0"
                  ref={leavesdiv}
                >
                  <img
                    src={imageList[0]}
                    alt="Leaves"
                    className="w-40 absolute top-24 -left-24 origin-bottom scale-0"
                    ref={leaf1}
                  />
                  <img
                    src={imageList[1]}
                    alt="Leaves"
                    className="w-16 absolute top-10 -right-5 origin-bottom scale-0"
                    ref={leaf2}
                  />
                  <img
                    src={imageList[2]}
                    alt="Leaves"
                    className="w-36 absolute top-80 -right-16 origin-bottom scale-0"
                    ref={leaf3}
                  />
                  <img
                    src={imageList[3]}
                    alt="Leaves"
                    className="w-28 absolute -top-10 right-10 origin-bottom scale-0"
                    ref={leaf4}
                  />
                  <img
                    src={imageList[4]}
                    alt="Leaves"
                    className="w-36 absolute top-40 -left-20 origin-bottom scale-0"
                    ref={leaf5}
                  />
                  <img
                    src={imageList[5]}
                    alt="Leaves"
                    className="w-16 absolute top-0 left-0 origin-bottom scale-0"
                    ref={leaf6}
                  />
                  <img
                    src={imageList[6]}
                    alt="Leaves"
                    className="w-32 absolute top-32 -right-20 origin-bottom scale-0"
                    ref={leaf7}
                  />
                  <img
                    src={imageList[7]}
                    alt="Leaves"
                    className="w-40 absolute -top-12 left-24 origin-bottom scale-0"
                    ref={leaf8}
                  />
                </div>
                <div
                  className="relative rounded-full z-20 flex justify-center"
                  style={{
                    backgroundColor: "#DFDECB",
                    padding: "8px",
                  }}
                >
                  <img
                    src={couplePic}
                    alt="Couple"
                    className="rounded-full w-full h-full z-20"
                  />
                  <div
                    className="absolute flex items-center justify-evenly gap-12 w-full bottom-0 mx-auto h-3/5 p-8 z-50 bg-zinc-800 rounded-b-full"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, transparent 50%, black)",
                    }}
                  ></div>
                  <div className="absolute flex items-center justify-center md:justify-evenly gap-48 md:gap-16 w-full -bottom-12 md:-bottom-16 md:mx-auto h-3/5 p-0 md:p-8 z-50 text-center font-poppins bg-transparent rounded-b-full">
                    <h1 className="text-custom-golden md:text-zinc-200 w-full md:w-1/4 text-base md:text-lg font-semibold md:text-start leading-tight">
                      Tajbiha Hossain Momo
                    </h1>
                    <h1 className="text-custom-golden md:text-zinc-200 w-full md:w-1/4 text-base md:text-lg font-semibold text-start md:text-end leading-tight">
                      {" "}
                      Mufti Hossain
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 hidden lg:block w-0.5 h-1/2 m-auto col-span-1"></div>
            <div className="flex flex-col items-center justify-center space-y-8 p-4 lg:p-16 col-span-2">
              <p className="text-center text-sm lg:text-xl text-gray-700 text-pretty font-poppins">
                Sometimes, the most beautiful love stories are the ones crafted
                by fate. As soon as our paths crossed, time seemed to stop. It
                was as if fate had stitched our meeting into the very fabric of
                time. It all started in the most traditional way: two
                individuals met in a sea of people and opened up a conversation.
                Every shared laugh, stolen look, and deep talk has woven our
                love tale.
              </p>
              <p className="text-center text-sm lg:text-xl text-gray-700 text-pretty font-poppins">
                Every second we spend together feels like a gift we hold close
                to our hearts. Our love gets stronger every day, and we're
                excited about all the things that could happen on this journey
                together. We're not just partners; we're also those with dreams
                who are walking hand-in-hand toward a future full of love and
                excitement. Let's enjoy this amazing relationship and every
                lovely moment we share, knowing this is merely the beginning of
                our forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
