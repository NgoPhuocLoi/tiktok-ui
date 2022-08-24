import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '../../../config';
import { HomeIcon, LiveIcon, UserGroupIcon } from '../../../components/Icons';
import { useLocation } from 'react-router-dom';
import { AccountList } from './AccountList';
import Discover from './Discover';

const cx = classNames.bind(styles);

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon active={pathname === config.routes.home} />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon active={pathname === config.routes.following} />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon active={pathname === config.routes.live} />}
        />
      </Menu>

      <AccountList label="Suggested Accounts" />
      <AccountList label="Following Accounts" />

      <Discover />
    </aside>
  );
};

export default Sidebar;
