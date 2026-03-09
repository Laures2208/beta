import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, RotateCcw, CheckCircle2, XCircle, GripVertical } from 'lucide-react';
import { Content } from '../types';
import { DndContext, useDraggable, useDroppable, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface PracticeGameProps {
  content: Content['practice'];
}

const METALS = [
  { id: 'Na', name: 'Sodium (Na)', method: 'Electrometallurgy' },
  { id: 'Fe', name: 'Iron (Fe)', method: 'Pyrometallurgy' },
  { id: 'Cu', name: 'Copper (Cu)', method: 'Hydrometallurgy' },
  { id: 'Al', name: 'Aluminum (Al)', method: 'Electrometallurgy' },
  { id: 'Zn', name: 'Zinc (Zn)', method: 'Pyrometallurgy' },
  { id: 'Ag', name: 'Silver (Ag)', method: 'Hydrometallurgy' },
];

const METHODS = ['Pyrometallurgy', 'Hydrometallurgy', 'Electrometallurgy'];

interface DraggableProps {
  id: string;
  name: string;
  isAssigned: boolean;
}

const DraggableMetal: React.FC<DraggableProps> = ({ id, name, isAssigned }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 100 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg cursor-grab active:cursor-grabbing transition-colors
        ${isAssigned 
          ? 'bg-emerald-500 text-black font-bold text-sm' 
          : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
        }
        ${isDragging ? 'opacity-50 scale-105 shadow-xl ring-2 ring-emerald-400' : 'opacity-100'}
      `}
    >
      <GripVertical size={14} className={isAssigned ? 'text-black/50' : 'text-white/30'} />
      {name}
    </div>
  );
};

interface DroppableProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const DroppableMethod: React.FC<DroppableProps> = ({ id, title, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        glass-card p-6 border-2 min-h-[220px] flex flex-col transition-all
        ${isOver ? 'border-emerald-500 bg-emerald-500/10 scale-[1.02]' : 'border-dashed border-white/10'}
      `}
    >
      <h3 className={`text-lg font-semibold mb-4 text-center transition-colors ${isOver ? 'text-emerald-400' : 'text-emerald-400/80'}`}>
        {title}
      </h3>
      <div className="flex-1 flex flex-wrap gap-2 content-start">
        {children}
      </div>
    </div>
  );
};

export const PracticeGame: React.FC<PracticeGameProps> = ({ content }) => {
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id) {
      const metalId = active.id as string;
      const methodId = over.id as string;
      
      setAssignments(prev => ({ ...prev, [metalId]: methodId }));
      setResult(null);
    }
  };

  const checkResults = () => {
    const isAllCorrect = METALS.every(m => assignments[m.id] === m.method);
    setResult(isAllCorrect ? 'correct' : 'incorrect');
  };

  const reset = () => {
    setAssignments({});
    setResult(null);
  };

  const unassign = (metalId: string) => {
    setAssignments(prev => {
      const next = { ...prev };
      delete next[metalId];
      return next;
    });
    setResult(null);
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 glow-text text-emerald-400">{content.title}</h2>
        <p className="text-white/60">{content.instruction}</p>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {METHODS.map(method => (
            <DroppableMethod key={method} id={method} title={method}>
              {METALS.filter(m => assignments[m.id] === method).map(m => (
                <div key={m.id} className="relative group" onClick={() => unassign(m.id)}>
                  <DraggableMetal id={m.id} name={m.name} isAssigned={true} />
                </div>
              ))}
            </DroppableMethod>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 min-h-[60px] p-4 bg-black/20 rounded-2xl border border-white/5">
          {METALS.filter(m => !assignments[m.id]).map(m => (
            <DraggableMetal key={m.id} id={m.id} name={m.name} isAssigned={false} />
          ))}
        </div>
      </DndContext>

      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <button
            onClick={checkResults}
            className="bg-emerald-500 text-black px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-all flex items-center gap-2 glow-border"
          >
            <Trophy size={20} />
            {content.check}
          </button>
          <button
            onClick={reset}
            className="bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <RotateCcw size={20} />
            {content.reset}
          </button>
        </div>

        <AnimatePresence>
          {result === 'correct' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-emerald-400 font-bold text-xl"
            >
              <CheckCircle2 /> {content.correct}
            </motion.div>
          )}
          {result === 'incorrect' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-red-400 font-bold text-xl"
            >
              <XCircle /> {content.incorrect}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
