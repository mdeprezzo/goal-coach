import { 
 CREATE_GOAL,
 FETCH_GOALS,
 FETCH_COMPLETE_GOALS,
 DELETE_ALL_COMPLETE
} from './types';
import { databaseRef, databaseCompleteRef } from '../firebase';

export const createGoal = ({ email, title }) => {
 return (dispatch) => {
  databaseRef.push({ email, title });

  dispatch({ type: CREATE_GOAL });
 };
};

export const fetchGoals = () => {
 return (dispatch) => {
  databaseRef.on('value', snapshot => {
   dispatch({
   	type: FETCH_GOALS,
   	payload: snapshot.val()
   });
  });	
 };
};

export const setComplete = ({ key, title, email}) => {
 return (dispatch) => {
  databaseRef.child(key).remove();
  databaseCompleteRef.push({ title, email });
 };	
};

export const fetchCompleteGoals = () => {
 return (dispatch) => {
  databaseCompleteRef.on('value', snapshot => {
   dispatch({
   	type: FETCH_COMPLETE_GOALS,
   	payload: snapshot.val()
   })  	
  });	
 };
};

export const deleteAllComplete = () => {
 return (dispatch) => {
  databaseCompleteRef.set([]);

  dispatch({ type: DELETE_ALL_COMPLETE });
 };
};
