'use client';

import React, { useState } from 'react';

import styles from '@/modules/GameBoard/GameBoard.module.scss';
import { IAnswers } from '@/types/question';
import { SelectButton, SelectLabel, SelectText } from '@/components/select-button/SelectButton';
import { useGameStore } from '@/store/useGameStore';
import { useLazyTimeout } from '@/hooks/useLazyTimeout';

const GameBoard = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isInCorrect, setIsInCorrect] = useState(false);
  const { setQuestionNumber, setFinish, currentQuestion } = useGameStore((state) => state);
  const { timeout } = useLazyTimeout(2000);
  const { timeout: nextQuestionTimeout } = useLazyTimeout(1000);

  const resetAnswers = () => {
    setSelectedAnswer('');
    setIsCorrect(false);
    setIsInCorrect(false);
  };

  const handleSelectAnswer = (answer: IAnswers) => {
    setSelectedAnswer(answer.text);

    timeout(() => {
      if (answer.correct) {
        setIsCorrect(true);
      } else setIsInCorrect(true);

      nextQuestionTimeout(() => {
        if (answer.correct) {
          setQuestionNumber();
          resetAnswers();
        } else setFinish(true);
      });
    });
  };

  if (currentQuestion) {
    return (
      <div className={styles.board}>
        <h2 className={styles['board__question']}>{currentQuestion.question}</h2>
        <div className={styles['board__answers']}>
          {currentQuestion.answers.map((answer) => {
            const isButtonSelected = selectedAnswer === answer.text;
            return (
              <SelectButton
                key={answer.label}
                onClick={() => handleSelectAnswer(answer)}
                isSelected={isButtonSelected}
                isCorrect={isButtonSelected && isCorrect}
                isInCorrect={isButtonSelected && isInCorrect}
              >
                <SelectLabel>{answer.label}</SelectLabel>
                <SelectText>{answer.text}</SelectText>
              </SelectButton>
            );
          })}
        </div>
      </div>
    );
  }
};

export default GameBoard;
