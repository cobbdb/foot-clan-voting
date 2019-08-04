import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({ type: 'CLEAR' });
  }

  handleClick({ target }) {
    this.props.dispatch({ type: 'SELECT_TOON', username: target.id });
  }

  render() {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="display-4 text-primary mb-4">Who Are You?</h1>
          <div className="d-flex flex-column">
            {this.props.toons.map(toon => (
              <Link
                to="/dash"
                key={toon.username}
                id={toon.username}
                className={[
                  'btn btn-light btn-lg rounded-sm text-capitalize mb-2',
                  `text-${toon.username}`,
                ].join(' ')}
                onClick={this.handleClick}
              >
                {toon.username}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  toons: store.toons.records,
}))(Landing);
