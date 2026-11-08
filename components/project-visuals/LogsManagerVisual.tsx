"use client";

import React from "react";

export const LogsManagerVisual: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className ?? ""}`}>
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="200" height="120" fill="#1e293b" rx="8" />
        {/* Server icon */}
        <rect x="40" y="20" width="40" height="24" rx="2" fill="#94a3b8" />
        <rect x="40" y="50" width="40" height="24" rx="2" fill="#94a3b8" />
        <rect x="40" y="80" width="40" height="24" rx="2" fill="#94a3b8" />
        {/* Network lines */}
        <path d="M80 32 L120 32 M80 62 L120 62 M80 92 L120 92" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="120" cy="32" r="3" fill="#94a3b8" />
        <circle cx="120" cy="62" r="3" fill="#94a3b8" />
        <circle cx="120" cy="92" r="3" fill="#94a3b8" />
        {/* Alert pulse */}
        <circle cx="160" cy="30" r="10" fill="#ef4444" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.6;0.2;0.6"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="160" cy="30" r="3" fill="#ef4444" />
      </svg>
    </div>
  );
};