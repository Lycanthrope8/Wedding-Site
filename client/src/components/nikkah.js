import React from "react";
import couple from "../assets/couple.jpg";
import { MapPin, Clock, Calendar } from "lucide-react";

const Nikkah = () => {
  return (
    <div id="nikkah" className="w-full min-h-screen pb-12 px-4 sm:px-6 lg:px-0">
      <div className="flex items-center justify-center gap-2 lg:gap-4 mt-20 lg:mt-28">
        <h1 className="font-passionsConflict text-4xl sm:text-6xl lg:text-9xl text-yellow-600">
          Mufti
        </h1>
        <span className="font-passionsConflict text-2xl sm:text-4xl lg:text-6xl">
          weds
        </span>
        <h1 className="font-passionsConflict text-4xl sm:text-6xl lg:text-9xl text-yellow-600">
          Momo
        </h1>
      </div>

      <h2 className="text-center text-slate-700 font-poppins font-semibold text-sm sm:text-base mt-4">
        Join us on this happy beginning of our new life
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between mx-auto md:ml-auto md:mx-0 mt-12 sm:mt-20 p-6 sm:px-12 min-h-[300px] w-11/12 sm:w-5/6 lg:w-4/6 bg-white/40 rounded-3xl sm:rounded-l-[150px]">
        <img
          src={couple}
          alt="Couple"
          className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover mix-blend-multiply z-10"
        />
        <h1 className="text-xl sm:text-2xl lg:text-4xl text-slate-700 font-poppins font-semibold sm:w-1/2 text-center sm:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, est!
        </h1>
      </div>

      <div className="mt-12 sm:mt-20 px-4 sm:px-8 lg:px-12">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl text-yellow-600 font-passionsConflict mb-6 sm:mb-8">
          Venue Location
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2 bg-white/40 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-semibold text-slate-700 mb-4 sm:mb-6">
              Ceremony Details
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                <span className="font-semibold text-sm sm:text-base">
                  February 20, 2025
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                <span className="font-semibold text-sm sm:text-base">
                  4:00 PM
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    1 Marina Road
                  </p>
                  <p className="font-semibold text-sm sm:text-base">
                    Flushing, NY 11368
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/maps?q=1+Marina+Rd,+Flushing,+NY+11368,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 bg-yellow-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-300 font-medium text-sm sm:text-base"
            >
              Get Directions
            </a>
          </div>

          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2414477099906!2d-73.86035232346177!3d40.76121213912591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fe93afd0c2d%3A0xa1de5312b54aa2bc!2s1%20Marina%20Rd%2C%20Flushing%2C%20NY%2011368!5e0!3m2!1sen!2sus!4v1704644019346!5m2!1sen!2sus"
              className="w-full h-full rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nikkah;
