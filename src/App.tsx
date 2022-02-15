import React, { useState, useEffect, FC } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";

export interface Message {
  id: string;
  text: string;
  author: string;
}

const botAuthors: string[] = [
  "Jacque Fresco",
  "Philippe Starck",
  "Victor J. Papanek",
  "Dieter Rams",
  "Thomas Chippendale",
  "Karim Rashid",
  "Ron Arad",
];

const botText: string[] = [
  "Лучше быть последним — первым, чем первым — последним.",
  "На случай, если буду нужен, то я там же, где и был, когда был не нужен.",
  "Если волк молчит то лучше его не перебивай.",
  "Каждый в цирке думает, что знает в цирке, но не каждый, что в цирке знает, что в цирке не каждый знает думает.",
  "Легко вставать, когда ты не ложился.",
  "За двумя зайцами погонишься — рыбку из пруда не выловишь, делу время, а отмеришь семь раз.",
  "Каждый думает, что не знает что, но не каждый не знает, что знает, кто не я...",
  "Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.",
];

function arrRandom(arr: string[]) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

interface AppState {
  messages: Message[];
}

const defaultMessages = [
  {
    id: "1",
    author: "Jacque Fresco",
    text: "Welcome to the chat",
  },
];

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === "User") {
      const timeout = setTimeout(
        () =>
          addMessage({
            text: arrRandom(botText),
            author: arrRandom(botAuthors),
          }),
        Math.floor(Math.random() * 3000),
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
    <>
      <h1>Welcome to react</h1>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
