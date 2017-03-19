import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import GoalReducer from './GoalReducer';
import GoalCompleteReducer from './GoalCompleteReducer';

export default combineReducers({
 auth: AuthReducer,
 goals: GoalReducer,
 goalsComplete: GoalCompleteReducer
});