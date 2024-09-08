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

interface ISelectButton extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const SelectButton = React.forwardRef<HTMLDivElement, ISelectButton>(({ children, className, ...props }, ref) => {
  return (
    <div className={clsx(style.select, className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

export { SelectButton, SelectLabel, SelectText };
