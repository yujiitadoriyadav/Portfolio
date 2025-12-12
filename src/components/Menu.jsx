import React, { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import { useNavigate } from "react-router-dom";
// Background image removed

export default function Menu() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    const overlayTimeout = setTimeout(() => {
      setShowContent(true);
      setTimeout(() => setAnimate(true), 100);
      setTimeout(() => setHideOverlay(true), 500);
    }, 500);
    return () => clearTimeout(overlayTimeout);
  }, []);

  const onBackHandle = () => {
    navigate("/");
  };

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <CustomCursor />

  {/* Background overlay removed */}

      {/* Top-down overlay animation */}
      {!hideOverlay && (
        <div
          className={`absolute inset-0 z-50 bg-black transition-all duration-500 ${
            showContent ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transform: showContent ? "translateY(-100%)" : "translateY(0)",
            transition:
              "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease 0.5s",
          }}
        />
      )}

      {/* Main content */}
      <div
        className={`${
          showContent ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 w-full h-full flex flex-col items-center justify-center z-10`}
      >
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex flex-col items-center space-y-4">
            {["HOME", "LATEST WORK", "ABOUT ME", "CONTACT"].map((label) => (
              <button
                key={label}
                className={`text-4xl md:text-5xl font-medium text-black text-center tracking-wide select-none focus:outline-none transition-all duration-200 hover:scale-125 hover:tracking-widest
                  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ fontFamily: "'Anton', sans-serif" }}
                onClick={() => {
                  if (label === "HOME") navigate("/");
                  if (label === "ABOUT ME") navigate("/about");
                  if (label === "LATEST WORK") navigate("/projects");
                  if (label === "CONTACT") navigate("/contact");
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Back Button */}
          <button
            onClick={onBackHandle}
            className={`mt-8 text-2xl font-normal text-black relative overflow-hidden group transition-all duration-200 hover:scale-125 hover:tracking-widest
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="relative z-10 group-hover:line-through transition-all duration-200">
              BACK
            </span>
          </button>
        </div>

        {/* LinkedIn icon */}
        <a
          href="https://www.linkedin.com/in/dev-pratap-39543b288/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="absolute bottom-8 left-8 z-10 bg-black rounded"
        >
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="none" stroke="#000" strokeWidth="1" />
            <path
              d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.356-.675 1.226-1.387 2.523-1.387 2.7 0 3.2 1.776 3.2 4.084v4.21h-2.667v-3.733c0-.89-.016-2.037-1.241-2.037-1.242 0-1.432.97-1.432 1.97v3.8h-2.667v-8z"
              fill="#ffff"
            />
          </svg>
        </a>

        {/* Footer */}
        { <div className="absolute bottom-8 right-8 text-xs text-black z-[999]">
          ©2025 Dev Pratap. All Rights Reserved
        </div> }
      </div>
    </div>
  );
}
