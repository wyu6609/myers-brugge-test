import { create } from "zustand";
import { questions, personalityTypes, type PersonalityType } from "@/data/mbtiData";

export interface DimensionScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

interface QuizState {
  currentQuestion: number;
  answers: Record<number, 'A' | 'B'>;
  phase: 'welcome' | 'quiz' | 'results';
  result: PersonalityType | null;
  dimensionScores: DimensionScores | null;
  
  startQuiz: () => void;
  answerQuestion: (answer: 'A' | 'B') => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateResult: () => void;
  resetQuiz: () => void;
  finishQuiz: () => void;
}

export const useQuiz = create<QuizState>((set, get) => ({
  currentQuestion: 0,
  answers: {},
  phase: 'welcome',
  result: null,
  dimensionScores: null,

  startQuiz: () => {
    set({ phase: 'quiz', currentQuestion: 0, answers: {}, result: null, dimensionScores: null });
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

  finishQuiz: () => {
    get().calculateResult();
  },

  calculateResult: () => {
    const { answers } = get();
    
    const scores: DimensionScores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer === 'A') {
        scores[question.aValue as keyof DimensionScores]++;
      } else if (answer === 'B') {
        scores[question.bValue as keyof DimensionScores]++;
      }
    });

    const type = 
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.S >= scores.N ? 'S' : 'N') +
      (scores.T >= scores.F ? 'T' : 'F') +
      (scores.J >= scores.P ? 'J' : 'P');

    const result = personalityTypes[type];
    set({ result, phase: 'results', dimensionScores: scores });
  },

  resetQuiz: () => {
    set({
      currentQuestion: 0,
      answers: {},
      phase: 'welcome',
      result: null,
      dimensionScores: null
    });
  }
}));
