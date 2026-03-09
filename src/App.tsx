import React, { useState, useEffect } from 'react';
import { Language, Content } from './types';
import { TRANSLATIONS } from './constants';
import { Hero } from './components/Hero';
import { OreEncyclopedia } from './components/OreEncyclopedia';
import { ExtractionMethods } from './components/ExtractionMethods';
import { RecyclingRoadmap } from './components/RecyclingRoadmap';
import { PracticeGame } from './components/PracticeGame';
import { TestSection } from './components/TestSection';
import { AdminDashboard } from './components/AdminDashboard';
import { AIChatbot } from './components/AIChatbot';
import { LanguageToggle } from './components/LanguageToggle';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BookOpen, Lock, ShieldCheck } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [mode, setMode] = useState<'learn' | 'test' | 'admin'>('learn');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  
  // Dynamic questions state
  const [questions, setQuestions] = useState<Record<Language, Content['test']['questions']>>({
    vi: TRANSLATIONS.vi.test.questions,
    en: TRANSLATIONS.en.test.questions
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('metallurgy_questions');
    if (saved) {
      try {
        setQuestions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved questions', e);
      }
    }
  }, []);

  // Save to localStorage when questions change
  useEffect(() => {
    localStorage.setItem('metallurgy_questions', JSON.stringify(questions));
  }, [questions]);

  const content = TRANSLATIONS[lang];
  
  // Override content questions with dynamic ones
  const dynamicContent = {
    ...content,
    test: {
      ...content.test,
      questions: questions[lang]
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === 'vi' ? 'en' : 'vi');
  };

  const handleAdminAuth = () => {
    const password = prompt(lang === 'vi' ? 'Nhập mật khẩu Admin (admin123):' : 'Enter Admin Password (admin123):');
    if (password === 'admin123') {
      setIsAdminAuthenticated(true);
      setMode('admin');
    } else {
      alert(lang === 'vi' ? 'Sai mật khẩu!' : 'Incorrect password!');
    }
  };

  const updateQuestions = (newQuestions: Content['test']['questions']) => {
    setQuestions(prev => ({
      ...prev,
      [lang]: newQuestions
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500 selection:text-black">
      <LanguageToggle current={lang} onToggle={toggleLang} />
      
      {/* Mode Switcher */}
      <div className="fixed top-6 left-6 z-50 flex gap-2">
        <button
          onClick={() => setMode('learn')}
          className={`glass-card px-4 py-2 flex items-center gap-2 transition-all ${
            mode === 'learn' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'hover:border-white/30'
          }`}
        >
          <BookOpen size={18} />
          <span className="font-mono text-xs font-bold uppercase tracking-widest hidden md:inline">Learn</span>
        </button>
        <button
          onClick={() => setMode('test')}
          className={`glass-card px-4 py-2 flex items-center gap-2 transition-all ${
            mode === 'test' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'hover:border-white/30'
          }`}
        >
          <GraduationCap size={18} />
          <span className="font-mono text-xs font-bold uppercase tracking-widest hidden md:inline">Test</span>
        </button>
        <button
          onClick={isAdminAuthenticated ? () => setMode('admin') : handleAdminAuth}
          className={`glass-card px-4 py-2 flex items-center gap-2 transition-all ${
            mode === 'admin' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'hover:border-white/30'
          }`}
        >
          {isAdminAuthenticated ? <ShieldCheck size={18} /> : <Lock size={18} />}
          <span className="font-mono text-xs font-bold uppercase tracking-widest hidden md:inline">Admin</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'learn' ? (
          <motion.div
            key="learn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero content={dynamicContent.hero} />
            <OreEncyclopedia content={dynamicContent.ores} />
            <ExtractionMethods content={dynamicContent.methods} />
            <RecyclingRoadmap content={dynamicContent.recycling} />
            <div className="bg-emerald-500/5 py-24">
              <PracticeGame content={dynamicContent.practice} />
            </div>
            
            <footer className="py-12 px-6 border-t border-white/5 text-center text-white/20 font-mono text-xs uppercase tracking-[0.2em]">
              Metallurgy Academy &copy; 2026 • High-Tech Lab Environment
            </footer>
          </motion.div>
        ) : mode === 'test' ? (
          <motion.div
            key="test"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24"
          >
            <TestSection content={dynamicContent.test} />
          </motion.div>
        ) : (
          <motion.div
            key="admin"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="pt-24"
          >
            <AdminDashboard 
              content={dynamicContent.admin} 
              questions={questions[lang]} 
              onUpdateQuestions={updateQuestions} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AIChatbot content={dynamicContent.chat} />
    </div>
  );
}
