import React, { useEffect, useState, useRef } from 'react';
import { Activity, Heart, ShieldCheck, Volume2, VolumeX, Radio } from 'lucide-react';

export const EKGMonitor: React.FC = () => {
  const [bpm, setBpm] = useState(72);
  const [spo2, setSpo2] = useState(99);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Play a medical heart beep using Web Audio API
  const playBeep = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Realistic clinical telemetry beep frequency (A5 / 880 Hz with rich tone)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);

      // Volume envelope: quick attack, fast natural decay
      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (err) {
      console.warn('Audio playback not permitted or supported:', err);
    }
  };

  // Toggle sound with user interaction
  const toggleSound = () => {
    if (!soundEnabled) {
      // First user gesture triggers audio context
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      playBeep(); // Immediate confirmation beep
      setSoundEnabled(true);
    } else {
      setSoundEnabled(false);
    }
  };

  // Recurring rhythm loop when sound is enabled
  useEffect(() => {
    if (soundEnabled) {
      const beatIntervalMs = (60 / bpm) * 1000;
      intervalRef.current = window.setInterval(() => {
        playBeep();
      }, beatIntervalMs);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [soundEnabled, bpm]);

  // Subtle natural vital fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm(Math.floor(70 + Math.random() * 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-[#0A122A]/90 border border-[#38A4F6]/30 p-4 shadow-[0_0_25px_rgba(56,164,246,0.12)] backdrop-blur-xl relative overflow-hidden">
      {/* Scanline glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38A4F6]/5 to-transparent pointer-events-none animate-pulse"></div>

      {/* Header telemetry with Sound Toggle Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 -ml-4.5"></span>
          <span className="font-mono text-[#7CC4FA] uppercase tracking-wider font-semibold text-[11px]">
            Clinical Telemetry • Student Station
          </span>
        </div>

        {/* Interactive Sound Trigger Button */}
        <button
          onClick={toggleSound}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono transition-all duration-300 ${
            soundEnabled
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-[0_0_12px_rgba(52,211,153,0.3)] animate-pulse'
              : 'bg-[#0E86D4]/20 text-[#BAE0FD] border border-[#38A4F6]/40 hover:bg-[#0E86D4]/40'
          }`}
          title={soundEnabled ? 'Mute Heartbeat Sound' : 'Enable LIVE OPD Heartbeat Audio'}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>LIVE OPD SYNC • SOUND ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              <span>LIVE OPD SYNC • ENABLE SOUND</span>
            </>
          )}
        </button>
      </div>

      {/* EKG Oscilloscope Waveform */}
      <div className="relative h-14 w-full bg-[#050B1A] rounded-lg border border-[#38A4F6]/20 flex items-center overflow-hidden px-2 mb-3">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(#38A4F6 1px, transparent 1px), linear-gradient(90deg, #38A4F6 1px, transparent 1px)`,
            backgroundSize: '12px 12px',
          }}
        />

        {/* Animated ECG SVG path */}
        <svg className="w-full h-10 stroke-[#38A4F6] fill-none stroke-2" preserveAspectRatio="none" viewBox="0 0 400 60">
          <path
            d="M 0 30 L 60 30 L 70 20 L 80 45 L 90 5 L 100 55 L 110 30 L 170 30 L 180 30 L 190 20 L 200 45 L 210 5 L 220 55 L 230 30 L 290 30 L 300 20 L 310 45 L 320 5 L 330 55 L 340 30 L 400 30"
            strokeDasharray="400"
            strokeDashoffset="0"
            className="animate-[dash_2.5s_linear_infinite]"
          />
        </svg>

        {/* Sound Status Indicator in bottom corner */}
        {soundEnabled && (
          <div className="absolute bottom-1 right-2 flex items-center space-x-1 text-[9px] font-mono text-emerald-400">
            <Radio className="w-2.5 h-2.5 animate-pulse" />
            <span>880Hz PULSE ACTIVE</span>
          </div>
        )}
      </div>

      {/* Real-time vitals row */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2 rounded-lg bg-[#080E21] border border-white/5">
          <div className="flex items-center justify-center space-x-1 text-rose-400 mb-0.5">
            <Heart className={`w-3 h-3 ${soundEnabled ? 'animate-ping' : 'animate-pulse'}`} />
            <span className="text-[10px] font-mono uppercase text-slate-400">PULSE</span>
          </div>
          <span className="font-mono font-bold text-sm text-white">{bpm} <span className="text-[9px] text-slate-400">BPM</span></span>
        </div>

        <div className="p-2 rounded-lg bg-[#080E21] border border-white/5">
          <div className="flex items-center justify-center space-x-1 text-sky-400 mb-0.5">
            <Activity className="w-3 h-3" />
            <span className="text-[10px] font-mono uppercase text-slate-400">SpO2</span>
          </div>
          <span className="font-mono font-bold text-sm text-white">{spo2}%</span>
        </div>

        <div className="p-2 rounded-lg bg-[#080E21] border border-white/5">
          <div className="flex items-center justify-center space-x-1 text-emerald-400 mb-0.5">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[10px] font-mono uppercase text-slate-400">HOURS</span>
          </div>
          <span className="font-mono font-bold text-sm text-white">350+</span>
        </div>
      </div>
    </div>
  );
};
