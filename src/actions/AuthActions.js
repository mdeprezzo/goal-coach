import { 
 SIGNED_IN, 
 SIGNED_OUT,
 SIGNIN_FAILED
 } from './types';
import { firebaseApp } from '../firebase';

const onLoginSuccess = (dispatch, user, router) => {
 dispatch({
  type: SIGNED_IN,
  payload: user	
 });

 router.push('/app');
};

const onLoginFail = (dispatch, error) => {
 dispatch({
  type: SIGNIN_FAILED,
  payload: error	
 });
};

export const userLogin = ({ email, password }, router) => {
 return (dispatch) => {
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
   .then(user => onLoginSuccess(dispatch, user, router))
   .catch(error => onLoginFail(dispatch, error));
 };
};

export const userLogout = () => {
 return (dispatch) => {
  dispatch({ type: SIGNED_OUT });

  firebaseApp.auth().signOut();	
 }
};

export const userHasAlreadySignIn = ({ router }) => {
 return (dispatch) => {
  firebaseApp.auth().onAuthStateChanged(user => {
   if (user) {
    dispatch({
     type: SIGNED_IN,
     payload: user
    });

    router.push('/app');
   } else {
   	dispatch({ type: SIGNED_OUT });

    router.replace('/signin');
   }
  }); 	
 }
};