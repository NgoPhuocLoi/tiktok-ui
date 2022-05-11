import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
// Layout components
import { Header, Sidebar } from '../components';

interface Props {
  children: ReactNode;
}

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
