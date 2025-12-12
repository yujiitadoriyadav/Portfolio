import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12 ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Text */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-xl font-bold leading-snug">
           Full Stack Developer & UI/UX Designer Enthusiast based in India, specialized in creating modern web applications and Software solutions.
          </h2>
        </div>

        {/* Right Info */}
        <div className="space-y-4 text-gray-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg" />
            <a href="mailto:devpratap.iiitbh27@gmail.com">working.devpratap.com</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation */}
        <div className="flex gap-8 text-gray-300 text-sm">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Projects">Works</a>
          <a href="/Contact">Support</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © Copyright 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
