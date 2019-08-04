import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUsers, faUserCog } from '@fortawesome/free-solid-svg-icons';

class Header extends React.PureComponent {
  render() {
    return (
      <div id="header" className="px-3 bg-secondary d-flex align-items-center">
        <NavLink exact to="/" className="btn btn-secondary btn-lg rounded-pill">
          <FontAwesomeIcon size="lg" flip="horizontal" icon={faSignOutAlt} />
        </NavLink>
        <div className="w-100 text-center">
          <NavLink 
            to="/dash" 
            className={[
              'btn btn-secondary btn-lg mr-4 rounded-pill text-capitalize',
              `text-${this.props.username}`,
            ].join(' ')}
          >
            <FontAwesomeIcon icon={faUserCog} className="mr-2" />
            {this.props.username}
          </NavLink>
          <NavLink to="/summary" className="btn btn-secondary btn-lg rounded-pill mr-3">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            The FETs
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  username: store.toons.active,
}))(Header);
