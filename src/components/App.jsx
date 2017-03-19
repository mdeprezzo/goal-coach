import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'react-bootstrap';
import { userLogout } from '../actions';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import GoalCompletedList from './GoalCompletedList';

class App extends Component {
 onSignOut() {
  this.props.userLogout();
 }

 render() {
  return (
   <Grid>
    <h3>Goals Coach</h3>
    <AddGoal />

    <h4>Goals</h4>
    <GoalList />

    <h4>Complete Goals</h4>
    <GoalCompletedList />

    <Button
     bsStyle="danger"
     onClick={this.onSignOut.bind(this)}
    >
     Sign Out	
    </Button>
   </Grid>
  );	
 }
}

const mapStateToProps = state => {
 const { email } = state.auth;

 return { email };
};

export default connect(mapStateToProps, { userLogout })(App);
