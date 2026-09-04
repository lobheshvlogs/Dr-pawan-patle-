import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articlesList } from '../data/portfolioData';
import { ReadingProgressBar } from '../components/common/ReadingProgressBar';
import { SEO } from '../components/common/SEO';
import {
  Clock,
  Calendar,
  User,
  Share2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  ArrowLeft,
  BookOpen,
  MessageSquareQuote
} from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const articleIndex = articlesList.findIndex((a) => a.slug === slug);
  const article = articlesList[articleIndex];

  if (!article) {
    return (
      <div className="pt-36 pb-24 text-center max-w-xl mx-auto px-4">
        <h2 className="font-editorial text-3xl font-medium text-charcoal-900">Article Not Found</h2>
        <p className="mt-3 text-sm text-charcoal-600">
          The requested essay or note could not be located in our student publication index.
        </p>
        <Link
          to="/articles"
          className="mt-6 inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-clinical-700 text-white text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Articles</span>
        </Link>
      </div>
    );
  }

  const prevArticle = articleIndex > 0 ? articlesList[articleIndex - 1] : null;
  const nextArticle = articleIndex < articlesList.length - 1 ? articlesList[articleIndex + 1] : null;
  const relatedArticles = articlesList.filter((a) => a.id !== article.id).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-24">
      {/* Sticky dynamic reading progress bar */}
      <ReadingProgressBar />

      <SEO
        title={article.title}
        description={article.excerpt}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            to="/articles"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-charcoal-500 hover:text-clinical-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 pb-8 border-b border-charcoal-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-clinical-50 text-clinical-800 border border-clinical-200">
              {article.category}
            </span>
            <span className="text-xs text-charcoal-500 font-medium flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-charcoal-400" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-5xl font-medium text-charcoal-900 leading-tight">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-lg sm:text-xl text-charcoal-600 font-normal leading-relaxed italic">
              {article.subtitle}
            </p>
          )}

          {/* Author & Share metadata bar */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-charcoal-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-clinical-100 text-clinical-800 flex items-center justify-center font-bold text-sm">
                PK
              </div>
              <div>
                <span className="font-medium text-charcoal-900 text-sm block">
                  {article.author}
                </span>
                <span className="text-xs text-charcoal-500 block">
                  2nd-Year BAMS • Published {article.date}
                </span>
              </div>
            </div>

            {/* Share Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-white border border-charcoal-200 hover:bg-cream-200 text-xs font-medium text-charcoal-700 transition-colors shadow-subtle"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-charcoal-500" />}
                <span>{copied ? 'Link Copied' : 'Share Article'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="my-10 rounded-2xl overflow-hidden shadow-card border border-charcoal-200 aspect-[16/9] bg-charcoal-900">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Table of Contents (if available) */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="my-8 p-6 rounded-xl bg-white border border-charcoal-200 shadow-subtle space-y-3">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-clinical-800">
              <BookOpen className="w-4 h-4" />
              <span>Section Overview</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal-700">
              {article.tableOfContents.map((toc) => (
                <li key={toc.id} className="hover:text-clinical-800 transition-colors">
                  <a href={`#${toc.id}`} className="block py-0.5">
                    {toc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none text-charcoal-800 font-normal space-y-6 text-base sm:text-lg leading-[1.8]">
          {article.content.map((paragraph, index) => {
            // Check if paragraph is a callout or quote
            if (index === 2) {
              return (
                <div key={index} className="space-y-6">
                  <p>{paragraph}</p>
                  <div className="p-6 sm:p-8 my-8 rounded-2xl bg-cream-100 border-l-4 border-clinical-700 space-y-2">
                    <MessageSquareQuote className="w-8 h-8 text-clinical-700/60" />
                    <p className="font-editorial text-xl sm:text-2xl text-charcoal-900 italic font-medium leading-relaxed">
                      "In clinical medicine, we can never rush the patient's story any more than we can rush the focus knob of a microscope."
                    </p>
                    <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 block">
                      — Dr. Pawan Patle (Clinical Observation Notes)
                    </span>
                  </div>
                </div>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-charcoal-200 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 mr-2">
            Keywords:
          </span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-white border border-charcoal-200 text-xs text-charcoal-700 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Academic Student Disclaimer */}
        <div className="my-10 p-5 rounded-xl bg-white border border-charcoal-200/80 shadow-subtle text-xs text-charcoal-600 leading-relaxed">
          <strong className="text-charcoal-800">Academic Disclaimer:</strong> This essay reflects the student reflections and literature study of a 2nd-year BAMS undergraduate. It is published for peer discussion, academic enrichment, and educational portfolio purposes. It does not provide medical advice.
        </div>

        {/* Previous / Next Article Navigation */}
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              to={`/articles/${prevArticle.slug}`}
              className="p-5 rounded-xl bg-white border border-charcoal-200 hover:border-clinical-600/50 shadow-subtle transition-all text-left space-y-1 group"
            >
              <span className="text-[10px] uppercase tracking-widest font-semibold text-charcoal-400 flex items-center space-x-1">
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Note</span>
              </span>
              <h4 className="font-editorial text-base font-medium text-charcoal-900 group-hover:text-clinical-800 line-clamp-1">
                {prevArticle.title}
              </h4>
            </Link>
          ) : (
            <div></div>
          )}

          {nextArticle && (
            <Link
              to={`/articles/${nextArticle.slug}`}
              className="p-5 rounded-xl bg-white border border-charcoal-200 hover:border-clinical-600/50 shadow-subtle transition-all text-right space-y-1 group"
            >
              <span className="text-[10px] uppercase tracking-widest font-semibold text-charcoal-400 flex items-center justify-end space-x-1">
                <span>Next Note</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <h4 className="font-editorial text-base font-medium text-charcoal-900 group-hover:text-clinical-800 line-clamp-1">
                {nextArticle.title}
              </h4>
            </Link>
          )}
        </div>

        {/* Related Articles Showcase */}
        <div className="pt-12 border-t border-charcoal-200">
          <h3 className="font-editorial text-2xl font-medium text-charcoal-900 mb-6">
            Related Academic Notes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/articles/${rel.slug}`}
                className="p-6 rounded-xl bg-white border border-charcoal-200 shadow-subtle hover:shadow-card transition-all space-y-2 group"
              >
                <span className="text-[10px] uppercase tracking-wider font-semibold text-clinical-700">
                  {rel.category}
                </span>
                <h4 className="font-editorial text-lg font-medium text-charcoal-900 group-hover:text-clinical-800 transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-charcoal-500 line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
};
