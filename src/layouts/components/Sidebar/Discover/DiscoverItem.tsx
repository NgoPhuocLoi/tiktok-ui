import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  type: number;
}

const DiscoverItem = ({ title, type }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={cx('item')}>
      {type === 2 ? (
        <MusicIcon className={cx('icon')} />
      ) : (
        <HashtagIcon className={cx('icon')} />
      )}
      <p className={cx('title')}>{title}</p>
    </a>
  );
};
function MusicIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 48 48"
      fill="rgba(22, 24, 35, 1.0)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"
      ></path>
    </svg>
  );
}

function HashtagIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 48 48"
      fill="rgba(22, 24, 35, 1.0)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
      ></path>
    </svg>
  );
}

export default DiscoverItem;
