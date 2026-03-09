import React from 'react';
import { motion } from 'motion/react';
import { Content } from '../types';
import { Recycle, ArrowRight } from 'lucide-react';

interface RecyclingRoadmapProps {
  content: Content['recycling'];
}

export const RecyclingRoadmap: React.FC<RecyclingRoadmapProps> = ({ content }) => {
  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <Recycle className="text-emerald-400" size={32} />
        <h2 className="text-4xl font-bold glow-text">{content.title}</h2>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500/10 -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {content.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="glass-card p-6 text-center h-full hover:border-emerald-500/40 transition-all group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <span className="font-mono font-bold">{i + 1}</span>
                </div>
                <h3 className="font-bold mb-2 text-emerald-400">{step.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
              </div>
              
              {i < content.steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden lg:block text-emerald-500/30">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
