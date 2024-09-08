import React, { FC } from 'react';
import Image from 'next/image';

import MoneyStep from '@/components/step/MoneyStep';
import styles from '@/modules/MobileAside/MobileAside.module.scss';
import CloseIcon from '@/assets/icons/close-icon.svg';
import { useGameStore } from '@/store/GameStore';

import money from '../../../public/data/money.json';

interface IMobileAside {
  isOpenMenu: boolean;
  setIsOpenMenu: () => void;
}

const MobileAside: FC<IMobileAside> = ({ isOpenMenu, setIsOpenMenu }) => {
  const questionNumber = useGameStore((state) => state.questionNumber);
  return (
    <div
      className={styles.menu}
      style={isOpenMenu ? { transform: 'translateX(0)', opacity: 1, pointerEvents: 'all' } : undefined}
    >
      <header className={styles['menu__header']}>
        <Image src={CloseIcon} alt="close icon" width={16} height={16} onClick={setIsOpenMenu} />
      </header>
      <div className={styles.steps}>
        {money.map((item) => (
          <MoneyStep
            key={item.id}
            money={item}
            active={questionNumber === +item.id}
            disable={+item.id < questionNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileAside;
