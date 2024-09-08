'use client';

import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import { IQuestion } from '@/types/question';
import styles from '@/modules/GameContainer/GameContainer.module.scss';
import MenuIcon from '@/assets/icons/menu-icon.svg';
import Image from 'next/image';
import MobileAside from '../MobileAside/MobileAside';
import money from '../../../public/data/money.json';
import MoneyStep from '@/components/step/MoneyStep';
import data from '../../../public/data/data.json';
import { useGameStore } from '@/store/GameStore';

const GameContainer = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { questionNumber, setCurrentQuestion, setFinish } = useGameStore((state) => state);

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  useEffect(() => {
    setCurrentQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

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
