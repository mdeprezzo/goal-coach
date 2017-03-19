import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { fetchCompleteGoals, deleteAllComplete } from '../actions';

class GoalCompletedList extends Component {
 componentDidMount() {
  this.props.fetchCompleteGoals();
 }

 onDeleteAll() {
  this.props.deleteAllComplete();
 }

 renderList() {
  return this.props.goalsComplete.map((goal, index) => {
   return (
    <ListGroupItem key={index}>
     <strong>{goal.title}</strong> completed by <em>{goal.email}</em>
    </ListGroupItem>
   );
  });	
 }

 render() {
  return (
   <div>
   	<ListGroup>
     {this.renderList()}
   	</ListGroup>

   	<Button
     bsStyle="primary"
     onClick={this.onDeleteAll.bind(this)}
   	>
     Clear all
   	</Button>

   	<hr />
   </div>
  );	
 }
}

const mapStateToProps = state => {
 const goalsComplete = _.map(state.goalsComplete, (val, key) => {
  return { ...val, key };
 });

 return { goalsComplete };
};

export default connect(mapStateToProps, { 
 fetchCompleteGoals, deleteAllComplete 
})(GoalCompletedList);
