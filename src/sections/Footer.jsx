import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Globe, Share2 } from 'lucide-react'

const contactLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Contact Us',
  'Global Reach',
  'Sustainability',
]

const Footer = ({ variant = 'default' }) => {
  if (variant === 'contact') {
    return (
      <footer className="border-t border-[#dfe4ef] bg-[#e7e3e8] text-white">
        <div className="mx-auto flex max-w-[1920px] flex-col gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-14">
          <div className="min-w-0">
            <h3 className="text-[1.72rem] font-semibold tracking-[-0.05em] text-[#1d1d1f] sm:text-[1.95rem]">
              Ekspans Expo
            </h3>
            <p className="mt-5 text-[1.02rem] font-medium text-[#5d6677] sm:text-[1.08rem]">
              © 2024 Global Expo Platform. All rights reserved.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-8 lg:ml-12 lg:flex-row lg:items-center lg:justify-end lg:gap-14">
            <nav className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[1.05rem] font-medium text-[#616a79] sm:text-[1.1rem] lg:justify-end">
              {contactLinks.map((label) => (
                <a key={label} href="#" className="transition hover:text-[#2c3342]">
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex h-[3.55rem] w-[3.55rem] items-center justify-center rounded-full bg-white text-[#0f63de] shadow-[0_6px_18px_rgba(95,107,130,0.14)] transition hover:scale-[1.03]"
                aria-label="Global"
              >
                <Globe className="h-6 w-6" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                className="flex h-[3.55rem] w-[3.55rem] items-center justify-center rounded-full bg-white text-[#0f63de] shadow-[0_6px_18px_rgba(95,107,130,0.14)] transition hover:scale-[1.03]"
                aria-label="Share"
              >
                <Share2 className="h-6 w-6" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }

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
