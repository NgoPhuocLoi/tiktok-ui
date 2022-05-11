import React, { ReactNode } from 'react';
import './GlobalStyle.scss';

interface Props {
  children: ReactNode;
}

const GlobalStyle = ({ children }: Props) => {
  return <>{children}</>;
};

export default GlobalStyle;
