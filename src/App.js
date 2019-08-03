import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './store';
import Landing from './components/landing';

import './styles/theme.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="*" component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
