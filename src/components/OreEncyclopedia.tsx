import React from 'react';
import { motion } from 'motion/react';
import { Formula } from './Formula';
import { Content } from '../types';
import { Database } from 'lucide-react';

interface OreEncyclopediaProps {
  content: Content['ores'];
}

export const OreEncyclopedia: React.FC<OreEncyclopediaProps> = ({ content }) => {
  return (
    <section className="py-24 px-6 container mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Database className="text-emerald-400" size={32} />
        <h2 className="text-4xl font-bold glow-text">{content.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.items.map((ore, i) => (
          <motion.div
            key={ore.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`glass-card group hover:border-emerald-500/50 transition-all relative overflow-hidden flex flex-col`}
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={ore.image} 
                alt={ore.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${ore.color} opacity-40 group-hover:opacity-20 transition-opacity`} />
            </div>

            <div className="p-6 relative z-10 flex-1">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{ore.name}</h3>
              <div className="mb-4 bg-black/40 inline-block px-3 py-1 rounded border border-white/10">
                <Formula content={ore.formula} className="text-emerald-400/80 font-mono" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {ore.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
