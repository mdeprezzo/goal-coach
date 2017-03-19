import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, ListGroup } from 'react-bootstrap';
import _ from 'lodash';
import { fetchGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
 componentDidMount() {
  this.props.fetchGoals(); 
 }

 renderList() {
  return this.props.goals.map((goal, index) => {
   return (
    <GoalItem key={index} goal={goal} />
   );   
  });
 }

 render() {
  return (
   <div>
    <Row>
     <Col md={12}>
      <ListGroup>
       {this.renderList()}
      </ListGroup>
     </Col>
    </Row>

    <hr />
   </div>
  );	
 }
}

const mapStateToProps = state => {
 const goals = _.map(state.goals, (val, key) => {
  return { ...val, key };
 });

 return { goals };
};

export default connect(mapStateToProps, { fetchGoals })(GoalList);