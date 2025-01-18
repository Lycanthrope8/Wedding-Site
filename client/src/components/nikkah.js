import React from "react";
import couple from "../assets/couple.jpg";
import heroFlower from "../assets/heroflower.webp";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WeddingTimeline from "./timeline";
import PipesPattern from "../assets/pipespattern";
import { GiDiamondRing } from "react-icons/gi";
import {
  MapPin,
  Clock,
  Calendar,
  Heart,
  ArrowRight,
  GlassWater,
  UtensilsCrossed,
  Mic2,
  Cake,
  Music,
  PartyPopper,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Nikkah = () => {
  const nikkahEvents = [
    { time: "4:00 PM", title: "CEREMONY", Icon: GiDiamondRing },
    { time: "5:00 PM", title: "DRINKS", Icon: GlassWater },
    { time: "6:00 PM", title: "DINNER", Icon: UtensilsCrossed },
    { time: "7:00 PM", title: "SPEECHES", Icon: Mic2 },
    { time: "8:00 PM", title: "CAKE", Icon: Cake },
    { time: "8:30 PM", title: "DANCING", Icon: Music },
    { time: "9:30 PM", title: "FAREWELL", Icon: PartyPopper },
  ];
  const saveTheDate = () => {
    const event = {
      text: "Mufti & Momo's Wedding Ceremony",
      dates: "20250220T160000Z/20250220T180000Z",
      details: "Join us for our special day!",
      location: "1 Marina Rd, Flushing, NY 11368",
    };

    const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&dates=${event.dates}&details=${encodeURIComponent(
      event.details
    )}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;

    const appleCalendarFile = `BEGIN:VCALENDAR
  VERSION:2.0
  CALSCALE:GREGORIAN
  BEGIN:VEVENT
  DTSTART:20250220T160000Z
  DTEND:20250220T180000Z
  SUMMARY:Wedding Ceremony
  DESCRIPTION:Join us for our special day!
  LOCATION:1 Marina Rd, Flushing, NY 11368
  END:VEVENT
  END:VCALENDAR`;

    const calendarChoice = window.confirm(
      "Choose calendar type:\nOK for Google Calendar\nCancel for Apple Calendar"
    );

    if (calendarChoice) {
      window.open(googleCalendarLink, "_blank");
    } else {
      const element = document.createElement("a");
      const file = new Blob([appleCalendarFile], { type: "text/calendar" });
      element.href = URL.createObjectURL(file);
      element.download = "wedding-ceremony.ics";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <>
      <div
        id="nikkah"
        className="relative w-full min-h-screen pb-12 px-4 sm:px-6 lg:px-0 bg-gradient-to-b from-zinc-100 to-[#dad8c9]"
      >
        <h2 className="text-center text-slate-700 font-poppins font-semibold text-sm sm:text-base pt-28">
          Join us on this happy beginning of our new life
        </h2>

        <div className="flex justify-between items-center mt-2">
          <img
            src={heroFlower}
            alt="Hero Flower"
            loading="lazy"
            fetchPriority="high"
            className="size-0 lg:size-96"
          />
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between mx-auto md:ml-auto md:mx-0 mt-8 sm:mt-12 p-6 sm:px-12 min-h-[300px] w-11/12 sm:w-5/6 lg:w-4/6 bg-white/40 rounded-3xl md:rounded-l-[140px] md:rounded-r-none">
            <img
              src={couple}
              alt="Couple"
              className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover mix-blend-multiply z-10"
            />
            <div className="flex flex-col items-center justify-center gap-12">
              <h1 className="text-xl sm:text-2xl lg:text-4xl text-slate-700 font-poppins font-semibold text-center text-pretty">
                We're getting married! We request your gracious presence at our
                Nikkah ceremony!
              </h1>
              <button className="flex items-center gap-x-4 justify-between px-12 py-4 text-xl bg-custom-golden bg-opacity-80 rounded-full text-zinc-50 font-medium mt-4 hover:bg-opacity-100 transition-all duration-200">
                RSVP
                <ArrowRight
                  className="-mb-0.5 size-6 text-zinc-50"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </div>

        <PipesPattern />
        <div className=" mt-12 sm:mt-20 px-4 sm:px-8 lg:px-12">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-7xl text-yellow-600 font-passionsConflict mb-6 sm:mb-8">
            Venue Location
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-102 transition-all duration-300">
              <div className="relative justify-center">
                <Heart className="absolute -top-10 right-0 w-8 h-8 text-yellow-600 opacity-50" />

                <div className="space-y-6 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-4 text-slate-700 group">
                    <div>
                      <p
                        className="text-lg text-yellow-600 font-medium flex items-center gap-2"
                        onClick={saveTheDate}
                      >
                        <Calendar /> Save the Date
                      </p>
                      <div className="grid grid-cols-3 divide-x gap-8 font-semibold text-4xl">
                        <span className="text-center">February</span>
                        <span className="text-center">20</span>
                        <span className="text-center">2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-700 group">
                    <div className="p-3 bg-yellow-50 rounded-xl ">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-yellow-600 font-medium">
                        Time
                      </p>
                      <span className="font-semibold text-2xl">4:00 PM</span>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-yellow-600 font-medium">
                        Location
                      </p>
                      <p className="font-semibold text-2xl">1 Marina Road</p>
                      <p className="font-semibold text-lg">
                        Flushing, NY 11368
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/maps?q=1+Marina+Rd,+Flushing,+NY+11368,+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-700 transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
              <iframe
                title="Venue Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2414477099906!2d-73.86035232346177!3d40.76121213912591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fe93afd0c2d%3A0xa1de5312b54aa2bc!2s1%20Marina%20Rd%2C%20Flushing%2C%20NY%2011368!5e0!3m2!1sen!2sus!4v1704644019346!5m2!1sen!2sus"
                className="w-full h-full rounded-2xl border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <WeddingTimeline title="Nikkah Timeline" events={nikkahEvents} />
      </div>
    </>
  );
};

export default Nikkah;
