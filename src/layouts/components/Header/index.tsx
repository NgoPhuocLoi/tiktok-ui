import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import images from '../../../assets/images';
import Button from '../../../components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../components/Icons';
import Image from '../../../components/Image';
import Menu from '../../../components/Popper/Menu';
import { MenuItemInterface } from '../../../components/Popper/Menu/MenuItem';
import Search from '../Search';
import styles from './Header.module.scss';
import config from '../../../config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia as IconProp} />,
    title: 'English',
    children: {
      title: 'Languages',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vn',
          title: 'Viet Nam',
        },
      ],
    },
  },

  {
    icon: <FontAwesomeIcon icon={faCircleQuestion as IconProp} />,
    title: 'Feed back and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard as IconProp} />,
    title: 'Keyboard shortcut',
  },
];

const USER_MENU = [
  {
    icon: <FontAwesomeIcon icon={faUser as IconProp} />,
    title: 'View Profile',
    to: '/@loi',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins as IconProp} />,
    title: 'Get Coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear as IconProp} />,
    title: 'Setting',
    to: '/setting',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut as IconProp} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

const currentUser = true;

const Header = () => {
  const handleMenuChange = (item: MenuItemInterface) => {
    console.log(item);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon width="2.6rem" height="2.6rem" />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button variants="text">Upload</Button>
              <Button variants="primary">Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? USER_MENU : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Loi"
                className={cx('user-avatar')}
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical as IconProp} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
