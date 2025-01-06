import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute w-full grid grid-cols-3 mt-8">
      <button className="sm:text-xl lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 transition-all ease-in-out duration-300">
        Nikkah
      </button>
      <button className="sm:text-xl lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 transition-all ease-in-out duration-300">
        Holud
      </button>
      <button className="sm:text-xl lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 transition-all ease-in-out duration-300">
        Gifts
      </button>
    </nav>
  );
};

export default Navbar;
