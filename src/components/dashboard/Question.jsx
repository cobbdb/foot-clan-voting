import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Option from './Option';
import { models } from './models';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <Row className="d-flex py-4 border-bottom">
        <Col md="4">
          <h3 className="mb-3">{this.props.label}</h3>
        </Col>
        <Col>
          <Row>
            {models[this.props.id].map(option => (
              <Option 
                key={option} 
                id={this.props.id} 
                value={option.toLowerCase().replace(' ', '-')}
              >
                {option}
              </Option>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default connect()(Dashboard);
