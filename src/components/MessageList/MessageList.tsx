import React, { FC } from "react";
import { Message } from "../../App";
import "./Message.css";

interface MessageListProp {
  messages: Message[];
}

export const MessageList: FC<MessageListProp> = ({ messages }) => (
  <ul className="messageList">
    {messages.map((message) => (
      <li className="message" key={message.id}>
        <span className="messageAuthor">{message.author}:</span> {message.text}
      </li>
    ))}
  </ul>
);
