export interface IAnswers {
  label: string;
  text: string;
  correct: boolean;
}

export interface IQuestion {
  id: string;
  question: string;
  answers: IAnswers[];
}
