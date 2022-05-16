import React, { ReactNode } from 'react';
import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={cx('wrapper')}>{children}</div>;
};

export default Wrapper;
