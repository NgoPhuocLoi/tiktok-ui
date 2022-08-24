import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Menu = ({ children }: Props) => {
  return <nav>{children}</nav>;
};

export default Menu;
