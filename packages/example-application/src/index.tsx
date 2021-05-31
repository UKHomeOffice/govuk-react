import React from 'react';
import * as GovUK from 'govuk-react';
import { MemoryRouter as Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './home';
import Form from './form';

const ExampleApplication = () => (
  <Router>
    <GovUK.GlobalStyle />
    <GovUK.TopNav
      serviceTitle={
        <GovUK.TopNav.Anchor as={Link} to="/">
          React
        </GovUK.TopNav.Anchor>
      }
    >
      <GovUK.TopNav.NavLink as={Link} to="/">
        Home
      </GovUK.TopNav.NavLink>
      <GovUK.TopNav.NavLink as={Link} to="Form">
        Form
      </GovUK.TopNav.NavLink>
    </GovUK.TopNav>
    <GovUK.Page.WidthContainer
      beforeChildren={<GovUK.PhaseBanner level="alpha">This part of GOV.UK is being rebuilt</GovUK.PhaseBanner>}
    >
      <GovUK.Page.Main>
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </GovUK.Page.Main>
    </GovUK.Page.WidthContainer>
    <GovUK.Footer />
  </Router>
);

export default ExampleApplication;
