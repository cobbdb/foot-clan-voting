import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './store';
import Header from './components/nav/Header';
import Landing from './components/landing';
import Dashboard from './components/Dashboard';

import './styles/theme.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
