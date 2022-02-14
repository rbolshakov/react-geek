import React from 'react';
import { useState } from 'react';

export const ChatForm = (props) => {
  const [chatMessage, setChatMessage] = useState({
    chatAuthor: '',
    chatText: '',
  });

  const handleChangeAuthor = (e) => {
    setChatMessage({ ...chatMessage, chatAuthor: e.target.value });
  };

  const handleChangeMessage = (e) => {
    setChatMessage({ ...chatMessage, chatText: e.target.value });
  };

  const handleSubmit = () => {
    props.changeMessageList(chatMessage);
    setChatMessage({ chatAuthor: '', chatText: '' });
  };
  return (
    <div className="chatInput container">
      <input
        type="text"
        placeholder="author"
        className="chatInput__author"
        onChange={handleChangeAuthor}
        value={chatMessage.chatAuthor}
      ></input>
      <textarea
        type="text"
        placeholder="text"
        className="chatInput__text"
        onChange={handleChangeMessage}
        value={chatMessage.chatText}
      ></textarea>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
