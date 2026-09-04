import React from 'react';
import { projectsList } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { Layers, Target, CheckCircle2, Wrench, Sparkles, ArrowRight } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Academic Projects & Initiatives"
        description="Student healthcare projects, comparative materia medica tools, and digital histology atlases by Dr. Pawan Patle."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Educational Initiatives</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Academic Projects & Initiatives
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            Applying structured informatics, digital design, and public health communication to solve practical learning challenges in medical education.
          </p>
        </div>

        {/* Editorial Project Cards */}
        <div className="space-y-16">
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-charcoal-200 overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image side (alternating layout) */}
              <div
                className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-charcoal-900 ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-clinical-900 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal-900 leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <div className="space-y-3 pt-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-cream-50 border border-charcoal-200/80">
                      <strong className="text-charcoal-900 font-semibold uppercase tracking-wider text-[10px] block mb-1">
                        Primary Objective:
                      </strong>
                      <p className="text-charcoal-700">{project.objective}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-charcoal-200">
                      <strong className="text-charcoal-900 font-semibold uppercase tracking-wider text-[10px] block mb-1">
                        Methodological Approach:
                      </strong>
                      <p className="text-charcoal-700">{project.approach}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-clinical-50/70 border border-clinical-200">
                      <strong className="text-clinical-900 font-semibold uppercase tracking-wider text-[10px] block mb-1">
                        Demonstrated Outcome:
                      </strong>
                      <p className="text-clinical-950">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Skills & Tools footer */}
                <div className="pt-4 border-t border-charcoal-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((s, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-cream-200 text-charcoal-700 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-charcoal-500">
                    <Wrench className="w-3.5 h-3.5 text-clinical-600" />
                    <span>Tools & Tech: {project.tools.join(', ')}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
