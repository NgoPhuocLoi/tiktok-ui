import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React, { JSXElementConstructor, ReactElement, useState } from 'react';
import { Wrapper as PopperWrapper } from '../index';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem, { MenuItemInterface } from './MenuItem';

const cx = classNames.bind(styles);

interface MenuProps {
  items: MenuItemInterface[];
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  onChange: (item: MenuItemInterface) => void;
}

interface History {
  title?: string;
  data: MenuItemInterface[];
}

const Menu: React.FC<MenuProps> = ({ children, items, onChange }) => {
  const [history, setHistory] = useState<History[]>([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data?.map((item, idx) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={idx}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [
                ...prev,
                item.children as unknown as History,
              ]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive={true}
      delay={[0, 500]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title="Languages"
                onBack={() => {
                  setHistory(history.slice(0, history.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
