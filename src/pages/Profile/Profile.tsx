import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisible } from '../../store/profile/actions';
import { RootState } from '../../store/profile/reducer';
import style from './Profile.module.css';

export const Profile = () => {
  const visible = useSelector((state: RootState) => state.visible);
  const name = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  return (
    <div className={style.profileWrapper}>
      <h2 className={style.profile}>Profile page</h2>
      <input type="checkbox" checked={visible} />
      <p>{name}</p>
      <button onClick={() => dispatch(toggleVisible)}>change profile</button>
    </div>
  );
};
