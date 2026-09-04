import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-navy-900/80 hover:bg-navy-900 text-softBlue-300 hover:text-white border border-softBlue-500/30 backdrop-blur-md shadow-glass-glow transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-softBlue-400 group"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
