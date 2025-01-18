import React from "react";

const Navbar = () => {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", ease: "" });
    }
  };
  return (
    <nav className="fixed left-1/2 translate-x-[-50%] w-5/6 grid grid-cols-3 mt-8 lg:mt-12 font-poppins text-center text-zinc-600 bg-white bg-opacity-30 rounded-full z-20 backdrop-blur-[2px]">
      <button
        onClick={() => scrollToSection("holud")}
        className=" text-sm lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 hover:bg-opacity-60 transition-all ease-in-out duration-300"
      >
        Holud
      </button>
      <button
        onClick={() => scrollToSection("nikkah")}
        className="text-sm lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 hover:bg-opacity-60 hover:rounded-l-full transition-all ease-in-out duration-300"
      >
        Nikkah
      </button>
      <button
        onClick={() => scrollToSection("gifts")}
        className="text-sm lg:text-2xl hover:tracking-widest tracking-wider py-2 text-zinc-600 hover:bg-yellow-50 hover:bg-opacity-60 hover:rounded-r-full transition-all ease-in-out duration-300"
      >
        Gifts
      </button>
    </nav>
  );
};

export default Navbar;
