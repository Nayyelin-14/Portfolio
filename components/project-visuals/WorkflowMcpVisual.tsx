"use client";

import { useTheme } from "@/components/ThemeProvider";

interface WorkflowMcpVisualProps {
  className?: string;
}

interface FlowNode {
  id: string;
  label: string;
  bg: string;
  text: string;
  icon: string;
}

export const WorkflowMcpVisual = ({ className = "" }: WorkflowMcpVisualProps) => {
  const { isDark } = useTheme();

  const nodes: FlowNode[] = [
    { id: "start", label: "Start", bg: "bg-green-500", text: "text-white", icon: "▶" },
    { id: "agent", label: "Agent", bg: "bg-blue-500", text: "text-white", icon: "⬡" },
    { id: "branch", label: "If / Else", bg: "bg-yellow-400", text: "text-yellow-950", icon: "◆" },
    { id: "end", label: "End", bg: "bg-rose-500", text: "text-white", icon: "■" },
  ];

  const positions = [
    { left: "0", top: "0" },
    { left: "auto", right: "0", top: "0" },
    { left: "auto", right: "0", bottom: "0" },
    { left: "0", bottom: "0" },
  ];

  const edge = (d: string) => (
    <path
      d={d}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={isDark ? "text-gray-600" : "text-gray-300"}
      fill="none"
    />
  );

  return (
    <div className={`relative aspect-[3/2] ${className}`}>
      <svg
        viewBox="0 0 160 100"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        {edge("M28 16 H68 V46 H92")}
        {edge("M104 46 H116 V70 H92")}
        {edge("M80 70 H68")}
        {edge("M28 84 H56 V54")}

        <circle cx="68" cy="46" r="2" fill="currentColor" className="text-blue-500" opacity="0.6">
          <animate attributeName="cx" values="68;92;92;92;68" dur="3s" repeatCount="indefinite" />
          <animate attributeName="cy" values="46;46;46;70;70" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {nodes.map((node, i) => (
        <div
          key={node.id}
          className={`absolute flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[10px] font-semibold shadow-lg ${node.bg} ${node.text} ${
            node.id === "agent" ? "animate-pulse" : ""
          }`}
          style={positions[i] as React.CSSProperties}
        >
          <span className="text-[8px]">{node.icon}</span>
          {node.label}
        </div>
      ))}

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`rounded-md border px-2 py-1 font-mono text-[9px] shadow ${
            isDark
              ? "border-purple-700 bg-purple-900/60 text-purple-300"
              : "border-purple-200 bg-purple-50 text-purple-600"
          }`}
        >
          {"{{variable}}"}
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] ${
          isDark ? "text-gray-500" : "text-gray-400"
        }`}
      >
        MCP · workflow graph
      </div>
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full px-1.5 py-0.5 text-[7px] font-medium ${
          isDark ? "bg-blue-500/15 text-blue-400" : "bg-blue-100 text-blue-600"
        }`}
      >
        4 nodes
      </div>
    </div>
  );
};
