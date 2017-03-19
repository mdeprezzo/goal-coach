import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ListGroupItem, Row, Col } from 'react-bootstrap';
import { setComplete } from '../actions';

class GoalItem extends Component {
 onComplete() {
  const { title, key } = this.props.goal;
  const { email } = this.props.user;

  this.props.setComplete({ title, email, key });
 }	

 render() {
  const { title, email } = this.props.goal;

  return (
   <ListGroupItem>
    <Row>
     <Col md={6} xs={6}>
      <p><strong>{title}</strong></p>
      <span>submitted by <em>{email}</em></span>
     </Col>
     <Col md={6} xs={6}>
      <Button 
       className="App-goal-list-group-item-button"
       bsStyle="primary"
       bsSize="small"
       onClick={this.onComplete.bind(this)}
      >
       Complete
      </Button>
     </Col>
    </Row>
   </ListGroupItem>	
  );	
 }	
}

const mapStateToProps = state => {
 const { user } = state.auth;

 return { user };
};

export default connect(mapStateToProps, { setComplete })(GoalItem);