export type Language = 'vi' | 'en';

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    formula: string;
    description: string;
  };
  ores: {
    title: string;
    items: {
      name: string;
      formula: string;
      description: string;
      color: string;
      image: string;
    }[];
  };
  methods: {
    title: string;
    items: {
      name: string;
      description: string;
      metals: string[];
      reaction: string;
    }[];
  };
  recycling: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  practice: {
    title: string;
    instruction: string;
    check: string;
    reset: string;
    correct: string;
    incorrect: string;
  };
  test: {
    title: string;
    start: string;
    next: string;
    finish: string;
    score: string;
    questions: {
      question: string;
      options: string[];
      answer: number;
    }[];
  };
  admin: {
    title: string;
    addQuestion: string;
    editQuestion: string;
    deleteQuestion: string;
    save: string;
    cancel: string;
    questionLabel: string;
    optionsLabel: string;
    correctAnswerLabel: string;
    noQuestions: string;
  };
  chat: {
    title: string;
    placeholder: string;
    send: string;
    systemPrompt: string;
  };
}
