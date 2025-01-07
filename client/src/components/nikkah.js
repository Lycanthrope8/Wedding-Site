import React from "react";
import couple from "../assets/couple.jpg";
import couple2 from "../assets/couple2.png";

const Nikkah = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="absolute mt-80 right-0 h-2/5 w-4/6 bg-white bg-opacity-40 rounded-l-[150px]"></div>
        <div className="flex items-center justify-center space-x-4 mt-28">
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
      </div>
    </>
  );
};

export default Nikkah;
