import { ReactNode } from 'react';
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
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };
