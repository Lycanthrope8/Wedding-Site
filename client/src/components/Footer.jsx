import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100/70 py-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-gray-700 mb-2">
            If you need assistance, please reach out to us.
          </p>
          <p className="text-sm md:text-base text-gray-700">
            We are happy to answer any questions you may have.
          </p>
        </div>
        <div className="flex space-x-6">
          <div>
            <span className="block text-sm text-gray-400 mb-1">Mufti</span>
            <a
              href="tel:+12062295442"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              +1 (206) 229-5442
            </a>
          </div>
          <div className="border-l border-gray-800 pl-6">
            <span className="block text-sm text-gray-400 mb-1">Momo</span>
            <a
              href="tel:+16092336977"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              +1 (609) 233-6977
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
