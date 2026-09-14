"use client";

import { useTheme } from "@/components/ThemeProvider";

interface FastVisualProps {
  className?: string;
}

export const FastVisual = ({ className = "" }: FastVisualProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`relative aspect-[3/2] ${className}`}>
      <svg
        viewBox="0 0 160 100"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M24 40 H38 V64 H62"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="3 3"
          className={isDark ? "text-gray-600" : "text-gray-300"}
        />
        <path
          d="M98 64 H132 V40 H136"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="3 3"
          className={isDark ? "text-gray-600" : "text-gray-300"}
        />
        <path
          d="M62 52 Q80 36 98 52"
          stroke="#3b82f6"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="80" cy="44" r="2.4" fill="#3b82f6">
          <animate
            attributeName="cx"
            values="62;98;98;62"
            dur="3.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="52;52;52;52"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="absolute left-0 top-0 flex items-center gap-1.5 rounded-lg bg-blue-500 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-lg">
        DEL <span className="text-blue-200">→</span> BOM
      </div>

      <div className="absolute right-0 top-0 rounded-lg bg-green-500 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-lg">
        ₹4,500
      </div>

      <div
        className={`absolute bottom-0 left-0 rounded-lg border px-2.5 py-1.5 text-[10px] font-semibold shadow ${
          isDark
            ? "border-blue-800 bg-blue-900/60 text-blue-300"
            : "border-blue-200 bg-blue-50 text-blue-600"
        }`}
      >
        12A
      </div>

      <div
        className={`absolute bottom-0 right-0 rounded-md border px-2 py-1 font-mono text-[9px] shadow ${
          isDark
            ? "border-gray-700 bg-gray-800 text-gray-300"
            : "border-gray-200 bg-white text-gray-600"
        }`}
      >
        outbox
      </div>

      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full px-1.5 py-0.5 text-[7px] font-medium ${
          isDark ? "bg-blue-500/15 text-blue-400" : "bg-blue-100 text-blue-600"
        }`}
      >
        FastAPI
      </div>
    </div>
  );
};