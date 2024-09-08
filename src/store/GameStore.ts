import { IMoney } from '@/types/money';
import { IQuestion } from '@/types/question';
import { create } from 'zustand';

interface IGameState {
  isStarted: boolean;
  isFinished: boolean;
  questionNumber: number;
  earned: string;
  currentQuestion: IQuestion | null;
  setStart: (isStart: boolean) => void;
  setFinish: (isFinish: boolean) => void;
  setQuestionNumber: () => void;
  setCurrentQuestion: (question: IQuestion) => void;
  setEarned: (money: string) => void;
  resetQuestionNumber: () => void;
}

const initState = {
  isStarted: false,
  isFinished: false,
  questionNumber: 1,
  earned: '0',
  currentQuestion: null,
};

export const useGameStore = create<IGameState>()((set) => ({
  ...initState,
  setStart: (isStart) => set((state) => ({ ...state, isStarted: isStart })),
  setFinish: (isFinish) => set((state) => ({ ...state, isFinished: isFinish })),
  setQuestionNumber: () => set((state) => ({ ...state, questionNumber: state.questionNumber + 1 })),
  setCurrentQuestion: (question) => set((state) => ({ ...state, currentQuestion: question })),
  setEarned: (money) => set((state) => ({ ...state, earned: money })),
  resetQuestionNumber: () => set((state) => ({ ...state, questionNumber: 1 })),
}));
