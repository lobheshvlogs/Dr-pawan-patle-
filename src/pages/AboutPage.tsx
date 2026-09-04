import React from 'react';
import { Link } from 'react-router-dom';
import {
  portfolioProfile,
  educationList,
  skillCategoriesList,
  timelineMilestones
} from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import {
  Stethoscope,
  Microscope,
  BookOpen,
  Award,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Building,
  HeartHandshake,
  Compass
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24">
      <SEO
        title="About & Medical Journey"
        description="Learn more about Dr. Pawan Patle — BAMS student, Ayurvedic medical research explorer, and student observer in clinical diagnostics."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Eyebrow */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Profile & Narrative</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Cultivating a thoughtful balance between microscopic science and human-centered healing.
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            A portrait of academic curiosity, medical principles, and community healthcare exploration.
          </p>
        </div>

        {/* Split Editorial Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-charcoal-200">
          
          {/* Left: Sticky Image & Metadata Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-charcoal-200 aspect-[4/5] bg-charcoal-900">
              <img
                src={portfolioProfile.portraitImage}
                alt={portfolioProfile.name}
                className="w-full h-full object-cover object-top contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-clinical-700/80 backdrop-blur-sm inline-block mb-1">
                  {portfolioProfile.professionalTitle}
                </span>
                <h3 className="font-editorial text-2xl font-medium">{portfolioProfile.name}</h3>
                <p className="text-xs text-charcoal-300">{portfolioProfile.institution}</p>
              </div>
            </div>

            {/* Quick Metadata Box */}
            <div className="bg-white p-6 rounded-2xl border border-charcoal-200 shadow-subtle space-y-4 text-xs">
              <h4 className="uppercase tracking-wider font-semibold text-charcoal-400 text-[11px]">
                Academic Details
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-500">Program:</span>
                  <span className="font-semibold text-charcoal-800">BAMS (5.5-Year Degree)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-500">Current Phase:</span>
                  <span className="font-semibold text-clinical-700">2nd Professional Year</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-500">Affiliation:</span>
                  <span className="font-semibold text-charcoal-800">{portfolioProfile.university}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-500">Geographic Base:</span>
                  <span className="font-semibold text-charcoal-800">{portfolioProfile.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between">
                <span className="text-charcoal-500">Inquiries:</span>
                <a
                  href={`mailto:${portfolioProfile.email}`}
                  className="font-medium text-clinical-700 hover:underline"
                >
                  {portfolioProfile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Narrative Bio */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
            <div className="space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal-900">
                The Academic Journey
              </h2>
              {portfolioProfile.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Philosophy of Holistic Medicine Box */}
            <div className="p-8 rounded-2xl bg-cream-100 border border-charcoal-200/80 space-y-3">
              <div className="flex items-center space-x-2 text-clinical-800 text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Philosophical Compass</span>
              </div>
              <h3 className="font-editorial text-2xl text-charcoal-900 font-medium">
                "Treating the patient, not just the disease."
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                As an aspiring healthcare professional, I believe modern healthcare is at its strongest when it synthesizes diagnostic accuracy with genuine therapeutic empathy. Mastery over pathology and histology gives us the tools to identify biological breakdown; understanding the psychosocial determinants of illness gives us the humility to treat human beings with compassion.
              </p>
            </div>

            {/* Core Interests Breakdown */}
            <div className="space-y-4 pt-4">
              <h3 className="font-editorial text-2xl font-medium text-charcoal-900">
                Core Academic & Research Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {portfolioProfile.coreInterests.map((interest, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-charcoal-200 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-clinical-50 text-clinical-700 flex items-center justify-center shrink-0">
                      <Microscope className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-charcoal-800">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Academic Routine & Responsibilities */}
            <div className="space-y-4 pt-4">
              <h3 className="font-editorial text-2xl font-medium text-charcoal-900">
                Current Second-Year Focus Areas
              </h3>
              <ul className="space-y-3 text-sm text-charcoal-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-clinical-600 mt-2 shrink-0"></span>
                  <span><strong>General & Systemic Pathology:</strong> Mastering cell injury patterns, inflammatory hemodynamics, neoplasia, and hematological disorders.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-clinical-600 mt-2 shrink-0"></span>
                  <span><strong>Medical Microbiology:</strong> Bacteriology, virology, mycology, and aseptic lab techniques.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-clinical-600 mt-2 shrink-0"></span>
                  <span><strong>Forensic Medicine & Toxicology:</strong> Medical jurisprudence, autopsy observation, and bioethical codes of medical practice.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-clinical-600 mt-2 shrink-0"></span>
                  <span><strong>Materia Medica & Organon:</strong> Studying individual symptom rubrics, Hahnemannian philosophy, and case-taking protocols.</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                to="/journey"
                className="px-6 py-3 rounded-lg bg-clinical-800 hover:bg-clinical-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors inline-flex items-center space-x-2"
              >
                <span>View Full Academic Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-white hover:bg-cream-100 text-charcoal-800 border border-charcoal-300 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Initiate Academic Inquiry
              </Link>
            </div>

          </div>
        </div>

        {/* Full Skills Matrix Section */}
        <div className="pt-20">
          <SectionHeading
            eyebrow="Competency Framework"
            title="Complete Skills & Disciplines"
            subtitle="Categorized across academic sciences, clinical scribing, research methods, and medical ethics."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategoriesList.map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-charcoal-200 shadow-subtle flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <h4 className="font-editorial text-xl font-medium text-charcoal-900">
                    {category.title}
                  </h4>
                  <p className="text-xs text-charcoal-500 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-100 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full bg-[#FAF8F2] border border-charcoal-200 text-xs text-charcoal-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
