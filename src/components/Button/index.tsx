import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  variants: 'primary' | 'outline' | 'text' | 'rounded' | undefined;
  size?: 'large' | 'small' | undefined;
  disabled?: boolean;
  rounded?: boolean;
  classNames?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button = ({
  children,
  to,
  href,
  onClick,
  target,
  variants,
  size,
  disabled,
  classNames,
  leftIcon,
  rightIcon,
}: Props) => {
  let Comp = 'button' as unknown as typeof React.Component;

  const props: ButtonProps | string = { onClick, variants };

  // remove event listeners when btn is disabled
  if (disabled) {
    type T = keyof typeof props;
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key as T] === 'function') {
        delete props[key as T];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link as unknown as typeof React.Component;
  } else if (href) {
    props.href = href;
    props.target = target;
    Comp = 'a' as unknown as typeof React.Component;
  }

  const classes = cx('wrapper', variants, size, { disabled }, classNames);

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
