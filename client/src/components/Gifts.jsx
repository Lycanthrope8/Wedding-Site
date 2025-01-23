import React, { useState } from "react";
import { ArrowRight, Gift, Users, X } from "lucide-react";
import { MdOutlineRsvp } from "react-icons/md";

const Gifts = ({ ceremony }) => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [attendeeCountHolud, setAttendeeCountHolud] = useState(1);
  const [attendeeCountNikkah, setAttendeeCountNikkah] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams();
    params.append("Name", fullName);
    params.append("Ceremony", ceremony);
    if (ceremony === "wedding") {
      params.append("NikkahCount", attendeeCountNikkah);
    } else if (ceremony === "nikkah") {
      params.append("HoludCount", attendeeCountHolud);
      params.append("NikkahCount", attendeeCountNikkah);
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxy1rxrmPg3kbXlpiLCDde7ytyC4tapAOYk5u0peDbUqAGvlT4ork28u0g78nFA2teX/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
          mode: "no-cors",
        }
      );

      setShowModal(true);
      setFullName("");
      setAttendeeCountHolud(1);
      setAttendeeCountNikkah(1);
    } catch (error) {
      alert("Error submitting RSVP. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="gifts"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-zinc-100 to-[#dad8c9] pt-[20vh] md:p-4 font-poppins"
    >
      <div className="w-full md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 w-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <MdOutlineRsvp className="text-yellow-600 mr-3" size={40} />
              <h2 className="text-4xl font-bold text-slate-700">RSVP</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-base font-medium text-slate-700 mb-2"
                >
                  Your Full Name
                </label>
                <div className="relative">
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-yellow-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 pl-10 transition-all duration-200 hover:border-yellow-600/50"
                    placeholder="Enter your full name"
                  />
                  <Users
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600"
                    size={20}
                  />
                </div>
              </div>

              {ceremony === "nikkah" ? (
                <div>
                  <label
                    htmlFor="attendeeCountHolud"
                    className="block text-base font-medium text-slate-700 mb-2"
                  >
                    How many of you are attending including yourself in the{" "}
                    <span className="text-custom-golden">holud</span> ceremony?
                  </label>
                  <div className="relative">
                    <input
                      id="attendeeCount"
                      type="number"
                      value={attendeeCountHolud}
                      onChange={(e) =>
                        setAttendeeCountHolud(Number.parseInt(e.target.value))
                      }
                      min="0"
                      required
                      className="w-full px-4 py-3 border border-yellow-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 pl-10 transition-all duration-200 hover:border-yellow-600/50"
                      placeholder="Number of Attendees (including you)"
                    />
                    <Users
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600"
                      size={20}
                    />
                  </div>
                </div>
              ) : null}
              <div>
                <label
                  htmlFor="attendeeCount"
                  className="block text-base font-medium text-slate-700 mb-2"
                >
                  How many of you are attending including yourself in the{" "}
                  <span className="text-custom-golden">{ceremony}</span>{" "}
                  ceremony?
                </label>
                <div className="relative">
                  <input
                    id="attendeeCount"
                    type="number"
                    value={attendeeCountNikkah}
                    onChange={(e) =>
                      setAttendeeCountNikkah(Number.parseInt(e.target.value))
                    }
                    min="0"
                    required
                    className="w-full px-4 py-3 border border-yellow-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 pl-10 transition-all duration-200 hover:border-yellow-600/50"
                    placeholder="Number of Attendees (including you)"
                  />
                  <Users
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600"
                    size={20}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full flex items-center gap-x-4 justify-between px-6 py-3 ${
                  loading
                    ? "bg-gray-500 border-gray-500/0 cursor-not-allowed"
                    : "bg-custom-golden/80 border-custom-golden/0 hover:bg-transparent hover:border-custom-golden/80 hover:text-custom-golden/80"
                }  rounded-full text-zinc-50 font-medium transition-all duration-200 transform  border-2`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Confirm RSVP"}
                {!loading && (
                  <ArrowRight
                    className="-mb-0.5 size-5 sm:size-6 text-zinc-50"
                    strokeWidth={2.5}
                  />
                )}
              </button>
            </form>
          </div>

          <div className="col-span-1 w-full flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl w-full shadow-lg transition-all duration-300 hover:shadow-xl">
              <Gift className="text-yellow-600 mx-auto mb-4" size={40} />
              <h2 className="text-sm md:text-lg font-bold mb-6 text-slate-700 text-center text-pretty">
                Your presence is enough of a present to us! But for those of you
                who are stubborn, we've put together a wish-list to help you
                out.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[1, 2, 3].map((qr) => (
                  <div
                    key={qr}
                    className="border-2 border-yellow-600/30 p-4 rounded-lg text-center transition-all duration-200 hover:border-yellow-600 hover:shadow-md cursor-pointer"
                  >
                    <img
                      src={`/placeholder.svg?height=150&width=150&text=QR ${qr}`}
                      alt={`QR Code ${qr}`}
                      className="mx-auto mb-2"
                    />
                    <p className="text-sm text-slate-600">Scan QR {qr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-slate-700">Thank You!</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-slate-600 mb-4">
              Your RSVP has been submitted successfully. We look forward to
              seeing you at the ceremony!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-custom-golden text-white py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gifts;
