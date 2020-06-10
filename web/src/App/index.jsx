import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthPage, HomePage } from 'trainer/pages';
import { Header } from 'trainer/components/Header';
import { HomePageUrl, AuthPageUrl } from 'trainer/routing';
import css from './App.css';

export const App = () => {
  const homeUrl = HomePageUrl();
  const authUrl = AuthPageUrl();

  return (
    <div className={css.wrapper}>
      <Header />
      <Switch>
        <Route path={homeUrl} component={HomePage} exact />
        <Route path={authUrl} component={AuthPage} />
      </Switch>
    </div>
  );
};
