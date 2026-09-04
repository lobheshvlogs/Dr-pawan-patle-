import React, { useState } from 'react';
import { achievementsList, certificatesList } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { CertificateModal } from '../components/common/CertificateModal';
import { SEO } from '../components/common/SEO';
import { Certificate } from '../types';
import {
  Award,
  ShieldCheck,
  Calendar,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Medal,
  ExternalLink
} from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Credentials & Achievements"
        description="Official academic honors, symposium presentations, and verified certifications for Dr. Pawan Patle."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Accreditations & Honors</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Credentials & Recognition
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            A comprehensive record of university academic distinctions, research symposium prizes, and accredited clinical life-support certifications.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 1. Academic Honors & Awards */}
        {/* ===================================================================== */}
        <div className="mb-24">
          <SectionHeading
            eyebrow="Merit & Recognition"
            title="Academic Awards & Honors"
            subtitle="Conferred through competitive examinations, clinical presentations, and community service."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievementsList.map((ach) => (
              <div
                key={ach.id}
                className="bg-white p-8 rounded-2xl border border-charcoal-200 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        ach.tier === 'Gold'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : ach.tier === 'Distinction'
                          ? 'bg-blue-100 text-blue-900 border border-blue-300'
                          : 'bg-cream-200 text-charcoal-800 border border-charcoal-300'
                      }`}
                    >
                      {ach.category} • {ach.tier}
                    </span>
                    <span className="font-mono text-xs font-semibold text-charcoal-400">
                      {ach.year}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-charcoal-900 leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-xs font-medium text-clinical-800">
                    Conferred by: {ach.issuer}
                  </p>

                  <p className="text-sm text-charcoal-600 leading-relaxed pt-1">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 2. Professional Certifications (Click to open modal) */}
        {/* ===================================================================== */}
        <div>
          <SectionHeading
            eyebrow="Accreditation"
            title="Verified Professional Certifications"
            subtitle="Training completed in emergency basic life support, pathology laboratory sciences, and ethical clinical research."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificatesList.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-white rounded-2xl border border-charcoal-200 overflow-hidden shadow-subtle hover:border-clinical-600/50 hover:shadow-card transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-100">
                    <img
                      src={cert.previewUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-charcoal-900/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-clinical-700 flex items-center space-x-1 shadow-xs">
                      <ShieldCheck className="w-3 h-3 text-clinical-600" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-clinical-700 block">
                      {cert.category}
                    </span>
                    <h4 className="font-editorial text-lg font-medium text-charcoal-900 group-hover:text-clinical-800 transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-charcoal-500 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] font-mono text-charcoal-400">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-charcoal-100 flex items-center justify-between text-xs text-clinical-700 font-semibold">
                  <span>Open Verification Modal</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
