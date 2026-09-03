"use client";

import { useTheme } from "@/components/ThemeProvider";

interface JTrackVisualProps {
  className?: string;
}

export const JTrackVisual = ({ className = "" }: JTrackVisualProps) => {
  const { isDark } = useTheme();

  const jobs = [
    { title: "Sr. Frontend Engineer", company: "Acme Inc", salary: "$120k" },
    { title: "Backend Developer", company: "Globex", salary: "$95k" },
    { title: "DevOps Engineer", company: "Initech", salary: "$110k" },
  ];

  const flowNodes = [
    { label: "Webhook", color: "text-emerald-500" },
    { label: "API Gateway", color: "text-blue-500" },
    { label: "Service", color: "text-purple-500" },
    { label: "Kafka", color: "text-amber-500" },
    { label: "Consumer", color: "text-rose-500" },
  ];

  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      <div className="flex flex-col gap-1.5">
        {jobs.map((job) => (
          <div
            key={job.title}
            className={`rounded-lg border p-2 ${
              isDark
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-white"
            }`}
          >
            <p className="text-[11px] font-semibold leading-tight">
              {job.title}
            </p>
            <p className="text-[10px] text-gray-400">{job.company}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[10px] font-bold text-green-500">
                {job.salary}
              </span>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] ${
                  isDark
                    ? "bg-blue-500/15 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                Apply
              </span>
            </div>
          </div>
        ))}
        <div
          className={`rounded-full px-2 py-1 text-center text-[9px] font-medium ${
            isDark
              ? "bg-cyan-500/15 text-cyan-400"
              : "bg-cyan-100 text-cyan-600"
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
            SSE · live
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-2">
        <p
          className={`mb-1 text-[8px] font-semibold uppercase tracking-wider ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Pipeline
        </p>
        {flowNodes.map((node, i) => (
          <div key={node.label} className="flex flex-col items-center">
            <span
              className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${
                isDark
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {node.label}
            </span>
            {i < flowNodes.length - 1 && (
              <div className="relative my-0.5 h-6 w-0.5 overflow-hidden rounded bg-gray-600/40">
                <span
                  className={`absolute left-0 top-0 h-2 w-0.5 animate-pulse ${node.color}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
