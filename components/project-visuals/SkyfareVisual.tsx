"use client";

import { useTheme } from "@/components/ThemeProvider";

interface SkyfareVisualProps {
  className?: string;
}

export const SkyfareVisual = ({ className = "" }: SkyfareVisualProps) => {
  const { isDark } = useTheme();

  const chrome = isDark
    ? "bg-zinc-900 border-zinc-800"
    : "bg-white border-zinc-200";
  const subtext = isDark ? "text-zinc-500" : "text-zinc-400";
  const accentSubtext = isDark ? "text-zinc-300" : "text-zinc-600";
  const field = isDark
    ? "bg-zinc-800/60 border-zinc-700"
    : "bg-zinc-100 border-zinc-200";

  return (
    <div className={`relative flex flex-col gap-1.5 ${className}`}>
      {/* Browser chrome */}
      <div
        className={`flex items-center gap-1.5 rounded-t-md border px-2.5 py-1 ${chrome}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        <span
          className={`ml-2 truncate rounded px-1.5 py-0.5 font-mono text-[7px] ${
            isDark ? "bg-zinc-800 text-zinc-400" : "bg-zinc-100 text-zinc-500"
          }`}
        >
          skyfare.app/flights
        </span>
      </div>

      {/* Search bar */}
      <div className={`rounded-md border px-2.5 py-1.5 ${chrome}`}>
        <div className={`grid grid-cols-[1fr_auto_1fr] items-center gap-1.5`}>
          <span
            className={`rounded border px-1.5 py-0.5 text-[8px] font-medium ${field} ${accentSubtext}`}
          >
            DEL
          </span>
          <span className={`text-[8px] font-bold ${subtext}`}>→</span>
          <span
            className={`rounded border px-1.5 py-0.5 text-[8px] font-medium ${field} ${accentSubtext}`}
          >
            BOM
          </span>
        </div>
        <p className={`mt-1 text-[7px] ${subtext}`}>
          Fri 14 Sep · 1 passenger · Nonstop only
        </p>
      </div>

      {/* Flight rows */}
      <div className={`rounded-md border px-2.5 py-1.5 ${chrome}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[7px] font-bold text-white">
              ✈
            </span>
            <div>
              <p className={`text-[8px] font-semibold ${accentSubtext}`}>
                6E 204 · Skyline Air
              </p>
              <p className={`text-[7px] ${subtext}`}>2h 10m · nonstop</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-[8px] font-bold ${accentSubtext}`}>
              ₹4,500
            </p>
            <p className={`text-[7px] ${subtext}`}>09:40 → 11:50</p>
          </div>
        </div>
      </div>
      <div className={`rounded-md border px-2.5 py-1.5 ${chrome}`}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[7px] font-bold text-white">
              ✈
            </span>
            <div>
              <p className={`text-[8px] font-semibold ${accentSubtext}`}>
                UK 873 · Vistara
              </p>
              <p className={`text-[7px] ${subtext}`}>2h 25m · 1 stop</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-[8px] font-bold ${accentSubtext}`}>
              ₹3,900
            </p>
            <p className={`text-[7px] ${subtext}`}>14:20 → 16:45</p>
          </div>
        </div>
      </div>

      {/* Footer status strip */}
      <div
        className={`mt-auto flex items-center justify-between rounded-b-md border px-2.5 py-1.5 ${chrome}`}
      >
        <span
          className={`rounded-full px-1.5 py-0.5 text-[7px] font-semibold ${
            isDark
              ? "bg-yellow-500/15 text-yellow-400"
              : "bg-yellow-500/15 text-yellow-600"
          }`}
        >
          ● Ongoing
        </span>
        <span className={`font-mono text-[7px] ${subtext}`}>
          booking · seat 12A
        </span>
        <span
          className={`rounded bg-blue-600 px-2 py-0.5 text-[7px] font-semibold text-white animate-pulse`}
        >
          Book
        </span>
      </div>
    </div>
  );
};