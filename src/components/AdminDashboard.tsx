import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Content } from '../types';
import { Plus, Trash2, Edit2, Save, X, Settings } from 'lucide-react';

interface AdminDashboardProps {
  content: Content['admin'];
  questions: Content['test']['questions'];
  onUpdateQuestions: (newQuestions: Content['test']['questions']) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ content, questions, onUpdateQuestions }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Content['test']['questions'][0]>({
    question: '',
    options: ['', '', '', ''],
    answer: 0
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditForm({ ...questions[index] });
    setIsAdding(false);
  };

  const handleAdd = () => {
    setEditForm({
      question: '',
      options: ['', '', '', ''],
      answer: 0
    });
    setIsAdding(true);
    setEditingIndex(null);
  };

  const handleSave = () => {
    let newQuestions = [...questions];
    if (isAdding) {
      newQuestions.push(editForm);
    } else if (editingIndex !== null) {
      newQuestions[editingIndex] = editForm;
    }
    onUpdateQuestions(newQuestions);
    setEditingIndex(null);
    setIsAdding(false);
  };

  const handleDelete = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    onUpdateQuestions(newQuestions);
  };

  const handleOptionChange = (optIndex: number, value: string) => {
    const newOptions = [...editForm.options];
    newOptions[optIndex] = value;
    setEditForm({ ...editForm, options: newOptions });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <Settings className="text-emerald-400" size={32} />
          <h2 className="text-4xl font-bold glow-text">{content.title}</h2>
        </div>
        <button
          onClick={handleAdd}
          className="bg-emerald-500 text-black px-6 py-2 rounded-full font-bold hover:bg-emerald-400 transition-all flex items-center gap-2"
        >
          <Plus size={20} />
          {content.addQuestion}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {(editingIndex !== null || isAdding) ? (
          <motion.div
            key="edit-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card p-8 mb-12 border-emerald-500/30"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-emerald-400/60 mb-2 uppercase tracking-widest">
                  {content.questionLabel}
                </label>
                <input
                  type="text"
                  value={editForm.question}
                  onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-emerald-400/60 mb-2 uppercase tracking-widest">
                  {content.optionsLabel}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editForm.options.map((opt, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-white/40 font-mono">{i + 1}.</span>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleOptionChange(i, e.target.value)}
                        className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-emerald-400/60 mb-2 uppercase tracking-widest">
                  {content.correctAnswerLabel}
                </label>
                <select
                  value={editForm.answer}
                  onChange={(e) => setEditForm({ ...editForm, answer: parseInt(e.target.value) })}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 focus:border-emerald-500 outline-none transition-all"
                >
                  {editForm.options.map((_, i) => (
                    <option key={i} value={i}>Option {i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  onClick={() => { setEditingIndex(null); setIsAdding(false); }}
                  className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  <X size={18} />
                  {content.cancel}
                </button>
                <button
                  onClick={handleSave}
                  className="bg-emerald-500 text-black px-8 py-2 rounded-full font-bold hover:bg-emerald-400 transition-all flex items-center gap-2"
                >
                  <Save size={18} />
                  {content.save}
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="space-y-4">
        {questions.length === 0 ? (
          <p className="text-center text-white/40 py-12">{content.noQuestions}</p>
        ) : (
          questions.map((q, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-6 flex items-center justify-between group hover:border-white/20 transition-all"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">{q.question}</h3>
                <div className="flex flex-wrap gap-4">
                  {q.options.map((opt, optIdx) => (
                    <span
                      key={optIdx}
                      className={`text-xs font-mono px-2 py-1 rounded ${
                        optIdx === q.answer ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-white/40'
                      }`}
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEdit(i)}
                  className="p-2 rounded-full hover:bg-white/10 text-emerald-400 transition-all"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="p-2 rounded-full hover:bg-white/10 text-red-400 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};
