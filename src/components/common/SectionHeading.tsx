import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  actionText,
  actionHref,
  centered = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-clinical-700 mb-3 ${centered ? 'justify-center' : ''}`}>
          <span className="w-6 h-[1px] bg-clinical-600"></span>
          <span>{eyebrow}</span>
          {centered && <span className="w-6 h-[1px] bg-clinical-600"></span>}
        </div>
      )}

      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${centered ? 'md:justify-center' : ''}`}>
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal-900 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {actionText && actionHref && !centered && (
          <div className="pt-2 md:pt-0 shrink-0">
            <Link
              to={actionHref}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-clinical-700 hover:text-clinical-900 pb-1 border-b border-clinical-600/40 hover:border-clinical-800 transition-all group"
            >
              <span>{actionText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
