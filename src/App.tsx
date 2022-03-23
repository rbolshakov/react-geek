import React, { FC, Suspense, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Chats } from './pages/Chats/Chats';
import { About } from './pages/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { NotFound } from './pages/NoFound';
import { Provider } from 'react-redux';
import { ThemeContext, defaultState } from './utils/ThemeContext';
import { store } from './store';
import { Profile } from './pages/Profile/Profile';
import { Article } from '@mui/icons-material';
import { Articles } from './pages/Articles';

export const App: FC = () => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark,
        }}>
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
              <Route exact path="/profile" component={Profile} />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ThemeContext.Provider>
      <Articles />
    </Provider>
  );
};
