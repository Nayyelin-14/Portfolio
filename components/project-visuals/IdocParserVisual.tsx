"use client";

import { useTheme } from "@/components/ThemeProvider";

interface IdocParserVisualProps {
  className?: string;
}

export const IdocParserVisual = ({ className = "" }: IdocParserVisualProps) => {
  const { isDark } = useTheme();

  const idocLines = [
    { text: "BEGIN_IDOC", indent: 0, kw: true },
    { text: "BEGIN_SEGMENT E1EDK01", indent: 1, kw: true },
    { text: "BELNR: 4500001234", indent: 2, kw: false },
    { text: "BUDAT: 20240815", indent: 2, kw: false },
    { text: "END_SEGMENT", indent: 1, kw: true },
    { text: "BEGIN_SEGMENT E1EDP01", indent: 1, kw: true },
    { text: "MATNR: 12345-67", indent: 2, kw: false },
    { text: "END_SEGMENT", indent: 1, kw: true },
    { text: "END_IDOC", indent: 0, kw: true },
  ];

  const jsonLines = [
    { text: "{", indent: 0 },
    { text: '"idoc": {', indent: 1 },
    { text: '"type": "ORDRSP",', indent: 2 },
    { text: '"segments": [', indent: 2 },
    { text: '{ "name": "E1EDK01",', indent: 3 },
    { text: '"fields": {', indent: 3 },
    { text: '"BELNR": "4500001234",', indent: 4 },
    { text: '"BUDAT": "20240815"', indent: 4 },
    { text: "}", indent: 3 },
    { text: "}", indent: 2 },
    { text: "]", indent: 2 },
    { text: "}", indent: 1 },
    { text: "}", indent: 0 },
  ];

  const PanelLabel = ({ children }: { children: React.ReactNode }) => (
    <div
      className={`mb-1.5 flex items-center gap-1 border-b px-1 pb-1 text-[8px] font-semibold uppercase tracking-wider ${
        isDark ? "border-gray-700 text-gray-500" : "border-gray-200 text-gray-400"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </div>
  );

  return (
    <div className={`flex items-stretch gap-2 ${className}`}>
      <div
        className={`flex-1 overflow-hidden rounded-lg border p-2 ${
          isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"
        }`}
      >
        <PanelLabel>Input · EDI</PanelLabel>
        <div className="font-mono text-[9px] leading-relaxed">
          {idocLines.map((line, i) => (
            <p
              key={i}
              className={`whitespace-pre ${
                line.kw
                  ? "text-emerald-500/90 font-semibold"
                  : "text-emerald-400/70"
              }`}
              style={{ paddingLeft: `${line.indent * 8}px` }}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <span
          className={`text-[8px] font-medium ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          parse
        </span>
      </div>

      <div
        className={`flex-1 overflow-hidden rounded-lg border p-2 ${
          isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"
        }`}
      >
        <PanelLabel>Output · JSON</PanelLabel>
        <div className="font-mono text-[9px] leading-relaxed">
          {jsonLines.map((line, i) => (
            <p
              key={i}
              className="whitespace-pre text-sky-500/90 animate-[typing_3s_steps(13)_forwards]"
              style={{ paddingLeft: `${line.indent * 8}px`, animationDelay: `${i * 0.15}s` }}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
      <style>{`@keyframes typing{from{opacity:0.3}to{opacity:1}}`}</style>
    </div>
  );
};
