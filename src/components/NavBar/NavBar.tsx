import React, { FC } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { navigate } from '../../constants/Constants';

export const NavBar: FC = () => {
  return (
    <ul>
      {navigate.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              exact
              to={link.to}
              style={(isActive) => ({
                color: isActive ? 'green' : 'blue',
              })}>
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(NavBar);
