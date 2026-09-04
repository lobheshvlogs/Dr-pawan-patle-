import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Printer,
  ArrowLeft,
  GraduationCap,
  Award,
  Stethoscope,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Share2,
  BookOpen,
  Calendar,
  Building2,
  Sparkles,
  FileCheck
} from 'lucide-react';
import {
  portfolioProfile,
  educationList,
  experiencesList,
  researchList,
  achievementsList,
  skillCategoriesList
} from '../data/portfolioData';

export const CVPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${portfolioProfile.name} — Curriculum Vitae`,
        text: `Curriculum Vitae of Dr. Pawan Patle (2nd-Year BAMS Medical Student)`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Top Floating Control Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 no-print">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B132B] border border-[#38A4F6]/30 shadow-xl backdrop-blur-md">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7CC4FA] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
              title="Share or Copy Link"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-slate-300" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-xl bg-[#0E86D4] hover:bg-[#38A4F6] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(14,134,212,0.35)] hover:shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Document Paper */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden printable-cv">
        
        {/* Document Header Accent Strip */}
        <div className="h-3 bg-gradient-to-r from-[#003060] via-[#0E86D4] to-[#38A4F6] no-print"></div>

        <div className="p-8 sm:p-14 space-y-10">
          
          {/* Header Section */}
          <div className="border-b-2 border-slate-900 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center space-x-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-900 shadow-md shrink-0 bg-slate-100">
                <img
                  src={portfolioProfile.portraitImage}
                  alt={portfolioProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-blue-900 border border-blue-200">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                  <span>Curriculum Vitae</span>
                </span>
                <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 pt-0.5">
                  {portfolioProfile.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-blue-800">
                  {portfolioProfile.degreeBadge}
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  {portfolioProfile.institution} • {portfolioProfile.university}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 md:text-right font-medium">
              <div className="flex items-center md:justify-end space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-700" />
                <a href={`mailto:${portfolioProfile.email}`} className="text-blue-900 hover:underline">
                  {portfolioProfile.email}
                </a>
              </div>
              <div className="flex items-center md:justify-end space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                <span>{portfolioProfile.location}</span>
              </div>
              <div className="flex items-center md:justify-end space-x-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
                <a href={portfolioProfile.linkedin} target="_blank" rel="noreferrer" className="text-blue-900 hover:underline">
                  LinkedIn: Dr. Pawan Patle
                </a>
              </div>
              {portfolioProfile.instagram && (
                <div className="flex items-center md:justify-end space-x-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
                  <a href={portfolioProfile.instagram} target="_blank" rel="noreferrer" className="text-blue-900 hover:underline">
                    Instagram: @pawanpatle04
                  </a>
                </div>
              )}
              <p className="text-[11px] text-slate-500 pt-1">
                Portfolio: <span className="font-mono text-slate-700">dr-pawan-portfolio.vercel.app</span>
              </p>
            </div>
          </div>

          {/* Academic Profile Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-1.5 flex items-center space-x-2">
              <Stethoscope className="w-4 h-4 text-blue-700" />
              <span>Academic Profile & Objective</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Second-year candidate for the Bachelor of Ayurvedic Medicine & Surgery (BAMS) at {portfolioProfile.institution}, affiliated with {portfolioProfile.university}. Actively developing foundational mastery in Kayachikitsa OPD patient intake, Dravyaguna medicinal botanical pharmacology, Roga Nidana clinical diagnostics, and Rachana Sharir (Anatomy). Committed to bridging traditional clinical wisdom with evidence-based modern medical methodologies and clinical observation.
            </p>
          </div>

          {/* Medical Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-1.5 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Medical Education & Qualifications</span>
            </h2>
            <div className="space-y-4">
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm space-y-1.5 border-l-2 border-blue-600 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-950">
                    <span className="text-sm font-bold text-blue-950">{edu.degree}</span>
                    <span className="text-xs font-mono text-slate-500">{edu.startYear} — {edu.expectedGraduation}</span>
                  </div>
                  <div className="text-xs text-slate-700">
                    <span className="font-medium">{edu.institution}</span>, {edu.university}
                  </div>
                  {edu.honors && (
                    <div className="text-xs font-semibold text-blue-800 bg-blue-50/80 px-2.5 py-1 rounded inline-block">
                      ★ Academic Honors: {edu.honors}
                    </div>
                  )}
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">Core Coursework:</span> {edu.coreSubjects.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Exposure & Hospital Postings */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-1.5 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-blue-700" />
              <span>Clinical Exposure & Hospital Postings</span>
            </h2>
            <div className="space-y-4">
              {experiencesList.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm space-y-1.5 border-l-2 border-slate-300 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-slate-950">
                    <span className="font-bold text-slate-900">{exp.title} — <span className="text-blue-800">{exp.organization}</span></span>
                    <span className="text-xs font-mono text-slate-500">{exp.date}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{exp.description}</p>
                  <div className="text-[11px] text-slate-600 pt-0.5">
                    <span className="font-semibold text-slate-800">Competencies Acquired:</span> {exp.skillsLearned.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical & Diagnostic Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-1.5 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-700" />
              <span>Clinical & Medical Competencies</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="block text-slate-950 text-xs font-bold uppercase tracking-wider text-blue-900">
                  Clinical Examination & OPD:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Patient History Taking (Srotas Assessment), Physical Examination (Vitals, Palpation, Auscultation), Case File Documentation, Patient Empathy & Clinical Ethics.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="block text-slate-950 text-xs font-bold uppercase tracking-wider text-blue-900">
                  Dravyaguna & Pharmacology:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Botanical Herb Identification, Rasa-Guna-Virya-Vipaka Evaluation, Herbarium Preparation, Traditional Formulations & Safety Protocols.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="block text-slate-950 text-xs font-bold uppercase tracking-wider text-blue-900">
                  Pathology & Laboratory:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Staining Techniques (H&E, Leishman), Blood Smear Examination, Basic Urine & Stool Analysis, Microscopic Tissue Observation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="block text-slate-950 text-xs font-bold uppercase tracking-wider text-blue-900">
                  Academic Informatics & Research:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  PubMed / Medline Literature Synthesis, Clinical Case Study Writing, Scientific Presentation Drafting, Digital Botanical Registries.
                </p>
              </div>
            </div>
          </div>

          {/* Research & Publications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-1.5 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>Research Working Papers & Case Documentation</span>
            </h2>
            <div className="space-y-3">
              {researchList.map((res) => (
                <div key={res.id} className="text-xs space-y-1 border-l-2 border-blue-400 pl-3">
                  <div className="font-semibold text-slate-950 text-xs sm:text-sm">
                    "{res.title}"
                  </div>
                  <div className="text-slate-600 text-xs">
                    <span className="font-medium text-blue-800">Status: {res.status}</span> • {res.journalOrSymposium || 'Departmental Review Series'} ({res.date})
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {res.abstract || res.findingsBrief}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Honors & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-200 pb-1.5 flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-700" />
              <span>Honors, Certifications & Distinctions</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {achievementsList.map((ach) => (
                <div key={ach.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start space-x-2.5">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">{ach.title}</span>
                    <span className="text-[11px] text-slate-500">{ach.issuer} • {ach.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Transparency & Ethical Disclosure */}
          <div className="pt-6 border-t-2 border-slate-200 text-xs text-slate-500 space-y-1.5">
            <div className="flex items-center space-x-2 text-blue-900 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span>Official Student Transparency & Ethical Statement</span>
            </div>
            <p className="text-[11px] leading-relaxed italic text-slate-600">
              Dr. Pawan Patle is currently an undergraduate medical student candidate enrolled in the Bachelor of Ayurvedic Medicine & Surgery (BAMS) curriculum and is not yet a licensed independent practitioner. This Curriculum Vitae is compiled exclusively for academic evaluation, residency applications, clinical shadowing, and medical research collaborations.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Actions for Mobile / Easy Access */}
      <div className="max-w-4xl mx-auto mt-8 flex items-center justify-between no-print">
        <Link
          to="/"
          className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Overview</span>
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#0E86D4] hover:bg-[#38A4F6] text-white text-xs font-semibold tracking-wider uppercase transition-all"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / Save PDF</span>
        </button>
      </div>
    </div>
  );
};

export default CVPage;
