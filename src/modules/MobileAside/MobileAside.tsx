import React, { FC } from 'react';
import styles from '@/modules/MobileAside/MobileAside.module.scss';
import money from '../../../public/data/money.json';
import MoneyStep from '@/components/step/MoneyStep';
import Image from 'next/image';
import CloseIcon from '@/assets/icons/close-icon.svg';

interface IMobileAside {
  isOpenMenu: boolean;
  setIsOpenMenu: () => void;
}

const MobileAside: FC<IMobileAside> = ({ isOpenMenu, setIsOpenMenu }) => {
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
          <MoneyStep key={item.id} money={item} />
        ))}
      </div>
    </div>
  );
};

export default MobileAside;
