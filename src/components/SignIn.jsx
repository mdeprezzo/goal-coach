import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { userLogin } from '../actions';
import '../App.css';

class SignIn extends Component {
 constructor(props) {
  super(props);

  this.state = {
   email: '',
   password: ''
  };
 }	

 onSignIn() {
  this.props.userLogin(this.state, this.props.router);
 }	

 render() {
  return (
   <div>
   	<h2>Sign In</h2>

   	<Form inline>
     <FormGroup className="App-form-group">
      <FormControl
       type="text"
       placeholder="Email"
       onChange={event => this.setState({ email: event.target.value })}
       value={this.state.email}
      />
     </FormGroup>

     <FormGroup className="App-form-group">
      <FormControl 
       type="password"
       placeholder="Password"
       onChange={event => this.setState({ password: event.target.value })}
       value={this.state.password}
      />
     </FormGroup>

     <FormGroup>
      <Button 
       bsStyle="primary"
       onClick={this.onSignIn.bind(this)}
      >
       Sign In
      </Button>
     </FormGroup>
   	</Form>

   	<div>{this.props.error.message}</div>
   	<div>
     <Link to={'/signup'}>Sign up instead</Link>
   	</div>
   </div>
  );	
 }	
}

const mapStateToProps = state => {
 const { error } = state.auth;

 return { error };
};

export default connect(mapStateToProps, { userLogin })(SignIn);
