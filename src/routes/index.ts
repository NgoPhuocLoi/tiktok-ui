// Pages
import { Home, Following, Profile, Upload, Search } from '../pages';

// Layouts
import { HeaderOnly } from '../components/Layout';
import { ExoticComponent, ReactNode } from 'react';

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
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
