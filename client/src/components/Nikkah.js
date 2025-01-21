import React from "react";
import couple from "../assets/couple.jpg";
import heroFlower from "../assets/heroflower.webp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WeddingTimeline from "./Timeline";
import PipesPattern from "../assets/pipespattern";
import {
  ArrowRight,
  Mic2,
  Cake,
  PartyPopper,
  Sandwich,
  Sparkles,
  Camera,
} from "lucide-react";
import GateComponent from "../assets/gateComponent";
import VenueLocation from "./VenueLocation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Nikkah = () => {
  const nikkahEvents = [
    { time: "12:00 - 12:30 PM", title: "SNACKS", Icon: Sandwich },
    { time: "12:30 - 1:30 PM", title: "ENTRY", Icon: GateComponent },
    {
      time: "1:30 - 2:30 PM",
      title: "SPEECH, MUSIC & DANCE",
      Icon: Mic2,
    },
    { time: "2:30 - 3:30 PM", title: "CAKE & LUNCH", Icon: Cake },
    { time: "3:30 - 4:30 PM", title: "PHOTOSHOOT & GAMES", Icon: Camera },
    { time: "4:30 PM", title: "FAREWELL", Icon: PartyPopper },
  ];

  return (
    <>
      <div
        id="nikkah"
        className="relative w-full min-h-screen pb-12 px-4 sm:px-6 lg:px-0 bg-gradient-to-b from-zinc-100 to-[#dad8c9]"
      >
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16 md:pt-28">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 md:w-20 bg-yellow-600/50" />
            <Sparkles className="text-yellow-600 size-4" />
            <h2 className="font-passionsConflict text-5xl md:text-7xl text-yellow-600">
              Nikkah
            </h2>
            <Sparkles className="text-yellow-600 size-4" />
            <div className="h-px w-12 md:w-20 bg-yellow-600/50" />
          </div>
          <div className="text-center text-yellow-600/80 font-arabic text-xl md:text-2xl">
            نکاح
          </div>
          <div className="w-36 md:w-48 h-0.5 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent mt-2" />
        </div>
        <h2 className="text-center text-slate-700 font-poppins font-semibold text-sm sm:text-xl pt-12">
          Join us on this happy beginning of our new life
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-4 sm:mt-8">
          <img
            src={heroFlower || "/placeholder.svg"}
            alt="Hero Flower"
            loading="lazy"
            fetchPriority="high"
            className="hidden lg:block lg:size-96"
          />
          <div className="flex flex-col items-center gap-6 sm:gap-8 mx-auto lg:ml-auto lg:mx-0 mt-4 sm:mt-8 p-6 sm:p-8 min-h-[300px] w-full sm:w-11/12 lg:w-4/6 bg-white/40 rounded-3xl lg:rounded-l-[140px] lg:rounded-r-none">
            <img
              src={couple || "/placeholder.svg"}
              alt="Couple"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover mix-blend-multiply z-10 rounded-lg"
            />
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
              <h1 className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-poppins font-semibold text-center text-pretty">
                We're getting married! We request your gracious presence at our
                Nikkah ceremony!
              </h1>
              <button className="flex items-center gap-x-4 justify-between px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-custom-golden bg-opacity-80 rounded-full text-zinc-50 font-medium hover:bg-opacity-100 transition-all duration-200">
                RSVP
                <ArrowRight
                  className="-mb-0.5 size-5 sm:size-6 text-zinc-50"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </div>

        <PipesPattern />
        <VenueLocation ceremony="Nikkah" date="23" time="12:00 PM - 5:00 PM" />
        <WeddingTimeline title="Nikkah Timeline" events={nikkahEvents} />
      </div>
    </>
  );
};

export default Nikkah;
