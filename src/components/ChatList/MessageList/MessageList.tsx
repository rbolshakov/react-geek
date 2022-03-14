import React, { FC } from 'react';
import style from './Message.module.css';

export interface Message {
  id: string;
  text: string;
  author: string;
}
interface MessageListProp {
  messages: Message[];
}

export const MessageList: FC<MessageListProp> = ({ messages }) => (
  <ul className={style.messageList}>
    {messages.map((message) => (
      <li className={style.message} key={message.id}>
        <span className={style.messageAuthor}>{message.author}:</span> {message.text}
      </li>
    ))}
  </ul>
);
