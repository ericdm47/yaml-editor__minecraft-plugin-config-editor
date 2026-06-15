import React, { useEffect, useRef } from "react";

interface KakaoAdProps {
  unitId: string;
  width: string;
  height: string;
}

export default function KakaoAd({ unitId, width, height }: KakaoAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. 카카오 애드핏 연동용 스크립트 동적 주입
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//t1.kakaocdn.net/kas/static/ba.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 추가한 스크립트 클린업
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Safe check
      }
    };
  }, [unitId]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center p-3.5 bg-[#1a1410] border-3 border-[#8d6033] rounded-none relative"
    >
      {/* Steampunk Visual Frame Detail - Square indicator tags to prevent any rounding flags */}
      <div className="absolute top-1 left-2 flex gap-1 h-1.5">
        <span className="w-1.5 h-1.5 bg-orange-500/60" />
        <span className="w-1.5 h-1.5 bg-orange-400/40" />
      </div>
      <div className="text-[10px] font-mono text-[#b89f75] uppercase tracking-wider mb-2 select-none border-b border-[#523d2b] pb-1 w-full text-center">
        ⚡ SPONSOR LINK
      </div>

      <div className="relative bg-black/40 min-h-[600px] flex items-center justify-center rounded-none">
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit={unitId}
          data-ad-width={width}
          data-ad-height={height}
        />
      </div>

      <div className="text-[9px] font-mono text-[#ffd38d]/40 mt-1.5 uppercase select-none">
        Adfit 160x600 Gauge
      </div>
    </div>
  );
}
