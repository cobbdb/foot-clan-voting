import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './store';
import { connect as connectSocket } from './socket';
import Landing from './components/landing';
import Dashboard from './components/dashboard';
import Summary from './components/summary';
import Breakdown from './components/breakdown';
import SocketLoader from './components/SocketLoader';

import './styles/theme.scss';

class App extends React.PureComponent {
  componentDidMount() {
    connectSocket();
  }

  render() {
    if (this.props.ready) {
      return (
        <Router history={history}>
          <div className="bg-dark">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/dash" component={Dashboard} />
              <Route path="/summary" component={Summary} />
              <Route path="/breakdown" component={Breakdown} />
            </Switch>
          </div>
        </Router>
      );
    }
    return <SocketLoader />;
  }
}

export default connect(store => ({
  ready: store.socket.open,
}))(App);
