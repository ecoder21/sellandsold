import React from 'react';

export default function OlxLogo() {
  return (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="24" cy="24" r="24" fill="#3a4843" />

      {/* Compass shape */}
      <g fill="#caa660">
        {/* Horizontal line */}
        <rect x="8" y="21" width="32" height="1.2" />
        {/* Vertical line */}
        <rect x="22" y="8" width="1.2" height="32" />
        {/* Top spike */}
        <polygon points="24,5 26,17 22,17" />
        {/* Bottom spike */}
        <polygon points="24,43 26,31 22,31" />
      </g>

      {/* Text */}
      <text
        x="50%"
        y="16"
        fontFamily="Arial"
        fontSize="5"
        fill="#caa660"
        textAnchor="middle"
      >
        COLLEGE
      </text>
      <text
        x="50%"
        y="26"
        fontFamily="Arial"
        fontSize="5"
        fill="#caa660"
        textAnchor="middle"
      >
        COMPASS
      </text>
    </svg>
  );
}
