import clsx from 'clsx';
import React, { FC } from 'react';

import { IMoney } from '@/types/money';
import styles from '@/components/step/Step.module.scss';

interface IMoneyStep {
  money: IMoney;
  disable?: boolean;
  active?: boolean;
}

const MoneyStep: FC<IMoneyStep> = ({ money, disable = false, active = false }) => {
  return (
    <div
      className={clsx(styles['money-step'], {
        [styles['money-step-active']]: active,
      })}
    >
      <span
        className={clsx(styles['money-text'], {
          [styles['money-text-disable']]: disable,
          [styles['money-text-active']]: active,
        })}
      >
        {`$${money.amount}`}
      </span>
    </div>
  );
};

export default MoneyStep;
