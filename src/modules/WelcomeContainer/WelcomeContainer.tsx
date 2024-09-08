'use client';

import React, { FC } from 'react';
import hand from '@/assets/elements/hand.svg';
import rectangle from '@/assets/elements/rectangle-mobl.jpg';
import { Button } from '@/components/button/Button';
import Image from 'next/image';
import styles from '@/modules/WelcomeContainer/WelcomeContainer.module.scss';
import { useGameStore } from '@/store/GameStore';

const WelcomeContainer = () => {
  const { setStart } = useGameStore((state) => state);

  const handleStartGame = () => {
    setStart(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles['main__content']}>
        <Image src={hand} alt="hand" className={styles['main__img']} />
        <div className={styles['main__info']}>
          <h1 className={styles['main__heading']}>Who wants to be a millionaire?</h1>
          <Button onClick={handleStartGame}>Start</Button>
        </div>
      </div>
      <Image src={rectangle} alt="rectangle" fill className="rectangle" />
    </div>
  );
};

export default WelcomeContainer;
