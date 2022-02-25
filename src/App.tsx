import React, { useState, useEffect, FC } from 'react';
import style from './App.module.css';
import { nanoid } from 'nanoid';
import { Message, MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';
import { defaultMessages, botAuthors, botText } from './constants/Constants';
import { arrRandom } from './utils/arrRandom';

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === 'User') {
      const timeout = setTimeout(
        () =>
          addMessage({
            text: arrRandom(botText),
            author: arrRandom(botAuthors),
          }),
        Math.floor(Math.random() * 3000)
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = ({ text, author }: { text: string; author: string }) => {
    setMessages([
      ...messages,
      {
        id: nanoid(),
        author,
        text,
      },
    ]);
  };

  return (
    <div className={(style.messageWrap, style.container)}>
      <h1 className={style.messageTitle} key={nanoid()}>
        Welcome to react
      </h1>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </div>
  );
};
