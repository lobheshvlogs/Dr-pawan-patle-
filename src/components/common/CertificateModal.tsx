import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Calendar, Hash, ExternalLink } from 'lucide-react';
import { Certificate } from '../../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060B18]/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="bg-[#0C1530] text-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#38A4F6]/30 overflow-hidden relative transform transition-all animate-scaleUp max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080E21]">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#0E86D4]/20 text-[#7CC4FA] flex items-center justify-center border border-[#38A4F6]/30">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7CC4FA]">
                Official Credential Verification
              </span>
              <p className="text-xs text-slate-300 font-medium">
                Issued to: <span className="font-semibold text-white">Dr. Pawan Patle</span> (2nd Year BAMS Student)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Certificate Image Frame */}
          <div className="relative rounded-xl overflow-hidden border border-[#38A4F6]/20 bg-[#060B18] shadow-inner">
            <img
              src={certificate.previewUrl}
              alt={certificate.title}
              className="w-full h-auto max-h-72 object-contain mx-auto"
            />
            {certificate.verified && (
              <div className="absolute top-3 right-3 px-3 py-1 bg-[#060B18]/90 backdrop-blur-md rounded-full border border-emerald-500/40 flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Student Record</span>
              </div>
            )}
          </div>

          {/* Title & Issuer */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7CC4FA] block mb-1">
              {certificate.category}
            </span>
            <h3 id="cert-modal-title" className="font-editorial text-2xl font-bold text-white leading-snug">
              {certificate.title}
            </h3>
            <p className="text-sm font-medium text-slate-300 mt-1">
              Issuing Organization: <span className="text-white font-semibold">{certificate.issuer}</span>
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#080E21] border border-white/10 text-xs">
            <div className="flex items-center space-x-2 text-slate-300">
              <Calendar className="w-4 h-4 text-[#38A4F6]" />
              <span>Completion Date:</span>
              <strong className="text-white font-mono">{certificate.date}</strong>
            </div>
            {certificate.credentialId && (
              <div className="flex items-center space-x-2 text-slate-300">
                <Hash className="w-4 h-4 text-[#38A4F6]" />
                <span>Credential ID:</span>
                <strong className="text-white font-mono">{certificate.credentialId}</strong>
              </div>
            )}
          </div>

          {/* Competencies Highlighted */}
          {certificate.skillsHighlighted && certificate.skillsHighlighted.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                Documented Competencies & Curriculum
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsHighlighted.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#080E21] border border-[#38A4F6]/25 text-xs text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#38A4F6]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Academic Transparency Notice */}
          <div className="p-3.5 rounded-lg bg-[#0E86D4]/10 border border-[#38A4F6]/30 text-[11px] text-slate-300 flex items-start space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#38A4F6] shrink-0 mt-0.5" />
            <p>
              This certificate represents non-clinical continuous medical education (CME), university distinction, or certified academic workshop participation completed during BAMS undergraduate training.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#080E21] flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Student Academic Archives
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0E86D4] hover:bg-[#38A4F6] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Close Verification
          </button>
        </div>
      </div>
    </div>
  );
};
