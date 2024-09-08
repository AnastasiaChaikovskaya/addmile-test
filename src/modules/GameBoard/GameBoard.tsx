'use client';

import React, { useState } from 'react';

import styles from '@/modules/GameBoard/GameBoard.module.scss';
import { IAnswers } from '@/types/question';
import { SelectButton, SelectLabel, SelectText } from '@/components/select-button/SelectButton';
import { delay } from '@/helpers/delay';
import { useGameStore } from '@/store/GameStore';

import selectButtonStyles from '../../components/select-button/SelectButton.module.scss';

const GameBoard = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswers | null>(null);
  const [className, setClassName] = useState('');
  const { setQuestionNumber, setFinish, currentQuestion } = useGameStore((state) => state);

  const handleSelectAnswer = (answer: IAnswers) => {
    setClassName('select-selected');
    setSelectedAnswer(answer);

    delay(2000, () => {
      setClassName(answer.correct ? 'select-correct' : 'select-wrong');
    });

    delay(4000, () => {
      {
        answer.correct ? setQuestionNumber() : setFinish(true);
        setSelectedAnswer(null);
      }
    });
  };

  if (currentQuestion) {
    return (
      <div className={styles.board}>
        <h2 className={styles['board__question']}>{currentQuestion.question}</h2>
        <div className={styles['board__answers']}>
          {currentQuestion.answers.map((answer) => (
            <SelectButton
              key={answer.label}
              onClick={() => handleSelectAnswer(answer)}
              className={selectedAnswer?.text === answer.text ? selectButtonStyles[className] : undefined}
            >
              <SelectLabel>{answer.label}</SelectLabel>
              <SelectText>{answer.text}</SelectText>
            </SelectButton>
          ))}
        </div>
      </div>
    );
  }
};

export default GameBoard;
