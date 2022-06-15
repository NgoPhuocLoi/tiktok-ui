import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Result } from '../../layouts/components/Search';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem: React.FC<{ data: Result }> = ({ data }) => {
  const navigate = useNavigate();
  const { full_name, avatar, nickname } = data;
  return (
    <div className={cx('wrapper')} onClick={() => navigate(`/@${nickname}`)}>
      <img className={cx('avatar')} src={avatar} alt={full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{full_name}</span>
          <FontAwesomeIcon
            className={cx('check')}
            icon={faCheckCircle as IconProp}
          />
        </h4>
        <span className={cx('username')}>{nickname}</span>
      </div>
    </div>
  );
};

export default AccountItem;
