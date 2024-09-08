import { clsx } from 'clsx';
import React, { ReactNode } from 'react';

import style from '@/components/select-button/SelectButton.module.scss';

interface ISelectLabel extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const SelectLabel = React.forwardRef<HTMLSpanElement, ISelectLabel>(({ className, children, ...props }, ref) => {
  return (
    <span ref={ref} className={clsx(style['select-label'], className)} {...props}>
      {children}
    </span>
  );
});

SelectLabel.displayName = 'SelectLabel';

interface ISelectText extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const SelectText = React.forwardRef<HTMLSpanElement, ISelectText>(({ className, children, ...props }, ref) => {
  return (
    <span ref={ref} className={clsx(style['select-text'], className)} {...props}>
      {children}
    </span>
  );
});

SelectText.displayName = 'SelectText';

interface ISelectButton extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  isSelected?: boolean;
  isCorrect?: boolean;
  isInCorrect?: boolean;
}

const SelectButton = React.forwardRef<HTMLDivElement, ISelectButton>(
  ({ children, className, isSelected, isCorrect, isInCorrect, ...props }, ref) => {
    return (
      <div
        className={clsx(
          style.select,
          {
            [style['select-correct']]: isCorrect,
            [style['select-selected']]: isSelected,
            [style['select-wrong']]: isInCorrect,
          },
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

SelectButton.displayName = 'SelectButton';

export { SelectButton, SelectLabel, SelectText };
