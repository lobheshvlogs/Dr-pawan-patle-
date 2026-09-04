import React from 'react';
import { Link } from 'react-router-dom';
import {
  educationList,
  timelineMilestones,
  portfolioProfile
} from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import {
  GraduationCap,
  Calendar,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  BookOpen,
  Stethoscope,
  Microscope,
  FileCheck
} from 'lucide-react';

export const JourneyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Education & Academic Journey"
        description="Comprehensive timeline of Dr. Pawan Patle's BAMS medical curriculum, university milestones, and clinical training progression."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Academic Progression</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            The Academic & Clinical Journey
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            A structured chronicle of pre-clinical foundations, current 2nd-year para-clinical training, and our road toward clinical internship and medical licensing.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 1. Formal Degree Timelines */}
        {/* ===================================================================== */}
        <div className="space-y-10 mb-24">
          <SectionHeading
            eyebrow="Formal Enrollment"
            title="University Medical Education"
            subtitle="Degree institutions, honors distinctions, and structured subject coursework."
          />

          <div className="space-y-8">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-charcoal-200 shadow-subtle hover:shadow-card transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-editorial text-3xl sm:text-4xl font-semibold text-clinical-800">
                        {edu.startYear} — {edu.expectedGraduation}
                      </span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-clinical-800 bg-clinical-50 px-3 py-1 rounded-full inline-block">
                      {edu.currentYear}
                    </span>
                    <h3 className="font-editorial text-2xl font-medium text-charcoal-900 pt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-charcoal-700">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-charcoal-500">
                      {edu.university} • {edu.location}
                    </p>

                    {edu.honors && (
                      <div className="pt-2">
                        <div className="inline-flex items-center space-x-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                          <Award className="w-4 h-4 text-amber-700 shrink-0" />
                          <span>{edu.honors}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-base text-charcoal-700 leading-relaxed font-normal">
                      {edu.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-500">
                        Curriculum Subjects & Practical Modules:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {edu.coreSubjects.map((sub, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-cream-50 border border-charcoal-200/70 text-xs text-charcoal-800 font-medium flex items-center space-x-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-clinical-600 shrink-0"></span>
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 2. Chronological Milestones & Trajectory */}
        {/* ===================================================================== */}
        <div className="pb-20">
          <SectionHeading
            eyebrow="Milestone Timeline"
            title="Year-by-Year Growth & Focus Areas"
            subtitle="From initial cadaveric dissection in Year 1 to future hospital rotations and research fellowships."
          />

          <div className="relative border-l-2 border-charcoal-200 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Node marker */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-clinical-700 flex items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      milestone.status === 'Current Focus'
                        ? 'bg-clinical-600 animate-pulse'
                        : 'bg-clinical-700'
                    }`}
                  ></div>
                </div>

                <div
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 space-y-4 ${
                    milestone.status === 'Current Focus'
                      ? 'bg-clinical-50/50 border-clinical-400 shadow-card'
                      : 'bg-white border-charcoal-200 shadow-subtle'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-editorial text-3xl font-semibold text-charcoal-900 mr-3">
                        {milestone.year}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                          milestone.status === 'Current Focus'
                            ? 'bg-clinical-700 text-white'
                            : milestone.status === 'Completed'
                            ? 'bg-charcoal-100 text-charcoal-700'
                            : 'bg-cream-200 text-charcoal-600'
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-charcoal-900">
                    {milestone.title}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                    {milestone.summary}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 block mb-2">
                      Key Highlights & Competencies:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                      {milestone.keyHighlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-clinical-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
