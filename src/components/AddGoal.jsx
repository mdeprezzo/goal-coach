import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { createGoal } from '../actions';

class AddGoal extends Component {
 constructor(props) {
  super(props);

  this.state = { title: '' };
 }	

 addGoal() {
  const { email } = this.props.user;
  const { title } = this.state;

  this.props.createGoal({ email, title });

  this.setState({ title: '' });
 }

 render() {
  return (
   <div>
    <Form inline>
     <FormGroup>
       <FormControl
        type="text"
        placeholder="Add a goal"
        onChange={event => this.setState({ title: event.target.value })}
        value={this.state.title}
       />
     </FormGroup>
     <FormGroup>
      <Button
       bsStyle="success"
       type="button"
       onClick={this.addGoal.bind(this)}
      >
      	Submit
      </Button>
     </FormGroup>
    </Form>

    <hr />
   </div>
  );	
 }
}

const mapStateToProps = state => {
 const { user } = state.auth;

 return { user };
};

export default connect(mapStateToProps, { createGoal })(AddGoal);
