import { ReactNode } from 'react';

import configRoutes from '../config/routes';
import { HeaderOnly } from '../components/Layouts';
import { Following, Home, Profile, Search, Upload } from '../pages';

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
  { path: configRoutes.home, component: Home },
  { path: configRoutes.following, component: Following },
  { path: configRoutes.profile, component: Profile },
  { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
  { path: configRoutes.search, component: Search, layout: null },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
