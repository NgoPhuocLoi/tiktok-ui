import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  to: string;
  icon: ReactNode;
}

const MenuItem = ({ title, to, icon }: Props) => {
  return (
    <NavLink
      className={(nav) => cx('menu-item', { active: nav.isActive })}
      to={to}
    >
      {icon}
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
};

export default MenuItem;
