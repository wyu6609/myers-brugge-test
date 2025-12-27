import { create } from "zustand";
import { questions, personalityTypes, type PersonalityType } from "@/data/mbtiData";

interface QuizState {
  currentQuestion: number;
  answers: Record<number, 'A' | 'B'>;
  phase: 'welcome' | 'quiz' | 'results';
  result: PersonalityType | null;
  
  startQuiz: () => void;
  answerQuestion: (answer: 'A' | 'B') => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateResult: () => void;
  resetQuiz: () => void;
}

export const useQuiz = create<QuizState>((set, get) => ({
  currentQuestion: 0,
  answers: {},
  phase: 'welcome',
  result: null,

  startQuiz: () => {
    set({ phase: 'quiz', currentQuestion: 0, answers: {}, result: null });
  },

  answerQuestion: (answer: 'A' | 'B') => {
    const { currentQuestion, answers } = get();
    set({
      answers: { ...answers, [currentQuestion]: answer }
    });
  },

  nextQuestion: () => {
    const { currentQuestion, answers } = get();
    const isLastQuestion = currentQuestion >= questions.length - 1;
    const hasCurrentAnswer = answers[currentQuestion] !== undefined;
    
    if (!isLastQuestion) {
      set({ currentQuestion: currentQuestion + 1 });
    } else if (hasCurrentAnswer) {
      get().calculateResult();
    }
  },

  previousQuestion: () => {
    const { currentQuestion } = get();
    if (currentQuestion > 0) {
      set({ currentQuestion: currentQuestion - 1 });
    }
  },

  calculateResult: () => {
    const { answers } = get();
    
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer === 'A') {
        scores[question.aValue as keyof typeof scores]++;
      } else if (answer === 'B') {
        scores[question.bValue as keyof typeof scores]++;
      }
    });

    const type = 
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.S >= scores.N ? 'S' : 'N') +
      (scores.T >= scores.F ? 'T' : 'F') +
      (scores.J >= scores.P ? 'J' : 'P');

    const result = personalityTypes[type];
    set({ result, phase: 'results' });
  },

  resetQuiz: () => {
    set({
      currentQuestion: 0,
      answers: {},
      phase: 'welcome',
      result: null
    });
  }
}));
