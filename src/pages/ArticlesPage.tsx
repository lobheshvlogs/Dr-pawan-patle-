import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articlesList } from '../data/portfolioData';
import { SectionHeading } from '../components/common/SectionHeading';
import { SEO } from '../components/common/SEO';
import { Clock, ArrowRight, ArrowUpRight, Search, Tag } from 'lucide-react';

export const ArticlesPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const allTags = ['All', 'Clinical Pathology', 'Medical Education', 'Systems Biology', 'Community Health', 'Medical Ethics'];

  const filteredArticles = articlesList.filter((art) => {
    const matchesTag = selectedTag === 'All' || art.tags.includes(selectedTag);
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      art.category.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featured = filteredArticles[0];
  const regular = filteredArticles.slice(1);

  return (
    <div className="pt-28 pb-24">
      <SEO
        title="Notes, Ideas & Learning — Articles"
        description="Scholarly essays, clinical pathology reflections, and field notes by medical student Dr. Pawan Patle."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3">
            <span className="w-6 h-[1px] bg-clinical-600"></span>
            <span>Editorial Journal</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Notes, Ideas & Learning
          </h1>
          <p className="mt-4 text-lg text-charcoal-600">
            A student's ongoing laboratory reflections, bedside observations, medical history analyses, and thoughts on holistic healthcare delivery.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-charcoal-200">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  selectedTag === tag
                    ? 'bg-clinical-800 text-white'
                    : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-charcoal-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search essays by topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-charcoal-200 text-xs text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-clinical-600 placeholder:text-charcoal-400"
            />
          </div>
        </div>

        {/* Lead Editorial Article */}
        {featured && (
          <div className="mb-16">
            <article className="bg-white rounded-3xl border border-charcoal-200 overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12 group">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-charcoal-900">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-clinical-900 shadow-sm">
                    Lead Editorial • {featured.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-charcoal-500">
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featured.readTime}</span>
                    </span>
                  </div>

                  <Link to={`/articles/${featured.slug}`}>
                    <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-charcoal-900 group-hover:text-clinical-800 transition-colors leading-tight">
                      {featured.title}
                    </h2>
                  </Link>

                  {featured.subtitle && (
                    <p className="text-sm font-medium text-charcoal-700 italic">
                      {featured.subtitle}
                    </p>
                  )}

                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {featured.tags.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-cream-100 text-charcoal-700 font-medium">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/articles/${featured.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-clinical-800 hover:text-clinical-950"
                  >
                    <span>Read Essay</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regular.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-charcoal-200 overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-900">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-white/95 text-clinical-900">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-xs text-charcoal-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <Link to={`/articles/${article.slug}`}>
                    <h3 className="font-editorial text-xl font-medium text-charcoal-900 group-hover:text-clinical-800 transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between text-xs">
                  <span className="text-charcoal-400 font-medium">Dr. Pawan Patle</span>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="text-clinical-700 font-semibold inline-flex items-center space-x-1 hover:underline"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
