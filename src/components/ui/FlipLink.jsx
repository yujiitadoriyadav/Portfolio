import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, icon }) => {
  // Animation variants for the top layer (moves up)
  const topLayerVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  // Animation variants for the bottom layer (moves in from bottom)
  const bottomLayerVariants = {
    initial: { y: "100%" },
    hovered: { y: 0 },
  };

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase dark:text-white/90 sm:text-7xl md:text-8xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      {/* Top Layer */}
      <div className="flex items-center">
        {/* Animate the icon */}
        <motion.span
          variants={topLayerVariants}
          transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * 0 }}
          className="mr-4 inline-block" // Added margin-right for spacing
        >
          {icon}
        </motion.span>
        {/* Animate each letter of the text */}
        {children.split("").map((l, i) => (
          <motion.span
            variants={topLayerVariants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * (i + 1), // Delay starts after the icon
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Bottom Layer (Absolutely Positioned) */}
      <div className="absolute inset-0 flex items-center">
        {/* Animate the icon */}
        <motion.span
          variants={bottomLayerVariants}
          transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * 0 }}
          className="mr-4 inline-block"
        >
          {icon}
        </motion.span>
        {/* Animate each letter of the text */}
        {children.split("").map((l, i) => (
          <motion.span
            variants={bottomLayerVariants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * (i + 1),
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;