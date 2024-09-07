export interface IAnswers {
  text: string;
  correct: boolean;
}

export interface IQuestion {
  id: string;
  question: string;
  answers: IAnswers[];
}
