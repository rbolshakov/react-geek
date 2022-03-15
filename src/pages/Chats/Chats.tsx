import React, { useState, useEffect, FC, useCallback } from 'react';
import style from './Chats.module.css';
import { nanoid } from 'nanoid';
import { Link, Redirect, useParams } from 'react-router-dom';
import { arrRandom } from '../../utils/arrRandom';
import { botAuthors, botText, chats, defaultMessages } from '../../constants/Constants';
import { MessageList } from '../../components/ChatList/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { FormChats } from '../../components/ChatList/FormChats/FormChats';

export const Chats: FC = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const { chatId } = useParams<{ chatId?: string }>();

  const handleSendMessage = useCallback(
    ({ text, author }: { text: string; author: string }) => {
      setMessages((prevMessages) => {
        return {
          ...prevMessages,
          [`chat${chatId}`]: [
            ...prevMessages[`chat${chatId}`],
            {
              id: nanoid(),
              author,
              text,
            },
          ],
        };
      });
    },
    [chatId]
  );

  useEffect(() => {
    if (
      messages[`chat${chatId}`]?.length &&
      messages[`chat${chatId}`][messages[`chat${chatId}`].length - 1].author === 'User'
    ) {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            text: arrRandom(botText),
            author: arrRandom(botAuthors),
          }),
        Math.floor(Math.random() * 3000)
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages, chatId, handleSendMessage]);

  if (!messages[`chat${chatId}`]) {
    return <Redirect to="/" />;
  }

  return (
    <div className={(style.messageWrap, style.container)}>
      <ul className={style.chatsWrap}>
        {chats.map((chat) => (
          <li className={style.chatsTitle} key={chat.id}>
            <Link className={style.chatsTitle} to={`/chats/${chat.id}`}>
              {chat.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <MessageList messages={messages[`chat${chatId}`]} />
        <FormChats addMessage={handleSendMessage} />
      </div>
      <Form addMessage={handleSendMessage} />
    </div>
  );
};
