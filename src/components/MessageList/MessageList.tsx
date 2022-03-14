import React, { FC } from 'react';
import { Message } from '../ChatList/MessageList/MessageList';

interface MessageListProp {
  messages: Message[];
}

export const MessageList: FC<MessageListProp> = ({ messages }) => (
  <ul>
    {messages.map((message) => (
      <li key={message.id}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
