import React, { useEffect } from 'react';
import { X, Printer, Download, GraduationCap, Award, Stethoscope, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioProfile, educationList, experiencesList, researchList, achievementsList, skillCategoriesList } from '../../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-900/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white text-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 no-print">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-clinical-800">
            <GraduationCap className="w-4 h-4 text-clinical-600" />
            <span>Official Academic Curriculum Vitae</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a
              href="/cv"
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
              title="Open full page view"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Open Full Page</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-clinical-600 hover:bg-clinical-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Curriculum Vitae Content */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 text-charcoal-900 bg-white font-sans printable-cv">
          
          {/* Header */}
          <div className="border-b-2 border-charcoal-900 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-clinical-700 shadow-sm shrink-0 bg-slate-100">
                <img
                  src={portfolioProfile.portraitImage}
                  alt={portfolioProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900">
                  {portfolioProfile.name}
                </h1>
                <p className="text-sm font-semibold uppercase tracking-wider text-clinical-800 mt-0.5">
                  {portfolioProfile.degreeBadge}
                </p>
                <p className="text-xs text-charcoal-600 mt-0.5">
                  {portfolioProfile.institution} • {portfolioProfile.university}
                </p>
              </div>
            </div>

            <div className="text-xs text-charcoal-600 space-y-1 sm:text-right">
              <p>Email: <a href={`mailto:${portfolioProfile.email}`} className="text-clinical-700 hover:underline font-medium">{portfolioProfile.email}</a></p>
              <p>Location: {portfolioProfile.location}</p>
              <p>LinkedIn: <a href={portfolioProfile.linkedin} target="_blank" rel="noreferrer" className="text-clinical-700 hover:underline">linkedin.com/in/pawankumar-med</a></p>
              {portfolioProfile.instagram && (
                <p>Instagram: <a href={portfolioProfile.instagram} target="_blank" rel="noreferrer" className="text-clinical-700 hover:underline font-medium">@pawanpatle04</a></p>
              )}
            </div>
          </div>

          {/* Academic Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-900 border-b border-charcoal-200 pb-1">
              Academic Profile Summary
            </h2>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              Second-year candidate for the Bachelor of Ayurvedic Medicine & Surgery (BAMS). Actively engaged in hospital Kayachikitsa OPD clinical scribing, Dravyaguna medicinal plant taxonomy, Roga Nidana laboratory training, and preclinical systematic literature reviews. Strong academic standing with First Class Distinction in 1st Professional Kriya Sharir (Physiology) & Rachana Sharir (Anatomy).
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-900 border-b border-charcoal-200 pb-1">
              Medical Education
            </h2>
            {educationList.map((edu) => (
              <div key={edu.id} className="text-xs space-y-1">
                <div className="flex justify-between font-semibold text-charcoal-900">
                  <span>{edu.degree}</span>
                  <span>{edu.startYear} — {edu.expectedGraduation}</span>
                </div>
                <div className="text-charcoal-600 italic">
                  {edu.institution}, {edu.university}
                </div>
                {edu.honors && (
                  <div className="text-clinical-800 font-medium">
                    • Honors: {edu.honors}
                  </div>
                )}
                <div className="text-charcoal-600 text-[11px]">
                  • Core Coursework: {edu.coreSubjects.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Clinical Postings & Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-900 border-b border-charcoal-200 pb-1">
              Clinical & Observational Hospital Postings
            </h2>
            {experiencesList.slice(0, 3).map((exp) => (
              <div key={exp.id} className="text-xs space-y-1">
                <div className="flex justify-between font-semibold text-charcoal-900">
                  <span>{exp.title} — {exp.organization}</span>
                  <span>{exp.date}</span>
                </div>
                <p className="text-charcoal-700">{exp.description}</p>
                <div className="text-charcoal-600 text-[11px]">
                  • Focus: {exp.skillsLearned.join(' • ')}
                </div>
              </div>
            ))}
          </div>

          {/* Academic & Clinical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-900 border-b border-charcoal-200 pb-1">
              Medical Competencies & Clinical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700">
              <div>
                <strong className="block text-charcoal-900 text-[11px] uppercase">Clinical Practice:</strong>
                Patient History Taking, Case Documentation, Basic Clinical Examination (Vitals, Palpation), Patient Communication, Healthcare Ethics.
              </div>
              <div>
                <strong className="block text-charcoal-900 text-[11px] uppercase">Laboratory & Informatics:</strong>
                Peripheral Blood Smear Staining (H&E, Leishman), General Pathology, PubMed Literature Synthesis, Digital Repertory Analysis.
              </div>
            </div>
          </div>

          {/* Research & Publications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-900 border-b border-charcoal-200 pb-1">
              Research & Working Papers
            </h2>
            {researchList.slice(0, 2).map((res) => (
              <div key={res.id} className="text-xs space-y-0.5">
                <div className="font-semibold text-charcoal-900">
                  "{res.title}"
                </div>
                <div className="text-charcoal-600 italic">
                  Status: {res.status} • {res.journalOrSymposium || 'Departmental Series'} ({res.date})
                </div>
              </div>
            ))}
          </div>

          {/* Academic Honors */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clinical-900 border-b border-charcoal-200 pb-1">
              Honors & Certifications
            </h2>
            <ul className="text-xs text-charcoal-700 space-y-1">
              <li>• 1st Prize, Inter-Collegiate Student Clinical Presentation (State Medical Council, 2024)</li>
              <li>• Academic Distinction in Anatomy & Physiology (University Board Examinations, 2024)</li>
              <li>• Good Clinical Practice (GCP) Certification — NIDA / NIH (2024)</li>
              <li>• Basic Life Support (BLS) Certification for Healthcare Providers (2024)</li>
            </ul>
          </div>

          {/* Ethical Disclaimer */}
          <div className="pt-4 border-t border-charcoal-200 text-[10px] text-charcoal-500 italic">
            Note: Dr. Pawan Patle is currently an undergraduate student candidate enrolled in the BAMS curriculum and is not yet a licensed practitioner.
          </div>

        </div>
      </div>
    </div>
  );
};
