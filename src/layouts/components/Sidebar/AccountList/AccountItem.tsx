import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
import { Wrapper as PopperWrapper } from '../../../../components/Popper';

const cx = classNames.bind(styles);

interface PopperWrapperProps {
  'data-placement': any;
  'data-reference-hidden'?: string | undefined;
  'data-escaped'?: string | undefined;
}

const renderReview = (props: PopperWrapperProps) => (
  <div tabIndex={-1} {...props}>
    <PopperWrapper>
      <AccountPreview />
    </PopperWrapper>
  </div>
);

const AccountItem = () => {
  return (
    <Tippy
      interactive={true}
      placement="bottom"
      delay={[800, 0]}
      offset={[-20, 0]}
      render={renderReview}
    >
      <div className={cx('account-item')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661436000&x-signature=X%2BrwkjU50QlZ4LLjdzfBtXd%2FoII%3D"
          alt="img"
        />

        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>Ngo Phuoc Loi</strong>
            <FontAwesomeIcon
              className={cx('check')}
              icon={faCheckCircle as IconProp}
            />
          </p>
          <p className={cx('name')}>ngophuocloi</p>
        </div>
      </div>
    </Tippy>
  );
};

export default AccountItem;
