import React from 'react';
import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

export interface MenuItemInterface {
  icon?: JSX.Element;
  title: string;
  to?: string;
  children?: MenuItemInterface;
  separate?: boolean;
}

interface Props {
  data: MenuItemInterface;
  onClick: () => void;
}

const MenuItem: React.FC<Props> = ({ data, onClick }) => {
  const classes = cx('menu-item', { separate: data.separate });
  return (
    <Button
      classNames={classes}
      variants="text"
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
