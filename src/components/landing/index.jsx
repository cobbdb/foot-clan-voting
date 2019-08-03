import React from 'react';
import { Container, Button } from 'reactstrap';
import { connect } from '../../socket';

class Landing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.client = connect();
  }

  handleClick() {
    this.client.send('HI THERE');
  }

  render() {
    return (
      <Container>
        <h1>Hi there!</h1>
        <Button onClick={this.handleClick}>SAY HI</Button>
      </Container>
    );
  }
}

export default Landing;
