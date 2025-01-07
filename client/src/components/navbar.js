import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute left-1/2 translate-x-[-50%] w-5/6 grid grid-cols-3 mt-12">
      <button className="sm:text-xl lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 hover:bg-opacity-60 transition-all ease-in-out duration-300">
        Nikkah
      </button>
      <button className="sm:text-xl lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 hover:bg-opacity-60 transition-all ease-in-out duration-300">
        Holud
      </button>
      <button className="sm:text-xl lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 hover:bg-opacity-60 transition-all ease-in-out duration-300">
        Gifts
      </button>
    </nav>
  );
};

export default Navbar;
