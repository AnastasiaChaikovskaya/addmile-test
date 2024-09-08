'use client';

import { Button } from '@/components/button/Button';
import styles from '@/modules/FinishPage/FinishPage.module.scss';
import hand from '@/assets/elements/hand.svg';
import Image from 'next/image';
import React, { useEffect } from 'react';
import money from '../../../public/data/money.json';
import { useGameStore } from '@/store/GameStore';

const FinishPage = () => {
  const { earned, setFinish, setStart, resetQuestionNumber, questionNumber, setEarned } = useGameStore(
    (state) => state,
  );

  useEffect(() => {
    if (questionNumber > 1) {
      setEarned(money[questionNumber - 2].amount);
    }
  }, [questionNumber]);

  const handleTryAgain = () => {
    setFinish(false);
    setStart(true);
    resetQuestionNumber();
    setEarned('0');
  };

  return (
    <div className={styles.main}>
      <div className={styles['main__content']}>
        <Image src={hand} alt="hand" className={styles['main__img']} />
        <div className={styles['main__info']}>
          <div className={styles['main__earned']}>
            <h2 className={styles['main__total-score']}>Total score:</h2>
            <h1 className={styles['main__heading']}>{`$${earned} earned`}</h1>
          </div>
          <Button onClick={handleTryAgain}>Try Again</Button>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
