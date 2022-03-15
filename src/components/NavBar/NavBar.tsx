import style from './NavBar.module.css';
import React, { FC } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { navigate } from '../../constants/Constants';

export const NavBar: FC = () => {
  return (
    <ul className={style.nav}>
      {navigate.map((link) => {
        return (
          <li key={link.id}>
            <NavLink
              exact
              to={link.to}
              style={(isActive) => ({
                color: isActive ? 'black' : 'white',
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
