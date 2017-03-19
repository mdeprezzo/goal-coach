import * as firebase from 'firebase';

const config = {
 apiKey: "AIzaSyDPFkuiAXVamGGn7ALMtjO9d8aqj54lZnU",
 authDomain: "goalcoach-af8e4.firebaseapp.com",
 databaseURL: "https://goalcoach-af8e4.firebaseio.com",
 storageBucket: "goalcoach-af8e4.appspot.com",
 messagingSenderId: "1093647216728"
};

export const firebaseApp = firebase.initializeApp(config);
export const databaseRef = firebase.database().ref('goals');
export const databaseCompleteRef = firebase.database().ref('completeGoals');