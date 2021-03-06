import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = React.memo(() => {
  return (
    <div className="menu">
      <NavLink exact to="/">
        <i className="material-icons">home</i>
        <p>Home</p>
      </NavLink>
      <NavLink to="/whiskies">
        <i className="material-icons">local_bar</i>
        <p>Whiskies</p>
      </NavLink>
      <NavLink to="/users">
        <i className="material-icons">group</i>
        <p>Users</p>
      </NavLink>
    </div>
  );
});

export default Menu;

