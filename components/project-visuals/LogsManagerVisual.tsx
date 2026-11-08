"use client";

import React from "react";

export const LogsManagerVisual: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      <div
        className="relative w-full h-[160px] max-w-[240px] bg-black/50 rounded-xl border border-gray-700 overflow-hidden"
      >
        {/* Dark panel background */}
        <div className="absolute inset-0 w-full h-full bg-[#0f172a] rounded-xl border border-gray-700" />

        {/* Terminal window bar */}
        <div className="absolute top-0 left-0 w-full h-6 bg-[#0f172a] border-b border-gray-700" />
        <div className="absolute top-1 left-2 w-3 h-3 rounded-full bg-red-500" />
        <div className="absolute top-1 left-6 w-3 h-3 rounded-full bg-yellow-500" />
        <div className="absolute top-1 left-10 w-3 h-3 rounded-full bg-green-500" />

        {/* Terminal header text */}
        <div className="absolute top-1 left-14 w-full h-6 flex items-center px-2">
          <span className="text-[10px] text-gray-400 font-mono">
            Logs Manager &nbsp;|&nbsp; SIEM Appliance
          </span>
        </div>

        {/* Terminal blocks (three horizontal bars) */}
        <div className="absolute top-[45px] left-8 w-32 h-3 bg-slate-700 rounded-sm" />
        <div className="absolute top-[60px] left-8 w-40 h-3 bg-slate-700 rounded-sm" />
        <div className="absolute top-[79px] left-8 w-32 h-3 bg-slate-700 rounded-sm" />

        {/* Connection lines from blocks to right side */}
        <div className="absolute top-[46px] left-36 w-24 h-px bg-slate-600" />
        <div className="absolute top-[63px] left-48 w-24 h-px bg-slate-600" />
        <div className="absolute top-[82px] left-36 w-24 h-px bg-slate-600" />

        {/* Dots at line ends */}
        <div className="absolute top-[46px] left-60 w-1 h-1 bg-slate-400 rounded-full" />
        <div className="absolute top-[63px] left-72 w-1 h-1 bg-slate-400 rounded-full" />
        <div className="absolute top-[82px] left-60 w-1 h-1 bg-slate-400 rounded-full" />

        {/* Alert indicator dot on right side */}
        <div className="absolute top-20 right-10 w-6 h-6 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]">
          <div className="absolute inset-1 w-4 h-4 bg-red-500 rounded-full opacity-50 animate-pulse" />
        </div>

        {/* Alert pulse dot */}
        <div className="absolute top-22 left-96 w-2 h-2 bg-red-400 rounded-full opacity-70 animate-pulse" />
      </div>
    </div>
  );
};