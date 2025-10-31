"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ExternalLinkIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

const fillVariants = {
  initial: {
    scaleY: 0,
    originY: 0, // Start scaling from the left edge
  },
  hover: {
    scaleY: 1,
  },
};

const contentVariants = {
  initial: {
    color: "#ffffff", // Initial white text color
    iconStroke: "#ffffff",
  },
  hover: {
    color: "#000000", // Hover black text color
    iconStroke: "#000000",
    transition: {
      delay: 0.05, // Slight delay so text changes after the white fill starts
      duration: 0.2,
    },
  },
};
export default function BackButton({
  href,
  buttonName,
}: {
  href: string;
  buttonName: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const animationState = isHovered ? "hover" : "initial";

  return (
    <div>
      <motion.a
        // Container properties: set initial black background and hide overflow
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05, border: "2px solid gray-50" }} // Gentle scale up effect on hover
        href={href}
        className="relative inline-flex items-center justify-center font-sans font-medium min-w-11 min-h-11 rounded-full transition-[box-shadow,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none aria-disabled:pointer-events-none select-none will-change-transform bg-black text-white focus-visible:ring-gray-400 px-4 py-2 text-sm overflow-hidden"
      >
        {/* 1. The White Fill Layer (Slides in from the left) */}
        <motion.div
          className="absolute inset-0 bg-white z-0"
          variants={fillVariants}
          initial="initial"
          animate={animationState}
        />

        {/* 2. The Content Layer (Text and Icon, changes color) */}
        <motion.span
          className="relative z-10 inline-flex items-center justify-center gap-2"
          variants={contentVariants}
          initial="initial"
          animate={animationState}
          style={{ color: isHovered ? "#000000" : "#ffffff" }} // Use style for text color
        >
          <span>{buttonName}</span>
          {/* Pass the animated stroke color to the icon */}
          <ExternalLinkIcon color={isHovered ? "black" : "white"} />
        </motion.span>
      </motion.a>
    </div>
  );
}
