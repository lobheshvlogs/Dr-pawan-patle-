import React, { useState } from 'react';
import { experiencesList } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { CheckCircle2, Calendar, MapPin, Building, Stethoscope, Filter } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Clinical Exposure',
    'Community Health Camp',
    'Academic Workshop',
    'Conference & Symposium',
    'Student Leadership'
  ];

  const filtered = experiencesList.filter(
    (exp) => selectedCategory === 'All' || exp.category === selectedCategory
  );

  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Clinical & Academic Experience"
        description="Observational hospital postings, diagnostic pathology lab training, and rural health outreach camps by Dr. Pawan Patle."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Experiential Learning</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Clinical & Academic Journey
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            Documenting hands-on clinical observations in outpatient hospital clinics, specialized pathology staining workshops, and rural community healthcare initiatives.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center gap-2 pb-6 border-b border-charcoal-200">
          <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-400 mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter By:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-clinical-800 text-white shadow-sm'
                  : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-charcoal-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l-2 border-charcoal-200 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          {filtered.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-2 w-6 h-6 rounded-full bg-white border-2 border-clinical-700 flex items-center justify-center group-hover:bg-clinical-700 transition-colors">
                <div className="w-2 h-2 rounded-full bg-clinical-700 group-hover:bg-white transition-colors"></div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-charcoal-200 shadow-subtle hover:shadow-card transition-all duration-300 space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-clinical-50 text-clinical-800 border border-clinical-200">
                      {exp.category}
                    </span>
                    <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal-900 pt-2">
                      {exp.title}
                    </h2>
                    <p className="text-sm font-medium text-charcoal-700">
                      {exp.organization} • <span className="text-charcoal-500">{exp.location}</span>
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-charcoal-600 bg-cream-100 px-3.5 py-1.5 rounded-full shrink-0">
                    {exp.date}
                  </span>
                </div>

                <p className="text-base text-charcoal-700 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* What I Learned */}
                <div className="p-5 rounded-xl bg-cream-50/70 border border-charcoal-200/60 space-y-2.5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 block">
                    Core Insights & Clinical Observational Takeaways:
                  </span>
                  <ul className="space-y-2 text-sm text-charcoal-700">
                    {exp.whatILearned.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-clinical-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Learned */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-400 mr-2">
                    Competencies:
                  </span>
                  {exp.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded bg-[#FAF8F2] border border-charcoal-200 text-xs text-charcoal-800 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
