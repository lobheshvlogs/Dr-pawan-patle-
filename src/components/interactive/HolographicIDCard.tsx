import React, { useState } from 'react';
import { ShieldCheck, Stethoscope, QrCode, Sparkles, Building } from 'lucide-react';
import { portfolioProfile } from '../../data/portfolioData';

export const HolographicIDCard: React.FC = () => {
  const [glare, setGlare] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setGlare({ x: 50, y: 50, active: false });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm rounded-3xl p-6 bg-gradient-to-br from-[#0E1B3E] via-[#0A132C] to-[#060B18] border border-[#38A4F6]/40 shadow-[0_0_40px_rgba(56,164,246,0.18)] backdrop-blur-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_0_50px_rgba(56,164,246,0.3)] overflow-hidden group cursor-pointer"
    >
      {/* Dynamic Holographic Specular Glare */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
        style={{
          background: glare.active
            ? `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(124, 196, 250, 0.28) 0%, transparent 60%)`
            : 'transparent',
          opacity: glare.active ? 1 : 0,
        }}
      />

      {/* Holographic iridescent rainbow sweep */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-cyan-400/10 via-indigo-400/10 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

      {/* Top Bar with Microchip & Hospital Crest */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 relative z-10">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0E86D4]/20 border border-[#38A4F6]/40 flex items-center justify-center text-[#7CC4FA]">
            <Stethoscope className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7CC4FA] block font-semibold leading-tight">
              State Medical University
            </span>
            <span className="text-[9px] text-slate-400 font-mono">
              Academic Identification Credential
            </span>
          </div>
        </div>

        <div className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono text-emerald-300 flex items-center space-x-1">
          <ShieldCheck className="w-3 h-3" />
          <span>ACTIVE</span>
        </div>
      </div>

      {/* Photo & Core Information */}
      <div className="flex items-center space-x-4 mb-4 relative z-10">
        <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-[#38A4F6]/40 bg-[#060B18] shrink-0 shadow-md">
          <img
            src={portfolioProfile.portraitImage}
            alt="Dr. Pawan Patle — 2nd Year BAMS Student"
            className="w-full h-full object-cover object-top contrast-105 brightness-105 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent"></div>
        </div>

        <div className="space-y-1">
          <span className="px-2 py-0.5 rounded bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[9px] font-mono text-[#7CC4FA] uppercase font-bold tracking-wider inline-block">
            2nd Year BAMS Candidate
          </span>
          <h4 className="font-editorial text-xl font-bold text-white leading-tight">
            {portfolioProfile.name}
          </h4>
          <p className="text-[11px] text-slate-300 leading-tight">
            Ayurvedic Medical Student & Researcher
          </p>
          <p className="text-[10px] font-mono text-slate-400">
            Reg: <span className="text-white">BAMS-2023-7841</span>
          </p>
        </div>
      </div>

      {/* Institution Details */}
      <div className="p-3 rounded-xl bg-[#080E21]/80 border border-white/5 space-y-1 mb-4 relative z-10 text-xs">
        <div className="flex items-center space-x-1.5 text-[#7CC4FA] text-[10px] font-semibold">
          <Building className="w-3.5 h-3.5" />
          <span>College Affiliation</span>
        </div>
        <p className="text-[11px] font-medium text-white line-clamp-1">
          {portfolioProfile.institution}
        </p>
        <p className="text-[10px] text-slate-400">
          Expected Graduation: <span className="text-white">2028 (5.5 Yrs)</span>
        </p>
      </div>

      {/* Bottom Bar with Barcode & Verification Stamp */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 relative z-10 text-[10px] font-mono text-slate-400">
        <div className="flex items-center space-x-1 text-slate-300">
          <QrCode className="w-4 h-4 text-[#38A4F6]" />
          <span>SCAN TO VERIFY</span>
        </div>
        <div className="flex items-center space-x-1 text-[#7CC4FA]">
          <Sparkles className="w-3 h-3 text-[#38A4F6]" />
          <span>VERIFIED ENROLLMENT</span>
        </div>
      </div>
    </div>
  );
};
