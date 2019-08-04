import React from 'react';
import { connect } from 'react-redux';
import { Col, Button } from 'reactstrap';
import { setResponse } from '../../actions';

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    setResponse(this.props.username, {
      [this.props.id]: this.props.value,
    });
  }

  render() {
    const user = this.props.toons.find(toon => toon.username === this.props.username);
    const active = user[this.props.id] === this.props.value;

    return (
      <Col lg="6">
        <Button
          onClick={this.handleClick}
          className={`option d-flex align-items-center m-0 ${active ? 'active' : ''}`}
          size="lg"
          block
        >
          <div 
            className={[
              'mr-2',
              `${this.props.id}-icon`,
              this.props.value.toLowerCase(),
            ].join(' ')} 
          />
          {this.props.children}
        </Button>
      </Col>
    );
  }
}

export default connect(store => ({
  toons: store.toons.records,
  username: store.toons.active,
}))(Dashboard);
