import React from "react";
import couple from "../assets/couple.jpg";
import couple2 from "../assets/couple2.png";

const Nikkah = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="absolute mt-80 right-0 h-2/5 w-4/6 bg-gray-200 rounded-tl-[150px]"></div>
        <div className="flex items-center justify-center space-x-4">
          <h1 className="font-passionsConflict text-9xl text-yellow-600">
            Mufti
          </h1>
          <h1 className="font-passionsConflict text-6xl">weds</h1>
          <h1 className="font-passionsConflict text-9xl text-yellow-600">
            Momo
          </h1>
        </div>
        <img
          src={couple}
          alt="Couple"
          className="absolute mt-60 size-1/2 object-cover mix-blend-multiply z-50"
        />
        <div>
          <h5 className="text-xl text-center text-gray-200 mb-6">
            Join us for the Nikkah ceremony of Momo and Mufti
          </h5>
          <p className="text-center text-gray-700 mb-8">
            We are excited to invite you to our Nikkah ceremony. Please join us
            to celebrate this special occasion.
          </p>
          <div className="flex justify-center">
            <a
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nikkah;
