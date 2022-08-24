import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Button from '../../../../../components/Button';

const cx = classNames.bind(styles);

const AccountPreview = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1661436000&x-signature=X%2BrwkjU50QlZ4LLjdzfBtXd%2FoII%3D"
          alt=""
        />
        <Button variants="primary">Follow</Button>
      </div>

      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Ngo Phuoc Loi</strong>
          <FontAwesomeIcon
            className={cx('check')}
            icon={faCheckCircle as IconProp}
          />
        </p>
        <p className={cx('name')}>ngophuocloi</p>
      </div>

      <p className={cx('analytics')}>
        <strong className={cx('value')}>8.2M</strong>
        <span className={cx('label')}>Followers</span>
        <strong className={cx('value')}>8.2M</strong>
        <span className={cx('label')}>Likes</span>
      </p>
    </div>
  );
};

export default AccountPreview;
