import { CREATE_GOAL, FETCH_GOALS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case FETCH_GOALS:
   return action.payload;
  case CREATE_GOAL: 
   return INITIAL_STATE;
  default:
   return state;	
 }
};

