

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import CustomCursor from "./CustomCursor";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-black text-white z-50 fixed top-0 left-0 shadow-lg shadow-gray-900/40">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <CustomCursor /> {/* Smooth glowing cursor */}
          {/* Hamburger (for small screens) */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} className="text-white" />
          </button>

          {/* Logo / Name */}
          <h1
            className="text-xl font-bold tracking-wider hover:scale-110 transition-transform duration-300 cursor-pointer"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Dev Pratap
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { to: "/", label: "Home" },
            { to: "/Projects", label: "Latest Work" },
            { to: "/about", label: "About Me" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
          <h2
            className="text-lg font-semibold tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Menu
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-gray-300 hover:text-white transition-colors" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 px-6 py-8">
          {[
            { to: "/", label: "Home" },
            { to: "/Projects", label: "Latest Work" },
            { to: "/about", label: "About Me" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white underline underline-offset-4"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Optional background dim effect when sidebar opens */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 z-40"
        ></div>
      )}
    </>
  );
}