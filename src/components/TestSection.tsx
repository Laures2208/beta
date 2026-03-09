import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, BarChart3 } from 'lucide-react';
import { Content } from '../types';

interface TestSectionProps {
  content: Content['test'];
}

export const TestSection: React.FC<TestSectionProps> = ({ content }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const next = () => {
    if (currentQuestion < content.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const score = answers.reduce((acc, curr, idx) => {
    return acc + (curr === content.questions[idx].answer ? 1 : 0);
  }, 0);

  if (!started) {
    return (
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <div className="glass-card p-12 border-emerald-500/20">
          <BarChart3 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 glow-text text-emerald-400">{content.title}</h2>
          <p className="text-white/60 mb-10 text-lg">
            {content.questions.length} questions to test your metallurgy knowledge.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-emerald-500 text-black px-12 py-4 rounded-full font-bold text-xl hover:bg-emerald-400 transition-all glow-border"
          >
            {content.start}
          </button>
        </div>
      </section>
    );
  }

  if (showResult) {
    return (
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center border-emerald-500/30"
        >
          <TrophyIcon score={score} total={content.questions.length} />
          <h2 className="text-3xl font-bold mb-2">{content.score}</h2>
          <div className="text-6xl font-black text-emerald-400 mb-8">
            {score}/{content.questions.length}
          </div>
          
          <div className="space-y-4 mb-10 text-left">
            {content.questions.map((q, i) => (
              <div key={i} className={`p-4 rounded-lg border ${answers[i] === q.answer ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                <div className="flex items-start gap-3">
                  {answers[i] === q.answer ? <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" /> : <XCircle className="text-red-400 shrink-0 mt-1" />}
                  <div>
                    <p className="font-medium mb-1">{q.question}</p>
                    <p className="text-sm opacity-60">Correct: {q.options[q.answer]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={reset}
            className="bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2 mx-auto"
          >
            <RotateCcw size={20} />
            {content.finish}
          </button>
        </motion.div>
      </section>
    );
  }

  const q = content.questions[currentQuestion];

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Question {currentQuestion + 1} of {content.questions.length}</span>
          <div className="h-1 w-32 bg-white/10 mt-2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / content.questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-card p-8 md:p-12"
      >
        <h3 className="text-2xl font-bold mb-8 leading-tight">{q.question}</h3>
        <div className="space-y-4">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between group ${
                answers[currentQuestion] === i 
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                  : 'border-white/10 hover:border-white/30 bg-white/5'
              }`}
            >
              <span>{opt}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                answers[currentQuestion] === i ? 'border-emerald-500 bg-emerald-500' : 'border-white/20'
              }`}>
                {answers[currentQuestion] === i && <div className="w-2 h-2 bg-black rounded-full" />}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button
            disabled={answers[currentQuestion] === undefined}
            onClick={next}
            className="bg-emerald-500 text-black px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion === content.questions.length - 1 ? content.finish : content.next}
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const TrophyIcon = ({ score, total }: { score: number, total: number }) => {
  const percentage = (score / total) * 100;
  return (
    <div className="relative w-24 h-24 mx-auto mb-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12 }}
        className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
      />
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        {percentage >= 80 ? (
          <BarChart3 className="w-16 h-16 text-emerald-400" />
        ) : percentage >= 50 ? (
          <BarChart3 className="w-16 h-16 text-yellow-400" />
        ) : (
          <BarChart3 className="w-16 h-16 text-red-400" />
        )}
      </motion.div>
    </div>
  );
};
