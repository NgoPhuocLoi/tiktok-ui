import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import DiscoverItem from './DiscoverItem';

const cx = classNames.bind(styles);

const discoverList = [
  {
    title: 'suthatla',
    type: 1,
  },
  {
    title: 'mackedoi',
    type: 1,
  },
  {
    title: 'sansangthaydoi',
    type: 1,
  },
  {
    title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    type: 2,
  },
  {
    title:
      'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
    type: 2,
  },
  {
    title: '7749hieuung',
    type: 1,
  },
  {
    title: 'genzlife',
    type: 1,
  },
  {
    title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    type: 2,
  },
  {
    title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    type: 2,
  },
];

const Discover = () => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>Discover</p>
      <div className={cx('list')}>
        {discoverList.map((item, index) => (
          <DiscoverItem key={index} title={item.title} type={item.type} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
