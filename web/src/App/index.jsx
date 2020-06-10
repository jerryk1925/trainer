import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthPage, HomePage } from 'trainer/pages';
import { Header } from 'trainer/components/Header';

import { HomePageUrl, AuthPageUrl } from 'trainer/routing';

export const App = () => {
  const homeUrl = HomePageUrl();
  const authUrl = AuthPageUrl();
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/auth" component={HomePage} />
        <Route path="/" component={AuthPage} exact />
      </Switch>
      App
    </div>
  );
};
