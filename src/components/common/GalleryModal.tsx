import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Camera } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060B18]/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#0C1530] text-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[#38A4F6]/30 overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-[#080E21]">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#0E86D4]/20 border border-[#38A4F6]/30 font-semibold text-[#7CC4FA]">
              {item.category}
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Medical & Academic Gallery
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Frame */}
        <div className="relative aspect-[16/10] bg-[#060B18] flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Captions & Metadata */}
        <div className="p-6 bg-[#080E21] space-y-2 border-t border-white/10">
          <h3 className="font-editorial text-xl font-medium text-white leading-tight">
            {item.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-[#38A4F6]" />
              <span>{item.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#38A4F6]" />
              <span>{item.location}</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
