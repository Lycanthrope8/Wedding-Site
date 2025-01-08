import React from "react";
import corner3 from "../assets/corner3.png";
import couple from "../assets/couple.jpg";
import heroFlower from "../assets/heroflower.png";

import { MapPin, Clock, Calendar, Heart, ChevronRight } from "lucide-react";

const Nikkah = () => {
  return (
    <>
      <div
        id="nikkah"
        className="w-full min-h-screen pb-12 px-4 sm:px-6 lg:px-0"
      >
        <h1 className="absolute left-1/2 translate-x-[-50%] font-bold text-md lg:text-2xl text-custom-golden">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِي
        </h1>
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-100 left-0 size-24 lg:size-48 scale-x-[-1] -rotate-90 z-50"
        />
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-100 right-0 size-24 lg:size-48 rotate-90 z-50"
        />
        <div className="flex items-center justify-center gap-2 lg:gap-4 mt-24 lg:mt-28 pt-4 lg:pt-32">
          <h1 className="font-passionsConflict text-6xl sm:text-6xl lg:text-9xl text-yellow-600">
            Mufti
          </h1>
          <span className="font-passionsConflict text-2xl sm:text-6xl lg:text-6xl">
            weds
          </span>
          <h1 className="font-passionsConflict text-6xl sm:text-6xl lg:text-9xl text-yellow-600">
            Momo
          </h1>
        </div>

        <h2 className="text-center text-slate-700 font-poppins font-semibold text-sm sm:text-base mt-4">
          Join us on this happy beginning of our new life
        </h2>

        <div className="flex justify-between items-center mt-2 sm:mt-12">
          <img
            src={heroFlower}
            alt="Hero Flower"
            className="size-0 lg:size-96"
          />
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between mx-auto md:ml-auto md:mx-0 mt-12 sm:mt-20 p-6 sm:px-12 min-h-[300px] w-11/12 sm:w-5/6 lg:w-4/6 bg-white/40 rounded-3xl md:rounded-l-[140px] md:rounded-r-none">
            <img
              src={couple}
              alt="Couple"
              className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover mix-blend-multiply z-10"
            />
            <div className="flex flex-col items-center justify-center gap-12">
              <h1 className="text-xl sm:text-2xl lg:text-4xl text-slate-700 font-poppins font-semibold text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                est!
              </h1>
              <button className="flex items-center gap-x-4 justify-between px-12 py-4 text-xl bg-custom-golden bg-opacity-80 rounded-lg text-zinc-50 font-medium mt-4 hover:bg-opacity-100 transition-all duration-100">
                RSVP
                <ChevronRight
                  className="-mb-0.5 size-6 text-zinc-50"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 px-4 sm:px-8 lg:px-12">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl text-yellow-600 font-passionsConflict mb-6 sm:mb-8">
            Venue Location
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 transform hover:scale-102 transition-all duration-300">
              <div className="relative justify-center">
                <Heart className="absolute -top-10 right-0 w-8 h-8 text-yellow-600 opacity-50" />
                {/* <h3 className="text-2xl lg:text-3xl font-poppins font-semibold text-slate-700 mb-8">
                  Ceremony Details
                </h3> */}

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-700 group">
                    <div className="p-3 bg-yellow-50 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-yellow-600 font-medium">
                        Date
                      </p>
                      <span className="font-semibold text-lg">
                        February 20, 2025
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-700 group">
                    <div className="p-3 bg-yellow-50 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-yellow-600 font-medium">
                        Time
                      </p>
                      <span className="font-semibold text-lg">4:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-700 group">
                    <div className="p-3 bg-yellow-50 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-yellow-600 font-medium">
                        Location
                      </p>
                      <p className="font-semibold text-lg">1 Marina Road</p>
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

            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
      </div>
    </>
  );
};

export default Nikkah;
