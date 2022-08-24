import { ReactNode } from 'react';

import config from '../config';
import { HeaderOnly } from '../layouts';
import { Following, Home, Live, Profile, Search, Upload } from '../pages';

interface Props {
  children: ReactNode;
}

interface Route {
  path: string;
  component: () => JSX.Element;
  layout?: (({ children }: Props) => JSX.Element) | null;
}

// Public Route
const publicRoutes: Route[] = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live, component: Live },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
