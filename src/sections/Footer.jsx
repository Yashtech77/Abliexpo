import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f2747] text-white">

      <div className="px-6 md:px-20 py-14 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-300">Head office: Pune, India</p>
          <p className="text-sm text-gray-300 mt-2">Regional offices:</p>
          <p className="text-sm text-gray-300">
            USA | Singapore | Dubai | Ghana | Kenya | Geneva (SW)
          </p>
          <p className="text-sm mt-4 text-gray-300">support@abliexpo.com</p>
          <p className="text-sm text-gray-300">(+91) 9356002701</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Disclaimer</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>

          <div className="flex gap-3 mb-6">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e3a5f] hover:bg-blue-600 cursor-pointer">
              <FaFacebookF size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e3a5f] hover:bg-blue-600 cursor-pointer">
              <FaLinkedinIn size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e3a5f] hover:bg-blue-600 cursor-pointer">
              <FaTwitter size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e3a5f] hover:bg-blue-600 cursor-pointer">
              <FaYoutube size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e3a5f] hover:bg-blue-600 cursor-pointer">
              <FaInstagram size={16} />
            </div>
          </div>

          <h3 className="font-semibold mb-3">Subscribe</h3>
          <div className="flex items-center border border-gray-500 rounded-full overflow-hidden w-full max-w-xs">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-transparent px-4 py-2 outline-none flex-1 text-sm"
            />
            <button className="px-4 py-2 bg-[#1e3a5f] hover:bg-blue-600">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 px-6 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div className="text-lg font-semibold text-white">AbliExpo</div>
        <div className="mt-2 md:mt-0">
          Copyright © 2021 Abliexpo | Powered by Abliexpo
        </div>
      </div>
    </div>
  );
};

export default Footer;