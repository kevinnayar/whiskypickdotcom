import * as React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const Header = React.memo(() => {
  return (
    <div className="header">
      <Logo />
      <Menu />
    </div>
  );
});

export default Header;

