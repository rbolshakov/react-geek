import React, { useState } from 'react';
import './App.css';
import { ChatForm } from './Components/ChatForm/ChatForm';

export function App() {
  const [messageList, setMessageList] = useState([]);
  const changeMessageList = (newMessage) => {
    setMessageList([...messageList, newMessage]);
  };

  // useEffect(() => {
  //   if (messageList.length !== 0) {
  //     const timer = setTimeout(() => {
  //       alert(
  //         'сообщение от ' +
  //           messageList[messageList.length - 1].chatAuthor +
  //           ' отправленно'
  //       );
  //     }, 1500);
  //     return () => clearTimeout(timer);
  //   }
  // }, [messageList]);

  return (
    <div className="App">
      <div className="chatWindow container">
        {messageList.map((el, i) => {
          return (
            <div key={i} className="chatMessage">
              <p className="chatMessage__author">{el.chatAuthor}</p>
              <p className="chatMessage__text">{el.chatText}</p>
            </div>
          );
        })}
      </div>
      <ChatForm changeMessageList={changeMessageList} />
    </div>
  );
}
