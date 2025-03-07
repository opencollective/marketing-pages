"use client";
import { motion } from "framer-motion";

export function Logo({}) {
  // Arc variants - only affects the strokeDasharray
  const arcVariants = {
    initial: {
      strokeDasharray: "0.001 0.999",
      transition: { duration: 0 },
    },
    animate: {
      strokeDasharray: "0.245 0.755",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  // Animation for the dots container
  const dotsContainerVariants = {
    initial: {
      rotate: 0,
      transition: { duration: 0 },
    },
    animate: {
      rotate: 88.2,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  // Common style for 45-degree counter-clockwise rotation
  const rotatedStyle = {
    transform: "rotate(-45deg)",
    transformOrigin: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    position: "relative" as const,
  };

  return (
    <div style={rotatedStyle}>
      <motion.div
        initial="initial"
        animate="animate"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "40px",
          height: "40px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          style={{
            borderRadius: "50%",
            position: "absolute",
          }}
        >
          {/* Container for the arcs */}
          <g>
            {/* First Quarter - Blue (0 to 90 degrees) */}
            <motion.circle
              cx="20"
              cy="20"
              r="16"
              stroke="#3B82F6" // Blue
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              pathLength="1"
              transform="rotate(-90, 20, 20)"
              variants={arcVariants}
            />

            {/* Second Quarter - Yellow (90 to 180 degrees) */}
            <motion.circle
              cx="20"
              cy="20"
              r="16"
              stroke="#FFD966" // Yellow
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              pathLength="1"
              transform="rotate(0, 20, 20)"
              variants={arcVariants}
            />

            {/* Third Quarter - Red (180 to 270 degrees) */}
            <motion.circle
              cx="20"
              cy="20"
              r="16"
              stroke="#F87171" // Red
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              pathLength="1"
              transform="rotate(90, 20, 20)"
              variants={arcVariants}
            />

            {/* Fourth Quarter - Green (270 to 360 degrees) */}
            <motion.circle
              cx="20"
              cy="20"
              r="16"
              stroke="#4ADE80" // Green
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              pathLength="1"
              transform="rotate(180, 20, 20)"
              variants={arcVariants}
            />
          </g>

          {/* Container for the dots */}
          <motion.g
            variants={dotsContainerVariants}
            style={{ transformOrigin: "20px 20px" }}
          >
            {/* Blue dot at the top (-90 degrees) */}
            <circle
              cx="20"
              cy="4"
              r="4"
              fill="#2563EB" // Darker blue
            />

            {/* Yellow dot at the right (0 degrees) */}
            <circle
              cx="36"
              cy="20"
              r="4"
              fill="#ECC94A" // Darker yellow
            />

            {/* Red dot at the bottom (90 degrees) */}
            <circle
              cx="20"
              cy="36"
              r="4"
              fill="#E53E3E" // Darker red
            />

            {/* Green dot at the left (180 degrees) */}
            <circle
              cx="4"
              cy="20"
              r="4"
              fill="#22C55E" // Darker green
            />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
