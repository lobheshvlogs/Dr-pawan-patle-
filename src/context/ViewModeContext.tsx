import React, { createContext, useContext, useState, useEffect } from 'react';

export type ViewMode = 'portfolio' | 'fullbody';

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    // Check URL query param or fallback to portfolio
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    return modeParam === 'fullbody' ? 'fullbody' : 'portfolio';
  });

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    const url = new URL(window.location.href);
    if (mode === 'fullbody') {
      url.searchParams.set('mode', 'fullbody');
    } else {
      url.searchParams.delete('mode');
    }
    window.history.replaceState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'portfolio' ? 'fullbody' : 'portfolio');
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode, toggleViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = (): ViewModeContextType => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};
