import React, { FC, useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
interface Message {
  text: string;
  author: string;
}

interface FormProps {
  addMessage: (message: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const { dark, toggleDark } = useContext(ThemeContext);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (toggleDark) {
      toggleDark();
    }
  };

  return (
    <>
      <h1>{dark ? '🌙' : '🌞'}</h1>
      <button onClick={handleOnClick}>
        Switch to <span>{dark ? '🌞' : '🌙'}</span>
      </button>
    </>
  );
};
