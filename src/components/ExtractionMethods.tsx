import React from 'react';
import { motion } from 'motion/react';
import { Formula } from './Formula';
import { Content } from '../types';
import { Layers, Thermometer, Droplets, Zap } from 'lucide-react';

interface ExtractionMethodsProps {
  content: Content['methods'];
}

const ICONS = [Thermometer, Droplets, Zap];

export const ExtractionMethods: React.FC<ExtractionMethodsProps> = ({ content }) => {
  return (
    <section className="py-24 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Layers className="text-emerald-400" size={32} />
          <h2 className="text-4xl font-bold glow-text text-center">{content.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.items.map((method, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 flex flex-col h-full border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Icon className="text-emerald-400" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{method.name}</h3>
                <p className="text-white/60 mb-6 flex-1">{method.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/60 block mb-2">Metals</span>
                    <div className="flex flex-wrap gap-2">
                      {method.metals.map(m => (
                        <span key={m} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/60 block mb-2">Reaction</span>
                    <Formula content={method.reaction} className="text-sm" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
