import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalTemplate from 'templates/GlobalTemplate';
import PageTemplate from 'templates/PageTemplate';
import LoginPage from 'views/LoginPage';

function App() {
  return (
    <GlobalTemplate>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={PageTemplate} />
        </Switch>
      </Router>
    </GlobalTemplate>
  );
}

export default App;
