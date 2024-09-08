import React from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  size?: 'default';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        className={clsx(styles.btn, styles[`btn--${variant}`], styles[`btn--${size}`], className)}
        {...props}
        ref={ref}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
