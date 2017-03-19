import { FETCH_COMPLETE_GOALS, DELETE_ALL_COMPLETE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case FETCH_COMPLETE_GOALS:
   return action.payload;
  case DELETE_ALL_COMPLETE:
   return INITIAL_STATE;
  default:
   return state;	
 }
};

