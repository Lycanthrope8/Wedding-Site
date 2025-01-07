import React from "react";
import couple from "../assets/couple.jpg";
import couple2 from "../assets/couple2.png";

const Nikkah = () => {
  return (
    <>
      <div id="nikkah" className="w-full h-screen">
        <div className="flex items-center justify-center space-x-2 lg:space-x-4 mt-28">
          <h1 className="font-passionsConflict text-6xl lg:text-9xl text-yellow-600">
            Mufti
          </h1>
          <h1 className="font-passionsConflict text-4xl lg:text-6xl">weds</h1>
          <h1 className="font-passionsConflict text-6xl lg:text-9xl text-yellow-600">
            Momo
          </h1>
        </div>
        <h1 className="text-center text-slate-700 font-poppins font-semibold">
          Join us on this happy beginning of our new life
        </h1>
        <div className="flex items-center justify-between ml-auto mt-20 px-12 h-2/5 w-5/6 lg:w-4/6 bg-white bg-opacity-40 rounded-l-[150px]">
          <img
            src={couple}
            alt="Couple"
            className="size-72 lg:size-96 object-cover mix-blend-multiply z-50"
          />
          <h1 className="text-2xl lg:text-4xl text-slate-700 font-poppins font-semibold w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, est!
          </h1>
        </div>

        {/* <img
          src={couple}
          alt="Couple"
          className="absolute mt-80 lg:mt-60 size-72 lg:size-1/2 object-cover mix-blend-multiply z-50"
        /> */}
      </div>
    </>
  );
};

export default Nikkah;
