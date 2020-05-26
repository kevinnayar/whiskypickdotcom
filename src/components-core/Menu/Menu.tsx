import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = React.memo(() => {
  return (
    <div className="menu">
      <Link to="/whiskies">
        <i className="material-icons">local_bar</i>
        <p>Whiskies</p>
      </Link>
      <Link to="/users">
        <i className="material-icons">group</i>
        <p>Users</p>
      </Link>
    </div>
  );
});

export default Menu;

