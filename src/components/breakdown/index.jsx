import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Header from '../nav/Header';

class Breakdown extends React.PureComponent {
  render() {
    return (
      <div className="text-white">
        <Header />
        <div className="d-flex justify-content-center">
          <div className="bg-light p-4">
            {this.props.toons.map(toon => (
              <Row className={`mb-3 text-${toon.username}`}>
                <Col>
                  <h3 className="text-capitalize text-right">
                    {toon.username}:
                  </h3>
                </Col>
                <Col>
                  <h3 className="font-italic">
                    {toon[this.props.id]}
                  </h3>
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  toons: store.toons.records,
  id: store.toons.facet,
}))(Breakdown);
