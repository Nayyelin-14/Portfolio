"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface StatCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatCounter = ({ value, label, delay = 0 }: StatCounterProps) => {
  const { isDark } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[1]);
    const suffix = value.replace(numericMatch[1], "");
    const duration = 1100;
    const startTime = performance.now() + delay;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayValue(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-3xl sm:text-4xl font-bold ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {displayValue}
      </div>
      <div
        className={`mt-1 text-sm ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {label}
      </div>
    </div>
  );
};
