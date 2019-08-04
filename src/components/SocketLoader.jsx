import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

class SocketLoader extends React.PureComponent {
  render() {
    return (
      <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
        {this.props.error ? (
          <div className="text-center">
            <div className="bg-danger p-4">
              <div>
                <FontAwesomeIcon icon={faBomb} size="4x" />
              </div>
              <h5 className="text-white-50 mt-2 mb-0">
                Error {this.props.error}
              </h5>
            </div>
            <div className="bg-white p-4">
              Could not connect to server. Please try again later.
            </div>
          </div>
        ) : (
          <React.Fragment>
            <Spinner
              color="primary"
              type="grow"
              style={{ width: '5rem', height: '5rem' }}
            />
            <Spinner
              color="primary"
              type="grow"
              style={{ width: '5rem', height: '5rem' }}
            />
            <Spinner
              color="primary"
              type="grow"
              style={{ width: '5rem', height: '5rem' }}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect(store => ({
  error: store.socket.error,
}))(SocketLoader);
