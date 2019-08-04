import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class Poll extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { counts: {}, total: 0 };
    this.colors = [
      'bg-primary',
      'bg-info',
      'bg-secondary',
      'bg-warning',
      'bg-dark',
    ];

    this.calculate = this.calculate.bind(this);
    this.handleBreakdown = this.handleBreakdown.bind(this);
  }

  componentDidMount() {
    this.calculate();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.calculate();
    }
  }

  calculate() {
    let total = 0;
    let counts = {};
    this.props.toons.forEach((toon) => {
      const response = toon[this.props.id];
      if (response) {
        counts[response] = counts[response] || 0;
        counts[response] += 1;
        total += 1;
      }
    });
    this.setState({ counts, total });
  }

  handleBreakdown() {
    this.props.dispatch({ type: 'SET_BREAKDOWN', facet: this.props.id });
  }

  render() {
    return (
      <Row className="d-flex py-4 border-bottom">
        <Col md="4" className="d-flex justify-content-between">
          <h3 className="mb-0">{this.props.label}</h3>
          <Link
            to="/breakdown"
            className="btn btn-light d-flex align-items-center"
            onClick={this.handleBreakdown}
          >
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          </Link>
        </Col>
        <Col>
          <div className="progress font-weight-bold mt-2" style={{ height: '1.7rem' }}>
            {Object.keys(this.state.counts).map((name, i) => {
              if (name === 'undefined') {
                return '';
              }

              // const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
              const backgroundColor = this.colors[i];
              const ratio = this.state.counts[name] / this.state.total * 100;
              return (
                <div
                  key={name}
                  className={`progress-bar text-capitalize ${backgroundColor}`}
                  role="progressbar"
                  style={{ width: `${ratio}%` }} // , backgroundColor }}
                  aria-valuenow={ratio}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {name} ({this.state.counts[name]})
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    );
  }
}

export default connect(store => ({
  toons: store.toons.records,
  username: store.toons.active,
}))(Poll);
