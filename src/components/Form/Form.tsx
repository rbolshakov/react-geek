import React, { useState, FC } from 'react';
import { Input, Button } from '@mui/material';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PropTypes from 'prop-types';
import './Form.css';

interface Message {
  text: string;
  author: string;
}

interface FormProps {
  addMessage: (message: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');

  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage({
      text,
      author: 'User',
    });
    setText('');
  };

  return (
    <form onSubmit={handleText}>
      <Input className="formInput" value={text} onChange={(ev) => setText(ev.target.value)} />
      <Button variant="contained" startIcon={<SendRoundedIcon />} type="submit">
        Send
      </Button>
    </form>
  );
};

Form.propTypes = {
  addMessage: PropTypes.any,
};
