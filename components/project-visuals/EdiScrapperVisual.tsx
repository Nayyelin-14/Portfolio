"use client";

import { useTheme } from "@/components/ThemeProvider";

interface EdiScrapperVisualProps {
  className?: string;
}

export const EdiScrapperVisual = ({ className = "" }: EdiScrapperVisualProps) => {
  const { isDark } = useTheme();

  const segments = [
    { name: "ISA", depth: 0, open: true },
    { name: "GS", depth: 0, open: true },
    { name: "ST", depth: 0, open: true },
    { name: "BEG", depth: 1 },
    { name: "REF", depth: 1 },
    { name: "IT1", depth: 0, open: true },
  ];

  return (
    <div className={`rounded-xl border p-3 ${className}`}>
      <div className="mb-2 flex items-center gap-2">
        <div
          className={`flex items-center gap-1 rounded-md border px-2 py-1 text-[10px] font-medium ${
            isDark
              ? "border-gray-600 bg-gray-800 text-gray-200"
              : "border-gray-300 bg-white text-gray-700"
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6l4-3 4 3M4 10l4 3 4-3" strokeLinecap="round" />
          </svg>
          <span>Format</span>
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            isDark
              ? "bg-green-500/15 text-green-400"
              : "bg-green-100 text-green-600"
          }`}
        >
          EDIFACT
        </span>
        <span className="text-[10px] text-gray-400">/ X12</span>
      </div>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between text-[9px] text-gray-400">
          <span>Parsing row 4,203 of 4,912</span>
          <span>100%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-gray-700/40">
          <div className="h-full w-full origin-left animate-[progress_2.5s_ease-in-out_forwards] rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
        </div>
        <style>{`@keyframes progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
      </div>

      <div className="flex flex-col gap-0.5">
        {segments.map((seg) => (
          <div
            key={seg.name}
            className={`flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[9px] ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
            style={{ paddingLeft: `${seg.depth * 10 + 6}px` }}
          >
            {seg.open && (
              <svg
                viewBox="0 0 16 16"
                className="h-2.5 w-2.5 shrink-0 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span className="font-semibold text-blue-500">{seg.name}</span>
            <span className="text-gray-400">· {seg.open ? "Segment" : "Element"}</span>
          </div>
        ))}
      </div>

      <div
        className={`mt-3 rounded px-2 py-1 text-center text-[9px] font-medium ${
          isDark
            ? "bg-cyan-500/10 text-cyan-400"
            : "bg-cyan-100 text-cyan-600"
        }`}
      >
        <span className="flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 [animation-delay:300ms]" />
          SSE stream · live
        </span>
      </div>
    </div>
  );
};
