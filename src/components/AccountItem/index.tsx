import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import images from '../../assets/images';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Ngo Phuoc Loi</span>
          <FontAwesomeIcon
            className={cx('check')}
            icon={faCheckCircle as IconProp}
          />
        </h4>
        <span className={cx('username')}>phuocloi2511</span>
      </div>
    </div>
  );
};

export default AccountItem;
