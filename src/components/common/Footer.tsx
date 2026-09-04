import React from 'react';
import { Stethoscope, ArrowUpRight, Mail, ShieldCheck, Heart } from 'lucide-react';
import { portfolioProfile } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Identity & Academic Transparency */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-softBlue-500/10 border border-softBlue-400/30 flex items-center justify-center text-softBlue-300">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                {portfolioProfile.name}
              </span>
            </div>
            
            <p className="text-xs uppercase tracking-widest text-softBlue-300 font-semibold">
              BAMS • 2nd Year Medical Student
            </p>
            
            <p className="text-xs text-white/60 font-normal leading-relaxed pr-6">
              Official academic portfolio documenting second-year BAMS coursework, clinical exposure, Dravyaguna pharmacology, and patient interaction learning.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-white/50 leading-relaxed">
              <div className="flex items-center space-x-2 text-softBlue-300 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Academic & Ethical Transparency</span>
              </div>
              Dr. Pawan Patle is currently a student candidate enrolled in the Bachelor of Ayurvedic Medicine and Surgery (BAMS) program and is not a licensed doctor or practitioner. All information is for educational and academic portfolio purposes only.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-softBlue-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/cv" className="text-softBlue-300 hover:text-white font-semibold transition-colors flex items-center justify-between group">
                  <span className="flex items-center space-x-1.5">
                    <span>Curriculum Vitae (CV)</span>
                    <span className="text-[10px] uppercase bg-softBlue-500/20 text-softBlue-200 px-1.5 py-0.5 rounded border border-softBlue-400/30">PDF</span>
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
              <li>
                <a href="/#about" className="text-white/70 hover:text-white transition-colors flex items-center justify-between group">
                  <span>About Me</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
              <li>
                <a href="/#education" className="text-white/70 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Education (3D Timeline)</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
              <li>
                <a href="/#clinical" className="text-white/70 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Clinical Exposure</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
              <li>
                <a href="/#skills" className="text-white/70 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Skills & Development</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
              <li>
                <a href="/#certifications" className="text-white/70 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Certifications & Achievements</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-white/70 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Medical Gallery</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
              <li>
                <a href="/#career-vision" className="text-white/70 hover:text-white transition-colors flex items-center justify-between group">
                  <span>Career Vision</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-softBlue-400">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Channels & Connect */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-softBlue-300">
              Academic Inquiries & Social
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Open to collaborative medical student discussions, preclinical research inquiries, and student study circles.
            </p>
            
            <a
              href={`mailto:${portfolioProfile.email}`}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-softBlue-500/10 hover:bg-softBlue-500/20 text-softBlue-200 text-xs font-medium border border-softBlue-400/30 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-softBlue-300" />
              <span>{portfolioProfile.email}</span>
            </a>

            <div className="pt-1 flex flex-wrap gap-2">
              <a
                href={portfolioProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-xs text-white/80 hover:text-white transition-colors inline-flex items-center space-x-1 border border-white/10"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              {portfolioProfile.instagram && (
                <a
                  href={portfolioProfile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-xs text-white/80 hover:text-white transition-colors inline-flex items-center space-x-1 border border-white/10"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar matching user's exact specification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <div className="space-y-0.5 text-center sm:text-left">
            <p className="text-white font-medium">© 2026 {portfolioProfile.name}</p>
            <p className="text-[11px] text-softBlue-300">2nd Year BAMS Student</p>
          </div>
          <p className="text-white/40">
            Designed for an ambitious 2nd-year medical student
          </p>
        </div>
      </div>
    </footer>
  );
};
