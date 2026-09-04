import React, { useState } from 'react';
import { researchList, portfolioProfile } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { ResearchItem } from '../types';
import {
  Microscope,
  FileText,
  Search,
  BookOpen,
  Filter,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Calendar,
  UserCheck,
  Tag
} from 'lucide-react';

export const ResearchPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Clinical Case Observation', 'Systematic Literature Review', 'Comparative Pathology', 'Health Systems & Protocols'];

  const filteredResearch = researchList.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Research & Exploration"
        description="Academic research, preclinical reviews, and observational studies authored by Dr. Pawan Patle (BAMS Student)."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Academic Publication Hub</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Research & Exploration
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            Student working papers, systematic literature analyses, and observational clinical records investigating therapeutics, cellular pathology, and primary healthcare delivery.
          </p>
        </div>

        {/* Academic Transparency Alert */}
        <div className="mb-10 p-4 rounded-xl bg-white border border-charcoal-200/80 shadow-subtle flex items-start space-x-3 text-xs text-charcoal-600">
          <ShieldCheck className="w-5 h-5 text-clinical-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-charcoal-900 block mb-0.5">
              Academic Student Authorship Notice
            </span>
            These projects represent student working papers, symposium presentations, and literature syntheses carried out under medical faculty mentorship. They do not constitute conclusive clinical trials or medical directives.
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-charcoal-200">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
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

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search papers, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-charcoal-200 text-xs text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-clinical-600 focus:border-transparent placeholder:text-charcoal-400"
            />
          </div>
        </div>

        {/* Research Papers List */}
        <div className="space-y-10">
          {filteredResearch.map((paper, idx) => (
            <article
              key={paper.id}
              className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 ${
                paper.featured
                  ? 'bg-white border-charcoal-300/80 shadow-card'
                  : 'bg-white border-charcoal-200 shadow-subtle'
              }`}
            >
              <div className="space-y-6">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2.5">
                    <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-clinical-50 text-clinical-800 border border-clinical-200">
                      {paper.category}
                    </span>
                    <span className="text-xs text-charcoal-500 font-medium">
                      {paper.date}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      paper.status === 'Under Peer Review'
                        ? 'bg-amber-50 text-amber-900 border border-amber-200'
                        : paper.status === 'Symposium Presentation'
                        ? 'bg-blue-50 text-blue-900 border border-blue-200'
                        : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    }`}
                  >
                    {paper.status}
                  </span>
                </div>

                {/* Title & Authors */}
                <div className="space-y-2">
                  <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal-900 leading-tight">
                    {paper.title}
                  </h2>
                  <p className="text-xs text-charcoal-500 font-medium">
                    Investigators: <span className="text-charcoal-800 font-semibold">{paper.authorList}</span>
                    {paper.journalOrSymposium && (
                      <span> • Presented at: <span className="italic text-charcoal-700">{paper.journalOrSymposium}</span></span>
                    )}
                  </p>
                </div>

                {/* Abstract Section */}
                <div className="space-y-2 bg-cream-50/70 p-6 rounded-xl border border-charcoal-100">
                  <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 block">
                    Structured Abstract:
                  </span>
                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                {/* Methodology & Findings Dual Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-charcoal-200 space-y-1">
                    <span className="font-semibold text-charcoal-800 uppercase tracking-wider text-[10px] block">
                      Methodological Framework:
                    </span>
                    <p className="text-charcoal-600 leading-relaxed">
                      {paper.methodology}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-charcoal-200 space-y-1">
                    <span className="font-semibold text-clinical-800 uppercase tracking-wider text-[10px] block">
                      Key Academic Findings:
                    </span>
                    <p className="text-charcoal-600 leading-relaxed">
                      {paper.findingsBrief}
                    </p>
                  </div>
                </div>

                {/* Keywords & Action Footer */}
                <div className="pt-4 border-t border-charcoal-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-charcoal-400" />
                    {paper.keywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-[#FAF8F2] border border-charcoal-200 text-charcoal-700 font-mono"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:${portfolioProfile.email}?subject=Inquiry regarding paper: ${encodeURIComponent(paper.title)}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-clinical-700 hover:text-clinical-900 uppercase tracking-wider"
                  >
                    <span>Request Manuscript Draft</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </article>
          ))}

          {filteredResearch.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-charcoal-200 p-8">
              <Microscope className="w-10 h-10 text-charcoal-400 mx-auto mb-3" />
              <h3 className="font-editorial text-xl text-charcoal-800 font-medium">No research papers found</h3>
              <p className="text-xs text-charcoal-500 mt-1">Try resetting your filters or search keywords.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-md bg-clinical-700 text-white text-xs font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
