import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Stethoscope,
  Menu,
  X,
  FileDown,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Award,
  Image,
  Compass,
  Target,
  Activity,
  FileText,
  BookOpen
} from 'lucide-react';
import { CVModal } from './CVModal';
import { useViewMode } from '../../context/ViewModeContext';

export const Navbar: React.FC = () => {
  const { viewMode, toggleViewMode } = useViewMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Specified Navigation Order:
  // Home, About, Education, Anatomy, Clinical Exposure, Skills, Certifications, Academic Work, Gallery, Contact
  const primaryLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Education', href: '/#education' },
    { name: 'Anatomy', href: '/#anatomy' },
    { name: 'Clinical Exposure', href: '/#clinical' },
  ];

  const secondaryLinks = [
    { name: 'Curriculum Vitae', href: '/cv', icon: FileText, desc: 'Full Academic CV & Qualifications' },
    { name: 'Skills', href: '/#skills', icon: Sparkles, desc: 'Diagnostics & Medical Competencies' },
    { name: 'Certifications', href: '/#certifications', icon: Award, desc: 'CME, Workshops & Distinctions' },
    { name: 'Academic Work', href: '/#academic-work', icon: BookOpen, desc: 'Case Studies & Student Papers' },
    { name: 'Gallery', href: '/#gallery', icon: Image, desc: 'Hospital Postings & Campus' },
    { name: 'Contact', href: '/#contact', icon: Compass, desc: 'Academic Correspondence' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060B18]/90 backdrop-blur-xl border-b border-[#38A4F6]/25 shadow-2xl py-3 text-white'
            : 'bg-[#060B18]/50 backdrop-blur-md border-b border-white/5 py-4 text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Student Title */}
            <a href="/#home" className="group flex items-center space-x-3 text-left shrink-0">
              <div className="w-9 h-9 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 flex items-center justify-center text-[#7CC4FA] group-hover:bg-[#0E86D4] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(56,164,246,0.25)]">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <span className="font-editorial text-lg font-medium tracking-tight text-white group-hover:text-[#7CC4FA] transition-colors block leading-tight">
                  Dr. Pawan Patle
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#7CC4FA]/90 block">
                  2nd Year BAMS
                </span>
              </div>
            </a>

            {/* Compact Desktop Navigation Bar */}
            <nav className="hidden md:flex items-center space-x-1 bg-[#080E21]/80 px-3 py-1.5 rounded-full border border-[#38A4F6]/20 shadow-inner">
              {primaryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1 text-xs font-medium tracking-wide transition-all duration-200 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}

              {/* "More" Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    moreDropdownOpen
                      ? 'bg-[#0E86D4] text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={moreDropdownOpen}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Popover */}
                {moreDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#0C1530] border border-[#38A4F6]/30 shadow-2xl p-2 z-50 backdrop-blur-2xl animate-fadeIn">
                    <div className="px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-widest text-[#7CC4FA] border-b border-white/10 mb-1">
                      Explore Sections
                    </div>
                    <div className="space-y-0.5">
                      {secondaryLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setMoreDropdownOpen(false)}
                            className="flex items-center space-x-2.5 p-2 rounded-xl text-left hover:bg-[#101B3A] transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#0E86D4]/15 border border-[#38A4F6]/25 flex items-center justify-center text-[#7CC4FA] group-hover:bg-[#0E86D4] group-hover:text-white transition-colors shrink-0">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-xs font-medium text-white block group-hover:text-[#7CC4FA] transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[10px] text-slate-400 block leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Action Buttons: Mode Switcher & Download CV */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <button
                onClick={toggleViewMode}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider rounded-full transition-all border ${
                  viewMode === 'fullbody'
                    ? 'bg-cyan-400 text-slate-950 border-white shadow-[0_0_20px_#22d3ee] font-bold'
                    : 'bg-[#0E86D4]/20 text-[#BAE0FD] border-[#38A4F6]/50 hover:bg-[#0E86D4] hover:text-white shadow-[0_0_15px_rgba(56,164,246,0.3)]'
                }`}
                title="Switch between Medical Student Portfolio and Full Body Anatomy Lab"
              >
                <Activity className="w-3.5 h-3.5 text-current animate-pulse" />
                <span>{viewMode === 'fullbody' ? 'Portfolio Mode' : 'Full Body Mode'}</span>
              </button>

              <button
                onClick={() => setCvModalOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full border border-[#38A4F6]/50 bg-[#0E86D4]/25 hover:bg-[#0E86D4] text-white transition-all shadow-[0_0_15px_rgba(56,164,246,0.3)] hover:shadow-[0_0_20px_rgba(56,164,246,0.6)]"
                title="View and download Academic CV"
              >
                <FileText className="w-3.5 h-3.5 text-[#7CC4FA]" />
                <span>View CV</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleViewMode}
                className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full border ${
                  viewMode === 'fullbody'
                    ? 'bg-cyan-400 text-slate-950 border-white'
                    : 'bg-[#0E86D4]/25 text-[#BAE0FD] border-[#38A4F6]'
                }`}
              >
                {viewMode === 'fullbody' ? 'Portfolio' : 'Body Mode'}
              </button>
              <button
                onClick={() => setCvModalOpen(true)}
                className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full border border-[#38A4F6] bg-[#0E86D4]/30 text-white font-medium"
              >
                CV
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full bg-[#060B18]/95 backdrop-blur-2xl border-b border-[#38A4F6]/25 shadow-2xl px-6 py-6 transition-all duration-300 animate-fadeIn text-white max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <div className="pb-2 mb-2 border-b border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7CC4FA]">
                  Primary Navigation
                </span>
              </div>
              {primaryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-sm font-medium text-white/80 hover:text-[#7CC4FA] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              ))}

              <div className="pt-2 pb-1 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  More Portfolios & Records
                </span>
              </div>
              {secondaryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-xs font-medium text-slate-300 hover:text-[#7CC4FA] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-slate-400">{link.desc}</span>
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCvModalOpen(true);
                  }}
                  className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border border-[#38A4F6]/40 bg-[#0E86D4]/20 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  <FileText className="w-4 h-4 text-[#7CC4FA]" />
                  <span>Preview CV</span>
                </button>
                <a
                  href="/cv"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-[#0E86D4] text-white text-xs font-semibold uppercase tracking-wider text-center"
                >
                  <span>Full CV Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
};
