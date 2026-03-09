import React from 'react';
import { Language } from '../types';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  current: Language;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ current, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 glass-card px-4 py-2 flex items-center gap-2 hover:border-emerald-500/50 transition-all group"
    >
      <Languages size={18} className="text-emerald-400 group-hover:rotate-12 transition-transform" />
      <span className="font-mono text-sm font-bold uppercase tracking-widest">
        {current === 'vi' ? 'English' : 'Tiếng Việt'}
      </span>
    </button>
  );
};
