import React from 'react';
import { connect } from 'react-redux';
import Header from '../nav/Header';
import Question from './Question';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className="text-white">
        <Header />
        <div className="d-flex justify-content-center">
          <div className="bg-light p-4">
            <Question label="Realm Type?" id="realms" />
            <Question label="Want to Raid?" id="raid" />
            <Question label="Want to PvP?" id="pvp" />
            <Question label="What about your role?" id="roles" />
            <Question label="Care about faction?" id="factions" />
            <Question label="What class are you?" id="classes" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);
