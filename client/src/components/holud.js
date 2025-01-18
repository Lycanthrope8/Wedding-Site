import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import holudbg from "../assets/holudbg.webp";
import Flowerpattern from "../assets/flowerpattern";
import WeddingTimeline from "./timeline";
import { GiDiamondRing } from "react-icons/gi";
import {
  ArrowRight,
  GlassWater,
  UtensilsCrossed,
  Mic2,
  Cake,
  Music,
  PartyPopper,
} from "lucide-react";
import VenueLocation from "./VenueLocation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Holud = () => {
  const sectionRef = useRef(null);
  const topLeftFlowerRef = useRef(null);
  const bottomRightFlowerRef = useRef(null);

  const holudEvents = [
    { time: "4:00 PM", title: "CEREMONY", Icon: GiDiamondRing },
    { time: "5:00 PM", title: "DRINKS", Icon: GlassWater },
    { time: "6:00 PM", title: "DINNER", Icon: UtensilsCrossed },
    { time: "7:00 PM", title: "SPEECHES", Icon: Mic2 },
    { time: "8:00 PM", title: "CAKE", Icon: Cake },
    { time: "8:30 PM", title: "DANCING", Icon: Music },
    { time: "9:30 PM", title: "FAREWELL", Icon: PartyPopper },
  ];

  useGSAP(() => {
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
      }
    );
    gsap.fromTo(
      bottomRightFlowerRef.current,
      { rotate: 90, x: 200 },
      {
        rotate: 10,
        x: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center+=20% center",
          end: "top top",
          scrub: true,
        },
      }
    );
  });

  return (
    <div
      ref={sectionRef}
      id="holud"
      className="relative w-full bg-gradient-to-b from-zinc-100 from-10% via-amber-200 via-40% to-[#fde047] min-h-screen pb-8"
    >
      <Flowerpattern />
      <img
        id="holudleaf1"
        ref={topLeftFlowerRef}
        src={holudbg || "/placeholder.svg"}
        alt="Holud Background"
        className="absolute -top-28 -left-20 object-contain w-40 h-40 lg:w-96 lg:h-96 z-20 transfrom-origin-top-left transition-all duration-1000 ease-in-out"
      />
      <img
        id="holudleaf2"
        ref={bottomRightFlowerRef}
        src={holudbg || "/placeholder.svg"}
        alt="Holud Background"
        className="absolute -bottom-20 -right-20 object-contain w-40 h-40 lg:w-96 lg:h-96 z-20 mix-blend-multiply transfrom-origin-bottom-right transition-all duration-1000 ease-in-out"
      />
      <div className="h-full w-full flex flex-col items-center justify-evenly pt-12 lg:pt-28 z-10">
        <h1 className="text-4xl lg:text-8xl text-custom-golden font-passionsConflict z-10">
          Join us on our Holud ceremony!
        </h1>
        <p className="text-sm lg:text-3xl text-center px-4 lg:px-20 text-zinc-700 text-balance font-poppins z-10 mt-4 lg:mt-8">
          Please join us for the Dinner and an evening of Traditional Music and
          Dance to celebrate the Holud Ceremony of Mufti & Momo
        </p>
        <button className="flex items-center gap-x-4 justify-between px-8 py-4 md:px-12 md:py-4 text-lg md:text-xl bg-custom-golden bg-opacity-80 rounded-full text-zinc-50 font-medium mt-8 lg:mt-12 hover:bg-opacity-100 transition-all duration-200 z-10">
          RSVP
          <ArrowRight
            className="-mb-0.5 size-6 text-zinc-50"
            strokeWidth={2.5}
          />
        </button>
        <VenueLocation ceremony="Holud" date="19" time="4:00 PM" />

        <WeddingTimeline title="Holud Timeline" events={holudEvents} />
      </div>
    </div>
  );
};

export default Holud;
