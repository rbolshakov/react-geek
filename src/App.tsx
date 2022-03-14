import React, { FC, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import { Chats } from './pages/Chats';
import { About } from './pages/About';
import { NavBar } from './components/NavBar/NavBar';
import { NotFound } from './pages/NoFound';

export const App: FC = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/chats">
            <Route exact path="/chats">
              <Redirect to="/chats/1" />
            </Route>
            <Route path="/chats/:chatId" component={Chats} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
