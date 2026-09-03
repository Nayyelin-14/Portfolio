"use client";

import { useTheme } from "@/components/ThemeProvider";

interface Product {
  fill: string;
}

interface NextFurnitureVisualProps {
  className?: string;
}

const products: Product[] = [
  { fill: "bg-gradient-to-br from-amber-400 to-orange-600" },
  { fill: "bg-gradient-to-br from-stone-400 to-stone-700" },
  { fill: "bg-gradient-to-br from-teal-400 to-emerald-600" },
  { fill: "bg-gradient-to-br from-indigo-400 to-violet-600" },
];

export const NextFurnitureVisual = ({
  className = "",
}: NextFurnitureVisualProps) => {
  const { isDark } = useTheme();

  const badge = isDark ? "text-white" : "text-gray-900";

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-2 gap-1.5">
        {products.map((p, i) => (
          <div
            key={i}
            className={`flex aspect-square flex-col justify-end gap-1 rounded-md p-1.5 transition-transform duration-200 hover:-translate-y-1 ${
              i === 0 ? "hover:-translate-y-1" : ""
            }`}
          >
            <div
              className={`h-10 w-full rounded ${p.fill} ${
                i === 1
                  ? isDark
                    ? "opacity-90"
                    : "opacity-100"
                  : ""
              }`}
            />
            <div
              className={`h-1.5 w-3/4 rounded ${
                isDark ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
            <div
              className={`h-1 w-1/2 rounded ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute right-1 top-1 rounded-full px-1.5 py-1 shadow-lg"
        style={{ backgroundColor: isDark ? "#334155" : "#fff" }}
      >
        <span
          className="relative flex"
          style={{ color: isDark ? "#93c5fd" : "#3b82f6" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1.4" />
            <circle cx="18" cy="21" r="1.4" />
            <path d="M2 3h3l2.5 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L21.5 7H6" />
          </svg>
          <span
            className="absolute -right-2 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white"
          >
            3
          </span>
        </span>
      </div>

      <div
        className={`absolute left-1 top-1 rounded-md px-1.5 py-1 shadow-sm ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      </div>

      <span
        className={`absolute -right-1 -bottom-1 rounded px-1 text-[8px] font-semibold ${badge}`}
      >
        i18n
      </span>
    </div>
  );
};