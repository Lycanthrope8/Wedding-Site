import React from "react";

export default function WeddingTimeline({ title, events }) {
  return (
    <div className="max-w-6xl mx-auto mt-4 px-4">
      <h1 className="text-center font-passionsConflict text-5xl sm:text-6xl md:text-7xl text-yellow-600 mb-12 sm:mb-16 md:mb-20">
        {title}
      </h1>

      <div className="relative px-2 sm:px-4 md:px-8">
        <div
          className="absolute left-8 sm:left-0 sm:right-0 w-[2px] sm:w-auto sm:h-[2px] top-0 sm:top-28 bottom-0 sm:bottom-auto"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #ca8a04 15%, #ca8a04 85%, transparent 100%)",
            "@media (minWidth: 640px)": {
              background:
                "linear-gradient(90deg, transparent 0%, #ca8a04 15%, #ca8a04 85%, transparent 100%)",
            },
          }}
        />
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex sm:flex-col items-center group transition-all duration-300"
            >
              <div className="mr-6 sm:mr-0 sm:mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="size-16 rounded-full bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 shadow-lg flex items-center justify-center">
                  <event.Icon className="size-7 text-yellow-600" />
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-center flex-1 sm:flex-none">
                <h3 className="text-sm font-medium tracking-wider mb-1 sm:mb-3 text-slate-700">
                  {event.title}
                </h3>
                <div className="hidden sm:block h-5 w-[1px] bg-yellow-600 mb-3" />
                <span className="text-sm font-semibold bg-gradient-to-br from-yellow-600 to-yellow-700 text-transparent bg-clip-text">
                  {event.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:block absolute -left-4 top-24 size-8 rounded-full bg-yellow-100 opacity-50" />
        <div className="hidden sm:block absolute -right-4 top-24 size-8 rounded-full bg-yellow-50 opacity-50" />
      </div>
    </div>
  );
}
