import * as React from 'react';
import { Link } from 'react-router-dom';

const Logo = React.memo(() => {
  return (
    <Link className="logo" to="/">
      whiskypick
    </Link>
  );
});

export default Logo;
