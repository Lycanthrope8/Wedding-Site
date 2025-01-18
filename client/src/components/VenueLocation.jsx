import { useState } from "react";
import { Calendar, ChevronDown, Clock, Heart, MapPin } from "lucide-react";

const VenueLocation = ({ ceremony, date, time }) => {
  const [isCalendarDropdownOpen, setIsCalendarDropdownOpen] = useState(false);

  const [hourMinutes, period] = time.split(" ");
  let [hours, minutes] = hourMinutes.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }
  const saveTheDate = (calendarType) => {
    const event = {
      text: `Mufti & Momo's ${ceremony} Ceremony`,
      startDate: `202502${date}T${hours.toString().padStart(2, "0")}${minutes
        .toString()
        .padStart(2, "0")}00`,
      endDate: `202502${date}T230000`,
      details: `Join us for our ${ceremony} ceremony!`,
      location: "World's Fair Marina Banquet",
    };

    if (calendarType === "google") {
      const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        event.text
      )}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(
        event.details
      )}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
      window.open(googleCalendarLink, "_blank");
    } else if (calendarType === "apple") {
      const now = new Date();
      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//MuftiAndMomoWedding//EN",
        "CALSCALE:GREGORIAN",
        "BEGIN:VTIMEZONE",
        "TZID:America/New_York",
        "LAST-MODIFIED:20240422T053450Z",
        "TZURL:https://www.tzurl.org/zoneinfo-outlook/America/New_York",
        "X-LIC-LOCATION:America/New_York",
        "BEGIN:DAYLIGHT",
        "TZNAME:EDT",
        "TZOFFSETFROM:-0500",
        "TZOFFSETTO:-0400",
        "DTSTART:19700308T020000",
        "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
        "END:DAYLIGHT",
        "BEGIN:STANDARD",
        "TZNAME:EST",
        "TZOFFSETFROM:-0400",
        "TZOFFSETTO:-0500",
        "DTSTART:19701101T020000",
        "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
        "END:STANDARD",
        "END:VTIMEZONE",
        "BEGIN:VEVENT",
        `DTSTAMP:${now.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
        `UID:${now.getTime()}-${Math.floor(
          Math.random() * 100000
        )}@muftiandmomo.com`,
        `DTSTART;TZID=America/New_York:${event.startDate}`,
        `DTEND;TZID=America/New_York:${event.endDate}`,
        `SUMMARY:${event.text}`,
        `DESCRIPTION:${event.details}`,
        `LOCATION:${event.location}`,
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\r\n");

      const element = document.createElement("a");
      const file = new Blob([icsContent], { type: "text/calendar" });
      element.href = URL.createObjectURL(file);
      element.download = `${ceremony}-ceremony.ics`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    setIsCalendarDropdownOpen(false);
  };

  return (
    <>
      <div className="w-full mt-8 lg:mt-12 px-4 sm:px-8 lg:px-12 z-10">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-7xl text-yellow-600 font-passionsConflict mb-6 sm:mb-8">
          Venue Location
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 font-poppins">
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-6 sm:p-4 rounded-2xl border border-white/20 transform hover:scale-102 transition-all duration-300">
            <div className="relative flex flex-col items-center justify-center space-y-6">
              <Heart className="absolute -top-6 right-0 w-8 h-8 text-custom-golden opacity-50" />

              <div className="text-center">
                <h3 className="text-xl sm:text-3xl font-bold text-custom-golden mb-2">
                  Save the Date
                </h3>
                <div className="text-2xl sm:text-5xl font-bold text-slate-700">
                  <span>February {date}</span>
                  <span className="text-custom-golden">,</span>
                  <span> 2025</span>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() =>
                    setIsCalendarDropdownOpen(!isCalendarDropdownOpen)
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-custom-golden text-white rounded-lg hover:bg-custom-golden/70 transition-colors duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Add to Calendar</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isCalendarDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        onClick={() => saveTheDate("google")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      >
                        Google Calendar
                      </button>
                      <button
                        onClick={() => saveTheDate("apple")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      >
                        Apple Calendar
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <Clock className="w-6 h-6 text-custom-golden" />
                  </div>
                  <div>
                    <p className="text-sm text-custom-golden font-medium">
                      Time
                    </p>
                    <span className="font-semibold text-2xl">{time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-custom-golden" />
                  </div>
                  <div>
                    <p className="text-sm text-custom-golden font-medium">
                      Location
                    </p>
                    {/* <p className="font-semibold text-xl">1 Marina Road</p>
                    <p className="font-semibold text-lg">Flushing, NY 11368</p> */}
                    <p className="font-semibold text-lg">
                      World's Fair Marina Banquet
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/qpQnAoa8WjRWJ2bz7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-custom-golden text-white px-6 py-3 rounded-xl hover:bg-custom-golden/70 transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0364060556194!2d-73.857806!3d40.761224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fe6444e4f2f%3A0x6288db159804b66e!2sWorld&#39;s%20Fair%20Marina%20Banquet!5e0!3m2!1sen!2sbd!4v1737217282791!5m2!1sen!2sbd"
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VenueLocation;
