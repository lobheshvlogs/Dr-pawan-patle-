import React from 'react';
import { Stethoscope, Microscope } from 'lucide-react';

interface HeroFocusModeProps {
  mode: 'clinical' | 'research';
  onChange: (mode: 'clinical' | 'research') => void;
}

export const HeroFocusMode: React.FC<HeroFocusModeProps> = ({ mode, onChange }) => {
  return (
    <div className="inline-flex p-1.5 rounded-2xl bg-[#0B132B]/90 border border-[#38A4F6]/30 shadow-lg backdrop-blur-xl">
      <button
        onClick={() => onChange('clinical')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
          mode === 'clinical'
            ? 'bg-[#0E86D4] text-white shadow-[0_0_15px_rgba(14,134,212,0.4)]'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <Stethoscope className="w-3.5 h-3.5" />
        <span>Clinical Exposure View</span>
      </button>

      <button
        onClick={() => onChange('research')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
          mode === 'research'
            ? 'bg-[#0E86D4] text-white shadow-[0_0_15px_rgba(14,134,212,0.4)]'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <Microscope className="w-3.5 h-3.5" />
        <span>Research & Pathology View</span>
      </button>
    </div>
  );
};
