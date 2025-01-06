import React from "react";
import couple from "../assets/couple.jpg";

const Nikkah = () => {
  return (<>
    <div className="flex flex-col items-center justify-center -space-y-10">
      <h1 className="font-passionsConflict text-8xl text-yellow-600 z-0">
        Mufti
      </h1>
      <h1 className="font-passionsConflict text-6xl  z-10">weds</h1>
      <h1 className="font-passionsConflict text-8xl text-yellow-600 z-0">
        Momo
      </h1>
    </div>
    <div className="absolute right-0 h-96 w-3/4 bg-gray-200 rounded-tl-full">
      <img
        src={couple}
        alt="Couple"
        className="absolute size-1/2 object-cover mix-blend-multiply"
      />
      <h5 className="text-xl text-center text-gray-200 mb-6">
        Join us for the Nikkah ceremony of Momo and Mufti
      </h5>
      <p className="text-center text-gray-700 mb-8">
        We are excited to invite you to our Nikkah ceremony. Please join us to
        celebrate this special occasion.
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
    </div >
  </>
  );
};

export default Nikkah;
