import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Award,
  Building,
  Building2,
  Calendar,
  Camera,
  CheckCircle2,
  Compass,
  FileDown,
  FileSpreadsheet,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Activity,
  ClipboardList,
  Eye,
  MessageSquare,
  FileText,
  Printer,
  ExternalLink
} from 'lucide-react';

import {
  portfolioProfile,
  educationList,
  researchList,
  achievementsList,
  certificatesList,
  skillCategoriesList,
  galleryList,
  clinicalExposureCards,
  academicWorkCards,
  personalInterestsList
} from '../data/portfolioData';

import { InteractiveDNA3D } from '../components/3d/InteractiveDNA3D';
import { Card3D } from '../components/3d/Card3D';
import { EKGMonitor } from '../components/interactive/EKGMonitor';
import { HolographicIDCard } from '../components/interactive/HolographicIDCard';
import { HeroFocusMode } from '../components/interactive/HeroFocusMode';
import { CaseSimulatorWidget } from '../components/interactive/CaseSimulatorWidget';
import { DepartmentExplorer } from '../components/interactive/DepartmentExplorer';
import { InteractiveAnatomy } from '../components/interactive/InteractiveAnatomy';

import { CertificateModal } from '../components/common/CertificateModal';
import { CVModal } from '../components/common/CVModal';
import { GalleryModal } from '../components/common/GalleryModal';
import { BackToTop } from '../components/common/BackToTop';
import { SEO } from '../components/common/SEO';
import { Certificate, GalleryItem } from '../types';
import { useViewMode } from '../context/ViewModeContext';
import { FullBodyAnatomyView } from '../components/interactive/FullBodyAnatomyView';

export const Home: React.FC = () => {
  const { viewMode, setViewMode } = useViewMode();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<string>('All');
  const [heroMode, setHeroMode] = useState<'clinical' | 'research'>('clinical');

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const filteredGallery = galleryList.filter(
    (item) => galleryFilter === 'All' || item.category === galleryFilter
  );

  const galleryCategories = ['All', 'College Campus', 'Hospital Postings', 'Seminars & CME', 'Workshops', 'Medical Events'];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSubmitted(true);
    }, 800);
  };

  if (viewMode === 'fullbody') {
    return (
      <div className="bg-[#060B18] text-white min-h-screen">
        <SEO
          title="Full-Body Human Anatomy & Rachana Sharir Station — Dr. Pawan Patle"
          description="Interactive full-body biometric human anatomy model and clinical diagnostics command station for Dr. Pawan Patle, 2nd-year BAMS student."
        />
        <FullBodyAnatomyView />
      </div>
    );
  }

  return (
    <div className="bg-[#060B18] text-white min-h-screen selection:bg-[#38A4F6] selection:text-white relative overflow-x-hidden">
      <SEO
        title="Dr. Pawan Patle — 2nd Year BAMS Medical Student Portfolio"
        description="Official interactive 3D medical student portfolio of Dr. Pawan Patle — 2nd Year Bachelor of Ayurvedic Medicine and Surgery candidate."
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Ambient Futuristic Glow Orbs */}
      <div className="fixed top-12 -left-48 w-[550px] h-[550px] bg-[#0E86D4]/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 -right-48 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="fixed bottom-24 left-1/3 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (INTERACTIVE MEDICAL COMMAND STATION) */}
      {/* ========================================================================= */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Status Bar & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wider">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0D1B3E] border border-[#38A4F6]/40 text-[#7CC4FA] shadow-[0_0_20px_rgba(56,164,246,0.25)]">
                <span className="w-2 h-2 rounded-full bg-[#38A4F6] animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-[#38A4F6] -ml-4"></span>
                <span>BAMS • 2nd Year Medical Student</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0B132B] border border-white/10 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Currently studying • 2nd Year BAMS</span>
              </span>
            </div>

            {/* Interactive Mode Toggles */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setViewMode('fullbody')}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0E86D4] to-[#0A6EB0] hover:from-[#38A4F6] hover:to-[#0E86D4] text-white text-xs font-semibold tracking-wider shadow-[0_0_20px_rgba(56,164,246,0.35)] transition-all hover:scale-105"
                title="Switch to Interactive 3D Full-Body Anatomy Command Station"
              >
                <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-200" />
                <span>🫀 Launch Full Body Anatomy Mode</span>
              </button>

              <HeroFocusMode mode={heroMode} onChange={setHeroMode} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Subheading & Dynamic Focus Content */}
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#7CC4FA] font-mono font-semibold">
                  <span className="w-8 h-[1px] bg-[#38A4F6]"></span>
                  <span>Dr. Pawan Patle • Medical Student Portfolio</span>
                </div>
                <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05]">
                  Learning Medicine. <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7CC4FA] via-white to-[#BAE0FD]">
                    Building Knowledge.
                  </span> <br />
                  Shaping the Future.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Currently pursuing Bachelor of Ayurvedic Medicine and Surgery, with a growing interest in clinical learning, patient interaction, medical research, and continuous professional development.
              </p>

              {/* Dynamic Focus Spotlight Card */}
              {heroMode === 'clinical' ? (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0C1530] to-[#0A122A] border border-[#38A4F6]/40 shadow-xl max-w-xl space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#7CC4FA] font-semibold flex items-center space-x-1.5">
                      <Stethoscope className="w-4 h-4 text-[#38A4F6]" />
                      <span>Clinical Learning Focus</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      350+ Hours Logged
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Active observational rotations in Kayachikitsa (Internal Medicine), Panchakarma, and Roga Nidana OPDs with continuous case history taking, Prakriti assessment, and vital signs recording under faculty guidance.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0C1530] to-[#0A122A] border border-[#38A4F6]/40 shadow-xl max-w-xl space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#7CC4FA] font-semibold flex items-center space-x-1.5">
                      <Microscope className="w-4 h-4 text-[#38A4F6]" />
                      <span>Research & Laboratory Focus</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E86D4]/20 text-[#BAE0FD] border border-[#38A4F6]/30">
                      4 Preclinical Papers
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Investigating standardized phytochemical profiles of adaptogenic herbs (Dravyaguna), pharmaceutical formulation quality (Bhaishajya Kalpana), and evidence-informed reviews of classical Ayurvedic literature.
                  </p>
                </div>
              )}

              {/* Institutional Placeholders Box */}
              <div className="p-4 rounded-2xl bg-[#080E21] border border-white/10 shadow-lg max-w-xl text-xs space-y-1.5">
                <div className="flex items-center space-x-2 text-[#7CC4FA] font-semibold">
                  <Building className="w-4 h-4 text-[#38A4F6]" />
                  <span>Academic Affiliation:</span>
                </div>
                <p className="text-white font-medium text-sm">
                  {portfolioProfile.institution}
                </p>
                <p className="text-slate-400">
                  {portfolioProfile.university} • {portfolioProfile.location}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#case-simulator"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0E86D4] hover:bg-[#38A4F6] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 shadow-[0_0_25px_rgba(14,134,212,0.4)] hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Test Drive Case Simulator</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setCvModalOpen(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0B132B] hover:bg-[#141F48] text-white border border-[#38A4F6]/50 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 shadow-[0_0_20px_rgba(56,164,246,0.18)] hover:border-[#38A4F6]"
                  title="View and download complete Curriculum Vitae"
                >
                  <FileText className="w-4 h-4 text-[#7CC4FA]" />
                  <span>View / Download CV</span>
                </button>
              </div>

              {/* Quick Academic Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
                {portfolioProfile.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7CC4FA] block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Holographic ID Card + Interactive 3D DNA + EKG Telemetry */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Holographic ID Card */}
              <HolographicIDCard />

              {/* Card 2: Interactive 3D DNA Model Viewport */}
              <div className="rounded-3xl bg-[#0C1530] border border-[#38A4F6]/30 shadow-2xl p-4 relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10 text-xs">
                  <span className="font-mono text-[#7CC4FA] font-semibold text-[11px] flex items-center space-x-1.5">
                    <Microscope className="w-3.5 h-3.5 text-[#38A4F6]" />
                    <span>3D Molecular Model • Rotate to Explore</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Three.js WebGL</span>
                </div>
                <div className="h-60 w-full flex items-center justify-center">
                  <InteractiveDNA3D className="w-full h-full" />
                </div>
              </div>

              {/* Card 3: Live EKG Oscilloscope Telemetry Monitor */}
              <EKGMonitor />

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE CLINICAL CASE OBSERVATION SIMULATOR WIDGET */}
      {/* ========================================================================= */}
      <section id="case-simulator" className="py-20 border-b border-white/10 bg-[#080E21] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseSimulatorWidget />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT ME SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-24 border-b border-white/10 relative bg-[#060B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Perspective & Narrative</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              About Me
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Reflections from the second year of medical school.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Perspective Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              <p>
                As a second-year student currently pursuing the <strong className="text-white font-semibold">Bachelor of Ayurvedic Medicine and Surgery (BAMS)</strong>, my academic life is centered on discovering the intricate workings of the human body and learning how disease presents across different constitutional types (Prakriti).
              </p>
              <p>
                Ayurvedic education is more than memorizing ancient verses; it is about building deep diagnostic curiosity. In our laboratory sessions, studying Dravyaguna medicinal plant morphology and Roga Nidana pathological markers teaches me the cellular and systemic foundations of health. In hospital Kayachikitsa outpatient postings, observing senior Vaidyas perform detailed Nadi and Ashta-vidha Pariksha reinforces the human side of medicine: the vital importance of empathetic listening, lifestyle guidance, and personalized care.
              </p>
              <p>
                I am actively developing my knowledge in Ayurvedic pharmacology, Dravyaguna taxonomy, Rasa Shastra formulations, and integrative medical research. While still early in my clinical journey, I approach each lecture, lab session, and community camp with humility and a continuous desire to learn.
              </p>

              {/* 3 Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#0C1530] border border-[#38A4F6]/25">
                  <span className="font-semibold text-[#7CC4FA] block mb-1">Academic Development</span>
                  <span className="text-slate-300">Dedicated study of Dravyaguna, Roga Nidana, Rasa Shastra & Charaka Samhita.</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#0C1530] border border-[#38A4F6]/25">
                  <span className="font-semibold text-[#7CC4FA] block mb-1">Clinical Exposure</span>
                  <span className="text-slate-300">Observational scribing, Nadi palpation, and Ashta-vidha Pariksha documentation.</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#0C1530] border border-[#38A4F6]/25">
                  <span className="font-semibold text-[#7CC4FA] block mb-1">Continuous Curiosity</span>
                  <span className="text-slate-300">Engaging with botanical taxonomy, phytochemistry reviews, and study circles.</span>
                </div>
              </div>
            </div>

            {/* Right: Large, Crystal-Clear Portrait Photo & Reflection */}
            <div className="lg:col-span-5 space-y-6">
              <Card3D intensity={8} className="p-4 sm:p-5 rounded-3xl bg-[#0C1530] border-2 border-[#38A4F6]/40 shadow-[0_0_35px_rgba(56,164,246,0.2)] space-y-5">
                
                {/* Large, Clear Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden h-[440px] sm:h-[500px] w-full bg-[#060B18] group border border-[#38A4F6]/40 shadow-2xl">
                  <img
                    src={portfolioProfile.portraitImage}
                    alt="Dr. Pawan Patle — 2nd Year BAMS Student"
                    className="w-full h-full object-cover object-top contrast-105 brightness-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/90 via-transparent to-transparent"></div>

                  {/* Top Holographic Verification Stamp */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#060B18]/85 backdrop-blur-md border border-[#38A4F6]/40 text-[11px] font-mono font-semibold text-[#7CC4FA] flex items-center space-x-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Verified 2nd Year BAMS Candidate</span>
                  </div>

                  {/* Photo Identification Overlay Badge */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#060B18]/90 backdrop-blur-md border border-[#38A4F6]/30 space-y-1 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#7CC4FA] font-bold">
                        Dr. Pawan Patle
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E86D4]/20 border border-[#38A4F6]/30 text-[#BAE0FD]">
                        Student Observer
                      </span>
                    </div>
                    <p className="text-xs text-white font-medium">
                      {portfolioProfile.institution}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {portfolioProfile.university}
                    </p>
                  </div>
                </div>

                {/* Quotation & Reflection Card */}
                <div className="p-4 rounded-2xl bg-[#080E21] border border-white/5 space-y-2.5">
                  <div className="flex items-center space-x-2 text-[#7CC4FA]">
                    <Compass className="w-4 h-4 text-[#38A4F6]" />
                    <span className="text-[11px] uppercase tracking-wider font-mono font-semibold">
                      Clinical Learning Philosophy
                    </span>
                  </div>
                  <h3 className="font-editorial text-lg font-medium text-white leading-snug">
                    "Listening carefully to a patient's lived experience is just as foundational to medicine as analyzing microscopic slides."
                  </h3>
                  
                  {/* Quick Tags */}
                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono border-t border-white/10">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0C1530] border border-[#38A4F6]/30 text-[#BAE0FD]">
                      Pathology & Anatomy Honors
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0C1530] border border-[#38A4F6]/30 text-[#BAE0FD]">
                      350+ Clinical Hours Logged
                    </span>
                  </div>
                </div>

              </Card3D>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EDUCATION SECTION (3D TIMELINE) */}
      {/* ========================================================================= */}
      <section id="education" className="py-24 border-b border-white/10 bg-[#080E21] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Academic Foundation</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Education
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Interactive 3D academic timeline highlighting current enrollment and pre-medical background.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* 1. CURRENT: 2nd Year BAMS */}
            <Card3D intensity={10} className="p-8 sm:p-10 rounded-3xl bg-[#0C1530] border border-[#38A4F6]/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-5 py-1.5 bg-[#0E86D4] text-white font-bold text-[11px] uppercase tracking-wider rounded-bl-2xl shadow-sm flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>CURRENT</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5 space-y-2">
                  <span className="text-xs font-semibold text-[#7CC4FA] uppercase tracking-widest block">
                    2023 — 2028 (Expected)
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white">
                    2nd Year BAMS
                  </h3>
                  <p className="text-sm text-[#BAE0FD] font-medium">
                    Bachelor of Ayurvedic Medicine and Surgery
                  </p>
                  <p className="text-xs text-slate-300 pt-1">
                    College: <span className="text-white font-medium">{portfolioProfile.institution}</span>
                  </p>
                  <p className="text-xs text-slate-300">
                    University: <span className="text-white font-medium">{portfolioProfile.university}</span>
                  </p>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[#BAE0FD] text-xs font-medium">
                    <Award className="w-4 h-4 text-[#7CC4FA]" />
                    <span>Academic Distinction in 1st Year Kriya Sharir & Rachana Sharir</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Intensive 5.5-year medical degree combining foundational Ayurvedic disciplines, modern para-clinical sciences, Dravyaguna pharmacology, and a compulsory 1-year rotatory clinical internship.
                  </p>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                      Core Subjects Currently Studied:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Dravyaguna Vijnana (Ayurvedic Pharmacology & Materia Medica)",
                        "Roga Nidana & Vikriti Vijnana (Diagnostic Pathology)",
                        "Rasa Shastra & Bhaishajya Kalpana (Formulations)",
                        "Charaka Samhita — Purvardha (Classical Samhita)",
                        "Swasthavritta & Yoga (Preventive Medicine)"
                      ].map((sub, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#080E21] border border-[#38A4F6]/25 text-xs text-slate-200">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* 2. COMPLETED: 1st Year BAMS (1st Professional Year) */}
            <Card3D intensity={10} className="p-8 sm:p-10 rounded-3xl bg-[#091126] border border-emerald-500/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-5 py-1.5 bg-emerald-600 text-white font-bold text-[11px] uppercase tracking-wider rounded-bl-2xl shadow-sm flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>COMPLETED • FIRST CLASS DISTINCTION</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5 space-y-2">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block">
                    2023 — 2024 (1st Professional Year)
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white">
                    1st Year BAMS
                  </h3>
                  <p className="text-sm text-emerald-300 font-medium">
                    Preclinical Medical Foundations
                  </p>
                  <p className="text-xs text-slate-300 pt-1">
                    College: <span className="text-white font-medium">{portfolioProfile.institution}</span>
                  </p>
                  <p className="text-xs text-slate-300">
                    Board: <span className="text-white font-medium">{portfolioProfile.university}</span>
                  </p>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs font-medium">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>First Class Distinction in Anatomy (Rachana) & Physiology (Kriya)</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Completed 180+ hours of human cadaveric dissection in Rachana Sharir, exploring osteology, neuroanatomy, myology, and Sushruta's 107 Marma vital points. Rigorous laboratory training in Kriya Sharir (Physiology) including hematology, peripheral smear examination, and clinical Tridosha-Dhatu bioenergetics.
                  </p>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                      1st Year Core Subjects Studied & Passed:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Rachana Sharir (Gross Anatomy, Dissection & 107 Marma Points)",
                        "Kriya Sharir (Human Systemic Physiology & Tridosha)",
                        "Ashtanga Hridaya (Sutrasthana, Dinacharya & Ritucharya)",
                        "Padartha Vijnana & Ayurveda Itihasa (Epistemology)",
                        "Sanskrit (Classical Shloka Recitation & Terminology)"
                      ].map((sub, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#060B18] border border-emerald-500/30 text-xs text-emerald-100">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* 3. Previous: Higher Secondary Education */}
            <Card3D intensity={8} className="p-8 sm:p-10 rounded-3xl bg-[#0B1229] border border-white/10 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
                    2021 — 2023 (Completed)
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-white/90">
                    Higher Secondary Education
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">
                    Pre-Medical Science Curriculum
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    School: <span className="text-white font-medium">State Model Pre-Medical Academy</span>
                  </p>
                </div>

                <div className="md:col-span-7 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Focused curriculum in Human Biology, Cellular Genetics, Organic Chemistry, and Physics, establishing the scientific foundation for undergraduate medical admissions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Human Biology & Genetics", "Chemistry", "Physics"].map((sub, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded bg-[#080E21] text-[11px] text-slate-300 border border-white/10">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card3D>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4B. HUMAN ANATOMY & RACHANA SHARIR STATION (INTERACTIVE 3D/HOLOGRAPHIC) */}
      {/* ========================================================================= */}
      <section id="anatomy" className="py-20 border-b border-white/10 relative bg-[#080E21]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveAnatomy />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLINICAL EXPOSURE (LEARNING & EXPOSURE + ROTATION EXPLORER) */}
      {/* ========================================================================= */}
      <section id="clinical" className="py-24 border-b border-white/10 relative bg-[#060B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Learning & Exposure</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Clinical Exposure
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Areas of observational learning and supervised student interaction in hospital outpatient blocks.
            </p>
          </div>

          {/* Interactive Department Explorer Station */}
          <DepartmentExplorer />

          {/* 8 Clinical Exposure Core Learning Cards */}
          <div>
            <h3 className="font-editorial text-2xl font-normal text-white mb-6">
              Essential Observational Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clinicalExposureCards.map((card, idx) => (
                <Card3D
                  key={idx}
                  intensity={14}
                  className="p-6 rounded-2xl bg-[#0C1530] hover:bg-[#101C3E] border border-[#38A4F6]/25 hover:border-[#38A4F6]/50 shadow-lg transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 flex items-center justify-center text-[#7CC4FA] group-hover:scale-110 group-hover:bg-[#0E86D4] group-hover:text-white transition-all duration-300">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#080E21] text-[#7CC4FA] border border-[#38A4F6]/20">
                        {card.focus}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-medium text-white group-hover:text-[#7CC4FA] transition-colors leading-snug">
                      {card.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-[#7CC4FA] transition-colors">
                    <span>Student Observational Scope</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38A4F6]" />
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SKILLS SECTION */}
      {/* ========================================================================= */}
      <section id="skills" className="py-24 border-b border-white/10 bg-[#080E21] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Competency Matrix</span>
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Skills & Development
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Interactive visualization of medical, academic, professional, and personal attributes.
            </p>
          </div>

          {/* 3 Categories: Medical/Academic, Professional, Personal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategoriesList.map((cat, idx) => (
              <Card3D
                key={idx}
                intensity={12}
                className="p-8 rounded-3xl bg-[#0C1530] border border-[#38A4F6]/25 shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 flex items-center justify-center text-[#7CC4FA]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-2xl font-medium text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#080E21] border border-white/5 hover:border-[#38A4F6]/40 hover:bg-[#101C3E] transition-all flex items-center justify-between text-xs text-slate-200 font-medium"
                    >
                      <span>{skill}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38A4F6]"></span>
                    </div>
                  ))}
                </div>
              </Card3D>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CERTIFICATIONS & ACHIEVEMENTS */}
      {/* ========================================================================= */}
      <section id="certifications" className="py-24 border-b border-white/10 relative bg-[#060B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Credentials & Recognition</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Certifications & Achievements
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              3D certificate cards featuring verified training and symposium awards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificatesList.map((cert) => (
              <Card3D
                key={cert.id}
                intensity={15}
                className="rounded-2xl bg-[#0C1530] border border-[#38A4F6]/25 hover:border-[#38A4F6]/50 shadow-xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#060B18]">
                    <img
                      src={cert.previewUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/80 via-transparent to-transparent"></div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#060B18]/90 text-[10px] font-semibold text-[#7CC4FA] flex items-center space-x-1 border border-[#38A4F6]/30">
                      <ShieldCheck className="w-3 h-3 text-[#38A4F6]" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#7CC4FA] block">
                      {cert.category}
                    </span>
                    <h4 className="font-editorial text-lg font-medium text-white group-hover:text-[#7CC4FA] transition-colors line-clamp-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {cert.date}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2 px-3 rounded-lg bg-[#0E86D4]/20 hover:bg-[#0E86D4] text-[#BAE0FD] hover:text-white border border-[#38A4F6]/40 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center space-x-1"
                  >
                    <span>View Certificate</span>
                  </button>
                </div>
              </Card3D>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ACADEMIC WORK (ACADEMIC JOURNEY) */}
      {/* ========================================================================= */}
      <section id="academic-work" className="py-24 border-b border-white/10 bg-[#080E21] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Scholarly Pursuits</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Academic Work
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Seminar presentations, case study learning, preclinical reviews, and educational projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicWorkCards.map((work, idx) => (
              <Card3D
                key={idx}
                intensity={12}
                className="p-6 sm:p-8 rounded-3xl bg-[#0C1530] border border-[#38A4F6]/25 hover:border-[#38A4F6]/40 shadow-xl flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#0E86D4]/15 text-[#7CC4FA] border border-[#38A4F6]/20">
                      {work.category}
                    </span>
                    <span className="text-slate-400">{work.date}</span>
                  </div>

                  <h3 className="font-editorial text-xl font-medium text-white group-hover:text-[#7CC4FA] transition-colors leading-snug">
                    {work.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {work.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Student Academic Log</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38A4F6]" />
                </div>
              </Card3D>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. GALLERY (MASONRY-STYLE WITH 3D HOVER) */}
      {/* ========================================================================= */}
      <section id="gallery" className="py-24 border-b border-white/10 relative bg-[#060B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Photographic Archives</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Gallery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Photographs from college campus, clinical learning, seminars, workshops, and medical events.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  galleryFilter === cat
                    ? 'bg-[#0E86D4] text-white shadow-md'
                    : 'bg-[#0B132B] text-slate-300 hover:bg-[#141F48] border border-[#38A4F6]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-Style Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <Card3D
                key={item.id}
                intensity={12}
                onClick={() => setSelectedGallery(item)}
                className="rounded-2xl bg-[#0C1530] border border-[#38A4F6]/25 hover:border-[#38A4F6]/50 shadow-xl overflow-hidden cursor-pointer group flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#060B18]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#060B18]/90 text-[#7CC4FA] text-[10px] font-semibold uppercase tracking-wider border border-[#38A4F6]/30">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block mb-1">
                      {item.date} • {item.location}
                    </span>
                    <h4 className="font-editorial text-lg font-medium text-white group-hover:text-[#7CC4FA] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#7CC4FA]">
                    <span>View Lightbox</span>
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. PERSONAL INTERESTS ("BEYOND MEDICINE") */}
      {/* ========================================================================= */}
      <section id="beyond-medicine" className="py-24 border-b border-white/10 bg-[#080E21] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Holistic Personality</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Beyond Medicine
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Personal interests, discipline, and pursuits that support balance and curiosity outside medical lectures.
            </p>
          </div>

          {/* Featured Field Expedition Card */}
          <div className="mb-12 rounded-3xl overflow-hidden bg-[#0A1228] border border-[#38A4F6]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden min-h-[280px]">
                <img
                  src="/images/pawan_mountain_trek.jpg"
                  alt="Dr. Pawan Patle - Highland Botanical Trek"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1228] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0A1228]"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#060B18]/80 text-[#7CC4FA] border border-[#38A4F6]/40 backdrop-blur-md">
                  Field Expedition
                </span>
              </div>
              <div className="lg:col-span-7 p-6 sm:p-10 lg:pl-0 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#7CC4FA]">
                  <Compass className="w-4 h-4 text-[#38A4F6]" />
                  <span>Dravyaguna Field Exploration & Botanical Ecology</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white">
                  "Healing begins with understanding nature's living pharmacy."
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Beyond classroom didactic lectures, Dr. Pawan actively undertakes ecological treks and botanical surveys across highland forest trails. These field expeditions allow direct observation of indigenous medicinal plants in their native habitats, studying altitudinal variations, seasonal potency (Virya), and biodiversity conservation.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#38A4F6]" />
                    <span>Highland Botanical Reserves & Forest Trails</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#38A4F6]" />
                    <span>Herbarium Field Photography</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInterestsList.map((interest, idx) => (
              <Card3D
                key={idx}
                intensity={10}
                className="p-6 rounded-2xl bg-[#0C1530] border border-[#38A4F6]/25 shadow-lg space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 flex items-center justify-center text-[#7CC4FA]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-xl font-medium text-white">
                  {interest.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {interest.detail}
                </p>
              </Card3D>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CAREER VISION ("WHERE I'M HEADED") */}
      {/* ========================================================================= */}
      <section id="career-vision" className="py-24 border-b border-white/10 relative bg-[#060B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Long-Term Horizon</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Where I'm Headed
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Developing foundational medical knowledge with the long-term goal of becoming a knowledgeable and compassionate healthcare professional.
            </p>
          </div>

          <Card3D intensity={8} className="p-8 sm:p-12 rounded-3xl bg-[#0C1530] border border-[#38A4F6]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 flex items-center justify-center text-[#7CC4FA]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-3xl font-medium text-white leading-tight">
                Shaping a Compassionate, Evidence-Grounded Practice
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                I am currently dedicated to mastering the pre-clinical and para-clinical sciences. As I advance into hospital bedside sciences and clinical internship, my long-term commitment is to provide compassionate, personalized patient care that respects both modern diagnostic laboratory findings and holistic healing principles.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                "Complete BAMS didactic years with strong clinical understanding and academic distinction",
                "Fulfill the 1-year rotatory hospital internship with extensive OPD, IPD, and emergency observation",
                "Pursue Post-Graduate (M.D. Ayurveda) studies in Dravyaguna Vijnana or Kayachikitsa",
                "Contribute to published integrative medical research on standardized Ayurvedic formulations",
                "Serve community AYUSH healthcare camps in underserved regions with preventive health education"
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#080E21] border border-white/5 flex items-start space-x-3.5"
                >
                  <span className="w-6 h-6 rounded-full bg-[#0E86D4] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Card3D>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11B. CURRICULUM VITAE (CV) SECTION */}
      {/* ========================================================================= */}
      <section id="cv" className="py-24 border-b border-white/10 bg-[#060B18] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Official Academic Credentials</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Curriculum Vitae
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Verified record of medical coursework, hospital postings, clinical competencies, and academic milestones.
            </p>
          </div>

          <div className="bg-[#0A1228] border border-[#38A4F6]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E86D4]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Summary Badges */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0E86D4]/20 border border-[#38A4F6]/40 flex items-center justify-center text-[#7CC4FA]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                      {portfolioProfile.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#7CC4FA] font-mono">
                      {portfolioProfile.degreeBadge} Candidate • 2nd Year
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Comprehensive academic curriculum vitae documenting undergraduate training in Ayurvedic Medicine & Surgery (BAMS), OPD clinical history taking, Dravyaguna herbarium pharmacology, and clinical observational rotations.
                </p>

                {/* Key Qualifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7CC4FA] block">
                      Institution & Board
                    </span>
                    <span className="text-xs text-white font-medium block">
                      {portfolioProfile.institution}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      {portfolioProfile.university}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
                      Academic Standing
                    </span>
                    <span className="text-xs text-white font-medium block">
                      First Class Distinction
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Kriya & Rachana Sharir (1st Prof)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7CC4FA] block">
                      Clinical Rotations
                    </span>
                    <span className="text-xs text-white font-medium block">
                      OPD Scribing & Case Intake
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      Kayachikitsa & General Medicine
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7CC4FA] block">
                      Certifications
                    </span>
                    <span className="text-xs text-white font-medium block">
                      GCP (NIH/NIDA) & BLS Provider
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      State Medical Council Awardee
                    </span>
                  </div>
                </div>

                {/* Ethical Disclaimer */}
                <div className="text-[11px] text-slate-400 italic flex items-center space-x-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4 text-[#7CC4FA] shrink-0" />
                  <span>Student candidate portfolio — curriculum vitae for academic review and clinical clerkships.</span>
                </div>
              </div>

              {/* Right Column: CV Preview Card & Immediate Actions */}
              <div className="lg:col-span-5">
                <div className="bg-[#060B18] border border-[#38A4F6]/40 rounded-2xl p-6 shadow-xl space-y-6 text-center lg:text-left">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="text-left">
                      <span className="text-xs font-bold text-white uppercase tracking-wider block">
                        Academic CV Document
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Format: Printable PDF & Interactive View
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Verified
                    </span>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => setCvModalOpen(true)}
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#0E86D4] hover:bg-[#38A4F6] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(14,134,212,0.4)] hover:shadow-lg"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Open Instant CV Preview</span>
                    </button>

                    <a
                      href="/cv"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#0B132B] hover:bg-[#141F48] text-white border border-[#38A4F6]/50 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-[#7CC4FA]" />
                      <span>Open Dedicated CV Page</span>
                    </a>

                    <button
                      onClick={() => {
                        setCvModalOpen(true);
                        setTimeout(() => window.print(), 300);
                      }}
                      className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-medium uppercase tracking-wider transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5 text-slate-400" />
                      <span>Print / Download as PDF</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. CONTACT SECTION */}
      {/* ========================================================================= */}
      <section id="contact" className="py-24 relative bg-[#080E21]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#7CC4FA] mb-2">
              <span className="w-6 h-[1px] bg-[#38A4F6]"></span>
              <span>Communication</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
              Contact & Inquiries
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Feel free to reach out regarding academic study circles, research collaborations, or student healthcare initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <Card3D intensity={8} className="p-8 rounded-3xl bg-[#0C1530] border border-[#38A4F6]/25 shadow-xl space-y-6">
                <h3 className="font-editorial text-2xl font-medium text-white">
                  Direct Channels
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[#7CC4FA] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${portfolioProfile.email}`}
                        className="font-medium text-white hover:text-[#7CC4FA] transition-colors"
                      >
                        {portfolioProfile.email}
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[#7CC4FA] flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                        LinkedIn
                      </span>
                      <a
                        href={portfolioProfile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-white hover:text-[#7CC4FA] transition-colors inline-flex items-center space-x-1"
                      >
                        <span>linkedin.com/in/pawankumar-med</span>
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  {portfolioProfile.instagram && (
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[#7CC4FA] flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                          Instagram (Academic / Study)
                        </span>
                        <a
                          href={portfolioProfile.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-white hover:text-[#7CC4FA] transition-colors inline-flex items-center space-x-1"
                        >
                          <span>@pawanpatle04</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* College & Location */}
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0E86D4]/15 border border-[#38A4F6]/30 text-[#7CC4FA] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block">
                        College & Location
                      </span>
                      <p className="font-medium text-white">
                        {portfolioProfile.institution}
                      </p>
                      <p className="text-xs text-slate-300">
                        {portfolioProfile.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <Card3D intensity={6} className="p-8 sm:p-10 rounded-3xl bg-[#0C1530] border border-[#38A4F6]/25 shadow-xl">
                {contactSubmitted ? (
                  <div className="text-center py-10 space-y-3 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-editorial text-2xl font-medium text-white">
                      Message Received
                    </h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto">
                      Thank you, <span className="font-semibold text-white">{contactForm.name}</span>. Your note has been received. I will review it between clinical rotations.
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({ name: '', email: '', message: '' });
                      }}
                      className="mt-2 px-5 py-2 rounded-lg bg-[#0E86D4] text-white text-xs font-semibold uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h3 className="font-editorial text-2xl font-medium text-white">
                      Send a Message
                    </h3>

                    <div className="space-y-1">
                      <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080E21] border border-[#38A4F6]/30 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38A4F6]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your.email@institution.edu"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080E21] border border-[#38A4F6]/30 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38A4F6]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080E21] border border-[#38A4F6]/30 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#38A4F6] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="px-6 py-3 rounded-xl bg-[#0E86D4] hover:bg-[#38A4F6] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center space-x-2 transition-all shadow-md disabled:opacity-50"
                    >
                      <span>{contactSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </Card3D>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modals */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <GalleryModal
        item={selectedGallery}
        onClose={() => setSelectedGallery(null)}
      />

    </div>
  );
};
