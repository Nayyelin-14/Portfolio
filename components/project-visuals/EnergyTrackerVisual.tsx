"use client";

import { useTheme } from "@/components/ThemeProvider";

interface EnergyTrackerVisualProps {
  className?: string;
}

const KPIS = [
  { value: "42.8", unit: "kWh", label: "consumed · 7d", tone: "emerald" },
  { value: "3", unit: "", label: "devices online", tone: "blue" },
  { value: "4.2", unit: "kW", label: "threshold", tone: "amber" },
];

const BARS = [26, 34, 30, 42, 38, 52, 46, 40, 58, 74, 66, 80, 62, 54];

export const EnergyTrackerVisual = ({
  className = "",
}: EnergyTrackerVisualProps) => {
  const { isDark } = useTheme();

  const panel = isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white";
  const shell = isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white";
  const muted = isDark ? "text-gray-400" : "text-gray-500";

  const tone = {
    emerald: isDark ? "text-emerald-400" : "text-emerald-600",
    blue: isDark ? "text-blue-400" : "text-blue-600",
    amber: isDark ? "text-amber-400" : "text-amber-600",
  };

  return (
    <div className={`flex h-full w-full items-center ${className}`}>
      <div
        className={`flex h-full w-full flex-col overflow-hidden rounded-xl border ${shell}`}
      >
        {/* Window bar */}
        <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${panel}`}>
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="h-2 w-2 rounded-full bg-yellow-500" />
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className={`ml-2 truncate text-[10px] ${muted}`}>
            energy-tracker · overview
          </span>
          <span
            className={`ml-auto flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
              isDark
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            LIVE
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-2 p-3">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {KPIS.map((kpi) => (
              <div key={kpi.label} className={`rounded-lg border p-2 ${panel}`}>
                <p
                  className={`font-mono text-[13px] font-semibold leading-none tabular-nums ${
                    tone[kpi.tone as keyof typeof tone]
                  }`}
                >
                  {kpi.value}
                  {kpi.unit && (
                    <span className="ml-0.5 text-[8px] font-medium">{kpi.unit}</span>
                  )}
                </p>
                <p className={`mt-1 truncate text-[8px] ${muted}`}>{kpi.label}</p>
              </div>
            ))}
          </div>

          {/* Usage chart with threshold */}
          <div
            className={`relative flex h-[68px] items-end gap-[3px] rounded-lg border px-3 pb-2 pt-3 ${panel}`}
          >
            <div className="absolute inset-x-3 top-1/2 border-t border-dashed border-rose-400/70" />
            <span
              className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded px-1 text-[7px] font-medium ${
                isDark ? "bg-gray-800 text-rose-400" : "bg-white text-rose-500"
              }`}
            >
              limit
            </span>
            {BARS.map((h, i) => (
              <span
                key={i}
                style={{
                  height: `${h}%`,
                  animation: `fade-in-up 0.4s ease-out ${i * 40}ms both`,
                }}
                className={`flex-1 rounded-sm ${
                  h > 50
                    ? isDark
                      ? "bg-rose-400/80"
                      : "bg-rose-400/70"
                    : isDark
                      ? "bg-emerald-500/70"
                      : "bg-emerald-500/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between border-t px-3 py-2 ${panel}`}
        >
          <span
            className={`flex items-center gap-1 rounded px-1.5 py-0.5 text-[8px] font-medium ${
              isDark ? "bg-rose-500/15 text-rose-400" : "bg-rose-100 text-rose-600"
            }`}
          >
            ▲ breach · email sent
          </span>
          <span
            className={`flex items-center gap-1 rounded px-1.5 py-0.5 text-[8px] font-medium ${
              isDark ? "bg-blue-500/15 text-blue-400" : "bg-blue-100 text-blue-600"
            }`}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
            AI tips · SSE
          </span>
        </div>
      </div>
    </div>
  );
};
