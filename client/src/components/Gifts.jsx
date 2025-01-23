import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Gifts = ({ ceremony }) => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [attendeeCount, setAttendeeCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams();
    params.append("Name", fullName);
    params.append("Count", attendeeCount);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzFgx6B8lBI-i6AZIXoeDqyaill2QYNg8oR7kZa8pPVukhR2H4hFIGfxleZv-OU2R_6/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
          mode: "no-cors",
        }
      );

      alert("RSVP submitted successfully!");
      setFullName("");
      setAttendeeCount(1);
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
      className="flex items-center justify-center bg-gradient-to-b from-zinc-100 to-[#dad8c9] min-h-screen p-4"
    >
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                placeholder="Full Name"
              />

              <input
                type="number"
                value={attendeeCount}
                onChange={(e) => setAttendeeCount(parseInt(e.target.value))}
                min="1"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                placeholder="How many of you are attending including yourself in the Holud Ceremony?"
              />

              <button
                type="submit"
                className={`w-full flex items-center gap-x-4 justify-between px-6 py-3 ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-custom-golden"
                } bg-opacity-80 rounded-full text-zinc-50 font-medium hover:bg-opacity-100 transition-all duration-200`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit RSVP"}
                {!loading && (
                  <ArrowRight
                    className="-mb-0.5 size-5 sm:size-6 text-zinc-50"
                    strokeWidth={2.5}
                  />
                )}
              </button>
            </form>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white/40 p-6 rounded-lg w-full">
              <h2 className="text-2xl font-semibold mb-4 text-slate-700 text-center">
                Gift QR Codes
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="border p-2 rounded text-center">QR 1</div>
                <div className="border p-2 rounded text-center">QR 2</div>
                <div className="border p-2 rounded text-center">QR 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
