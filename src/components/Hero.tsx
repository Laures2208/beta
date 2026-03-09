import React from 'react';
import { motion } from 'motion/react';
import { Formula } from './Formula';
import { Content } from '../types';
import { Atom, Zap, Flame } from 'lucide-react';

interface HeroProps {
  content: Content['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden tech-grid">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-8 glow-border">
            <Atom size={16} className="animate-spin-slow" />
            {content.subtitle}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            {content.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-emerald-400 glow-text" : "text-white"}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <div className="flex justify-center mb-10">
            <div className="glass-card px-8 py-4 border-emerald-500/30">
              <Formula content={content.formula} className="text-3xl md:text-4xl font-mono text-emerald-400" />
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-12">
            {content.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 text-white/40">
              <Flame size={20} className="text-orange-500" />
              <span className="text-sm font-mono uppercase tracking-widest">Pyrometallurgy</span>
            </div>
            <div className="flex items-center gap-3 text-white/40">
              <Zap size={20} className="text-yellow-400" />
              <span className="text-sm font-mono uppercase tracking-widest">Electrolysis</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-emerald-500 rounded-full" />
      </motion.div>
    </section>
  );
};
