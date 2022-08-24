import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import styles from './AccountList.module.scss';

const cx = classNames.bind(styles);

interface Props {
  label: string;
}

const AccountList = ({ label }: Props) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx('more-btn')}>See all</p>
    </div>
  );
};

export default AccountList;
