import React from 'react';
import { connect } from 'react-redux';
import Header from '../nav/Header';
import Poll from './Poll';

class Summary extends React.PureComponent {
  render() {
    return (
      <div className="text-white">
        <Header />
        <div className="d-flex justify-content-center">
          <div className="bg-light p-4">
            <Poll label="Realm Type?" id="realms" />
            <Poll label="Want to Raid?" id="raid" />
            <Poll label="Want to PvP?" id="pvp" />
            <Poll label="What about your role?" id="roles" />
            <Poll label="Care about faction?" id="factions" />
            <Poll label="What class are you?" id="classes" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Summary);
