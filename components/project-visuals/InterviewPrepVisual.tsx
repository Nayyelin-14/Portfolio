"use client";

import { useTheme } from "@/components/ThemeProvider";

interface InterviewPrepVisualProps {
  className?: string;
}

interface QA {
  q: string;
  a: string;
  pin: boolean;
}

export const InterviewPrepVisual = ({ className = "" }: InterviewPrepVisualProps) => {
  const { isDark } = useTheme();

  const cards: QA[] = [
    {
      q: "Explain the event loop in JavaScript.",
      a: "JS runs single-threaded; the event loop coordinates the call stack, web APIs, and task queue to handle async without blocking.",
      pin: false,
    },
    {
      q: "What is a closure?",
      a: "A function bundled with its lexical scope, enabling private state and data encapsulation.",
      pin: true,
    },
    {
      q: "Explain debouncing vs throttling.",
      a: "Debounce delays until a quiet period; throttle enforces a fixed execution rate.",
      pin: false,
    },
  ];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[10px] font-semibold">
          Interview Q&A
        </p>
        <div
          className={`flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-medium ${
            isDark
              ? "bg-purple-500/15 text-purple-400"
              : "bg-purple-100 text-purple-600"
          }`}
        >
          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M8 2v1M8 13v1M2 8h1M13 8h1M4.2 4.2l.7.7M11.1 11.1l.7.7M4.2 11.8l.7-.7M11.1 4.9l.7-.7" />
            <circle cx="8" cy="8" r="3" />
          </svg>
          AI
        </div>
      </div>
      {cards.map((card, i) => (
        <div
          key={card.q}
          className={`animate-[fadeIn_0.6s_ease_both] rounded-lg border p-2.5 ${
            isDark
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-semibold leading-tight">
              Q. {card.q}
            </span>
            {card.pin && (
              <svg
                viewBox="0 0 20 20"
                className="h-3 w-3 shrink-0 rotate-45 text-rose-500"
                fill="currentColor"
              >
                <path d="M8 1l7 7-1.5 1.5L10 6v9L8.5 16l-1.5-1.5V6L2.5 9.5 1 8l7-7z" />
              </svg>
            )}
          </div>
          <div className="mt-2 flex items-start gap-1.5">
            <svg
              viewBox="0 0 20 20"
              className="h-3 w-3 shrink-0 text-purple-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M10 2v1.5M10 16v1.5M2 10h1.5M16 10h1.5M4.9 4.9l1 1M14.1 14.1l1 1M5 10a5 5 0 0 1 10 0" />
            </svg>
            <p
              className={`text-[9px] leading-snug ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {card.a}
            </p>
          </div>
        </div>
      ))}
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
};
