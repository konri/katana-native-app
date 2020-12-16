import { Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { AppHeader } from '../components/header/Header';
import history from '../../shared/settings/history';
import PublicRoute from '../../shared/settings/router/PublicRoute';
import RouteEnum from './RouteEnum';
import Footer from '../components/Footer';
import { HomePage } from '../pages/HomePage/HomePage';

function Loading() {
  return (
    <Dimmer active>
      <Loader />
    </Dimmer>
  );
}

const footerHeight = '4rem';
const RouterContainer = styled.div`
  padding-top: 8rem;
  min-height: calc(100vh - ${footerHeight});
  max-width: 100vw;
  overflow: hidden;
  display: flex;
`;

function AppRouter() {
  return (
    <Router>
      <AppHeader />
      <RouterContainer>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </RouterContainer>
      <Footer height={footerHeight} />
    </Router>
  );
}

export default AppRouter;
