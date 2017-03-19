import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { firebaseApp } from '../firebase';
import '../App.css';

class SignUp extends Component {
 constructor(props) {
  super(props);

  this.state = {
   email: '',
   password: '',
   error: {
   	message: ''
   }	
  };
 }

 onSignUp() {
  const { email, password } = this.state;

  firebaseApp.auth().createUserWithEmailAndPassword(email, password)
   .then(() => console.log('success'))
   .catch(error => this.setState({ error }));
 }

 render() {
  return (
   <div>
    <h2>Sign Up</h2>

    <Form inline>
     <FormGroup className="App-form-group">
      <FormControl
       type="text"
       placeholder="email"
       onChange={event => this.setState({ email: event.target.value })}
       value={this.state.email}
      />
     </FormGroup>
     <FormGroup className="App-form-group">
      <FormControl
       type="password"
       placeholder="password"
       onChange={event => this.setState({ password: event.target.value })}
       value={this.state.password}
      />
     </FormGroup>
     <FormGroup>
      <Button 
       bsStyle="primary"
       type="button"
       onClick={this.onSignUp.bind(this)}
      >
       Sign Up
      </Button>
     </FormGroup>
    </Form>

    <div>{this.state.error.message}</div>
    <div>
     <Link to={'/signin'}>Already a member ? Sign in instead</Link>
    </div>
   </div>
  );	
 }	
}

export default SignUp;
