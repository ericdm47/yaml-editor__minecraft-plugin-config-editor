import React from "react";
import { Settings, RefreshCw, Cpu } from "lucide-react";

export default function PipeAnimation() {
  return (
    <div className="relative w-full h-44 bg-[#1b1511] border-2 border-[#523d2b] rounded-lg overflow-hidden flex items-end justify-center p-3 select-none">
      {/* Background Metallic Plate Detail */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c28a3d_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Steam Smoke particles floating up */}
      <div className="absolute left-[38%] bottom-28 w-2 h-2 bg-neutral-300 opacity-60 rounded-full blur-[2px] animate-bounce [animation-delay:0.2s]" />
      <div className="absolute left-[40%] bottom-32 w-3 h-3 bg-neutral-300 opacity-40 rounded-full blur-[3px] animate-ping [animation-delay:0.8s] [animation-duration:2.5s]" />
      <div className="absolute left-[41%] bottom-24 w-1.5 h-1.5 bg-neutral-400 opacity-50 rounded-full blur-[1px] animate-bounce [animation-delay:1.1s]" />

      {/* Retro Copper Pipes Layout with SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 176" fill="none">
        {/* Main large copper tube */}
        <path
          d="M 25,176 L 25,110 Q 25,90 45,90 L 100,90 Q 120,90 120,70 L 120,40"
          stroke="#9c5d2d"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M 25,176 L 25,110 Q 25,90 45,90 L 100,90 Q 120,90 120,70 L 120,40"
          stroke="#c28a3d"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="4,8"
          className="opacity-60"
        />

        {/* Support pipe branching off to the right */}
        <path
          d="M 120,80 L 170,80 Q 185,80 185,100 L 185,176"
          stroke="#7d5a36"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 120,80 L 170,80 Q 185,80 185,100 L 185,176"
          stroke="#b57e3e"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Golden connectors */}
        <rect x="18" y="105" width="14" height="6" fill="#c28a3d" rx="1" />
        <rect x="113" y="65" width="14" height="6" fill="#c28a3d" rx="1" />
        <rect x="140" y="76" width="6" height="8" fill="#c28a3d" rx="1" />
      </svg>

      {/* Interactive spinning brass gears */}
      <div className="absolute left-4 bottom-6 z-10">
        <Settings className="w-14 h-14 text-[#c28a3d] animate-spin-slow" />
      </div>

      <div className="absolute left-14 bottom-14 z-10">
        <Settings className="w-8 h-8 text-[#9c5d2d] animate-spin-rev-slow" />
      </div>

      <div className="absolute right-6 bottom-4 z-10 flex flex-col items-center">
        {/* Flashing Pressure Gauge */}
        <div className="w-8 h-8 rounded-full border-2 border-[#c28a3d] bg-[#3a2f26] flex items-center justify-center relative shadow-inner">
          <div className="w-1 h-3 bg-red-500 origin-bottom transform rotate-45 animate-pulse" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-400 border border-orange-200 animate-ping" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 border border-orange-200" />
        </div>
        <span className="text-[10px] font-mono text-[#b89f75] mt-1 tracking-wider uppercase">PSI OK</span>
      </div>

      {/* Piston valve pump mechanism */}
      <div className="absolute left-28 bottom-4 z-10 flex flex-col items-center animate-piston">
        <div className="w-5 h-2 bg-[#c28a3d] rounded-t" />
        <div className="w-2 h-10 bg-neutral-400" />
        <div className="w-6 h-6 rounded-full bg-[#18130f] border-2 border-[#9c5d2d] flex items-center justify-center">
          <Cpu className="w-3.5 h-3.5 text-[#ffb347]" />
        </div>
      </div>

      {/* Little steampunk gauge label overlay */}
      <div className="absolute right-2 top-2 bg-[#18130f] px-1.5 py-0.5 rounded border border-[#523d2b]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-mono text-[#f0dfb4] tracking-tight">ENG REV.2</span>
        </div>
      </div>
    </div>
  );
}
