'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import styles from '@/modules/GameContainer/GameContainer.module.scss';
import MenuIcon from '@/assets/icons/menu-icon.svg';
import MoneyStep from '@/components/step/MoneyStep';
import { useGameStore } from '@/store/useGameStore';

import GameBoard from '../GameBoard/GameBoard';
import MobileAside from '../MobileAside/MobileAside';
import money from '../../../public/data/money.json';
import data from '../../../public/data/data.json';

const GameContainer = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { questionNumber, setCurrentQuestion, setFinish } = useGameStore((state) => state);

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  useEffect(() => {
    setCurrentQuestion(data[questionNumber - 1]);
  }, [questionNumber, setCurrentQuestion]);

  if (questionNumber > data.length) {
    setFinish(true);
  }

  return (
    <>
      <MobileAside isOpenMenu={isOpenMenu} setIsOpenMenu={handleOpenMenu} />
      <div className={styles['game']}>
        <header className={styles['header']}>
          <Image src={MenuIcon} alt="menu icon" width={16} height={16} onClick={handleOpenMenu} />
        </header>
        <GameBoard />
        <div className={styles['game__money']}>
          {money.map((item) => (
            <MoneyStep
              money={item}
              key={item.id}
              active={questionNumber === +item.id}
              disable={+item.id < questionNumber}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameContainer;
