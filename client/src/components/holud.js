import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import holudbg from "../assets/holudbg.webp";
import { ChevronRight } from "lucide-react";
import Flowerpattern from "../assets/flowerpattern";
import WeddingTimeline from "./timeline";
import { GiDiamondRing } from "react-icons/gi";
import {
  GlassWater,
  UtensilsCrossed,
  Mic2,
  Cake,
  Music,
  PartyPopper,
} from "lucide-react";

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
          start: "center+=10% center",
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
      className="relative bg-gradient-to-b from-zinc-100 from-10% via-amber-200 via-40% to-[#fde047] h-max pb-8 lg:pb-0 lg:h-screen"
    >
      <Flowerpattern />
      <img
        id="holudleaf1"
        ref={topLeftFlowerRef}
        src={holudbg}
        alt="Holud Background"
        className="absolute -top-40 -left-20 object-contain w-40 h-40 lg:w-96 lg:h-96 z-20 transfrom-origin-top-left transition-all duration-1000 ease-in-out"
      />
      <img
        id="holudleaf2"
        ref={bottomRightFlowerRef}
        src={holudbg}
        alt="Holud Background"
        className="absolute -bottom-20 -right-20 object-contain w-40 h-40 lg:w-96 lg:h-96 z-20 mix-blend-multiply transfrom-origin-bottom-right transition-all duration-1000 ease-in-out"
      />
      <div className=" h-full flex flex-col items-center justify-evenly p-0 lg:pt-28">
        <h1 className="text-4xl lg:text-8xl text-custom-golden font-passionsConflict z-10">
          Join us on our Holud ceremony!
        </h1>
        <div className="w-full lg:w-3/4 flex flex-col lg:flex-row z-10">
          <p className="text-sm lg:text-2xl text-center px-4 lg:px-20 text-zinc-700 text-balance lg:text-pretty">
            Sometimes, the most beautiful love stories are the ones crafted by
            fate. As soon as our paths crossed, time seemed to stop. It was as
            if fate had stitched our meeting into the very fabric of time. It
            all started in the most traditional way: two individuals met in a
            sea of people and opened up a conversation. Every shared laugh,
            stolen look, and deep talk has woven our love tale.
          </p>
          <p className="text-sm lg:text-2xl text-center px-4 lg:px-20 text-zinc-700 lg:text-pretty">
            Every second we spend together feels like a gift we hold close to
            our hearts. Our love gets stronger every day, and we're excited
            about all the things that could happen on this journey together.
            We're not just partners; we're also those with dreams who are
            walking hand-in-hand toward a future full of love and excitement.
            Let's enjoy this amazing relationship and every lovely moment we
            share, knowing this is merely the beginning of our forever.
          </p>
        </div>
        <button className="flex items-center gap-x-4 justify-between px-12 py-4 text-xl bg-custom-golden bg-opacity-80 rounded-lg text-zinc-50 font-medium mt-8 lg:mt-4 hover:bg-opacity-100 transition-all duration-200 z-10">
          RSVP
          <ChevronRight
            className="-mb-0.5 size-6 text-zinc-50"
            strokeWidth={2.5}
          />
        </button>
        <WeddingTimeline title="Holud Timeline" events={holudEvents} />
      </div>
    </div>
  );
};

export default Holud;
